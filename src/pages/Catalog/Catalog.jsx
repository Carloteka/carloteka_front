import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { PageTitle } from '../../components/pageTitle/PageTitle.tsx';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter.tsx';
import { Paginator } from '../../components/Paginator/Paginator.tsx';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard.tsx';
import { PopularGoods } from '../../components/popularGoods/index.ts';
import {
  FlexContainer,
  ShowFiltersBtn,
  Aside,
  Form,
  Checkbox,
  Price,
  TagsContainer,
  FlexDiv,
  SelectBox,
  Backdrop,
  Menu,
  CheckedIcon,
  SelectItem,
  GoodsList,
  NoResultBox,
  NoResult,
} from './Catalog.styled.js';

import sprite from '../../images/sprite.svg';
import { fetchAllGoods, fetchFilteredGoods } from '../../api/api.js';

import MultiRangeSlider from 'multi-range-slider-react';

const Catalog = () => {
  const isFirst = useRef(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const [selectValue, setSelectValue] = useState(getSortingValue());
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  function isChecked(field, value) {
    const temp = params[field];

    return temp && temp.includes(value) ? true : false;
  }

  function getPriceValue(field) {
    const temp = params[field];

    return temp ? temp : field === 'price_max' ? 10000 : 0;
  }

  function getSortingValue() {
    let sortBy = 'За популярністю';
    switch (params['order_by']) {
      case 'price':
        sortBy = 'Від дешевих до дорогих';
        break;

      case '-price':
        sortBy = 'Від дорогих до дешевих';
        break;
    }
    return sortBy;
  }

  let categories = [];

  if (localStorage.getItem('categories')) {
    categories = JSON.parse(localStorage.getItem('categories'));
  }

  const [catalog, setCatalog] = useState([]);

  const [quantity, setQuantity] = useState(catalog?.length);
  const [limit] = useState(12);
  const [tags, setTags] = useState([]);

  const [category] = useState(categories);

  useEffect(() => {
    if (query) {
      const newparams = {
        ...params,
        query: query,
      };

      setSearchParams(newparams);
    }

    async function getAllGoods() {
      try {
        setIsLoading(true);
        const data = await fetchAllGoods(12);
        setQuantity(data.count);
        setCatalog(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (isFirst.current) {
      isFirst.current = false;
      if (Object.keys(params).length === 0) {
        getAllGoods();
        return;
      }
      handleSubmit();
    }

    setTags(getTags());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, params, setSearchParams]);

  function getTags() {
    const tagsList = [];
    category.forEach((el) => {
      if (isChecked('category__id', el.id)) {
        tagsList.push({
          field: 'category__id',
          value: el.id,
          tag: el.name,
        });
      }
    });

    if (isChecked('stock', 'IN_STOCK')) {
      tagsList.push({ field: 'stock', value: 'IN_STOCK', tag: 'В наявності' });
    }
    if (isChecked('stock', 'SPECIFIC_ORDER')) {
      tagsList.push({
        field: 'stock',
        value: 'SPECIFIC_ORDER',
        tag: 'Під замовлення',
      });
    }

    const priceFrom = 'price_min';
    const priceTo = 'price_max';
    const price = `₴${params[priceFrom] ? getPriceValue('price_min') : 0} - ₴${
      params[priceTo] && getPriceValue('price_max')
    }`;

    if (params[priceTo] || params[priceFrom]) {
      tagsList.push({ field: 'price', tag: price });
    }

    // if (tagsList.length > 0) {
    //   tagsList.push('dummy');
    // }

    return tagsList;
  }

  function getRangeToDisplay() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    let range = '';
    if (!params.offset) {
      range = `1-${catalog.length}`;
    } else {
      range = `${+params.offset + 1}-${+params.offset + catalog.length}`;
    }
    if (catalog.length === 1) {
      range = !params.offset ? '1' : `${+params.offset + catalog.length}-й`;
    }
    return range;
  }

  function getGoodsInStock() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    const amount = catalog.filter((el) => el.stock === 'IN_STOCK');
    return amount.length;
  }

  function getGoodsToOrder() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.stock === 'SPECIFIC_ORDER');
    return amount.length;
  }

  function onChangeHandler(field, value) {
    let newparams = {};
    let temp = params[field];

    if (
      field === 'price_min' ||
      field === 'price_max' ||
      field === 'order_by'
    ) {
      newparams = {
        ...params,
        [field]: value,
      };

      setSearchParams(newparams);

      if (field === 'order_by') {
        let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');
        getFilteredCategories(s);
      }

      return;
    }

    if (temp && temp.includes(value)) {
      const t = temp
        .replace(`&${field}=${value}`, '')
        .replace(`${value}&${field}=`, '')
        .replace(value, '');
      newparams = {
        ...params,
        [field]: t,
      };
      if (t === '') {
        delete newparams[field];
      }
    } else {
      newparams = {
        ...params,
        [field]: temp ? temp + `&${field}=` + value : value,
      };
    }

    setSearchParams(newparams);
    let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');
    getFilteredCategories(s);
  }

  async function getFilteredCategories(filter) {
    try {
      setIsLoading(true);
      const data = await fetchFilteredGoods(filter);
      setQuantity(data.count);
      setCatalog(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e?.preventDefault();

    let tempPrice = {};
    if (minValue !== 0) {
      tempPrice.price_min = minValue;
    }
    if (maxValue !== 10000) {
      tempPrice.price_max = maxValue;
    }

    setSearchParams({ ...params, ...tempPrice });

    let newparams = {};
    newparams = {
      ...params,
    };

    const priceTo = 'price_max';
    const priceFrom = 'price_min';
    if (newparams[priceTo] || newparams[priceFrom]) {
      newparams[priceTo] = maxValue;
      newparams[priceFrom] = minValue;
      setSearchParams(newparams);
    }

    let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');
    getFilteredCategories(s);
  };

  function toggleSelectMenu(e) {
    if (e.target.nodeName === 'SPAN') {
      return;
    }
    setShowSelectMenu((prev) => !prev);
  }

  function deleteFilter(field, value) {
    const newTags = tags.filter(
      (el) => !(el.field === field && el.value === value),
    );

    setTags(newTags);

    if (field === 'price') {
      setMaxValue(10000);
      setMinValue(0);
      let newparams = {};
      newparams = {
        ...params,
      };

      delete newparams.price_min;
      delete newparams.price_max;

      setSearchParams(newparams);
      let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');
      getFilteredCategories(s);
      return;
    }

    onChangeHandler(field, value);
    handleSubmit();
  }

  function pageChanger(page) {
    console.log(page, 'page');
    const offset = (page - 1) * limit;
    let newparams = {};
    if (offset !== 0) {
      newparams = { ...params, offset };
    } else {
      newparams = { ...params };
      delete newparams.offset;
    }

    setSearchParams(newparams);
    let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');
    getFilteredCategories(s);
    // handleSubmit();
  }

  function clearOffset() {
    if (params.offset) {
      const newparams = { ...params };
      delete newparams.offset;
      setSearchParams(newparams);
    }
  }

  function getSortedGoods() {
    if (params.order_by) {
      return catalog;
    }
    return catalog.sort((a, b) => {
      if (a.stock === 'IN_STOCK' && b.stock === 'IN_STOCK') {
        return 0;
      } else if (a.stock === 'IN_STOCK') {
        return -1;
      } else if (b.stock === 'IN_STOCK') {
        return 1;
      } else if (a.stock === 'BACKORDER' && b.stock === 'BACKORDER') {
        return 0;
      } else if (a.stock === 'BACKORDER') {
        return -1;
      } else if (b.stock === 'BACKORDER') {
        return 1;
      } else {
        return a.stock - b.stock;
      }
    });
  }

  const [minValue, setMinValue] = useState(getPriceValue('price_min'));
  const [maxValue, setMaxValue] = useState(getPriceValue('price_max'));

  return (
    <>
      {isLoading && <Loader />}
      <PageTitle>Каталог</PageTitle>
      <ContainerLimiter paddingTopMob={'16px'} paddingTopDesc={'56px'}>
        <FlexContainer>
          <ShowFiltersBtn
            type="button"
            className={showFilters ? 'secondaryBtn' : 'primaryBtn'}
            onClick={() => setShowFilters((prev) => !prev)}
          >
            {showFilters ? 'Сховати фільтри' : 'Фільтри'}
          </ShowFiltersBtn>
          <Aside $show={showFilters}>
            <Form onSubmit={handleSubmit} id="filter">
              <fieldset>
                <legend>Категорії товарів</legend>
                {category?.map((el) => (
                  <label key={el.id}>
                    <Checkbox
                      type="checkbox"
                      name="cat"
                      value={el.id}
                      checked={isChecked('category__id', el.id)}
                      onChange={() => onChangeHandler('category__id', el.id)}
                    />
                    {el.name}
                  </label>
                ))}
              </fieldset>

              <fieldset>
                <legend>Наявність в магазині</legend>

                <label>
                  <Checkbox
                    type="checkbox"
                    name="stock"
                    value="IN_STOCK"
                    checked={isChecked('stock', 'IN_STOCK')}
                    onChange={() => onChangeHandler('stock', 'IN_STOCK')}
                  />
                  В наявності ({getGoodsInStock()})
                </label>

                <label>
                  <Checkbox
                    type="checkbox"
                    name="stock"
                    value="SPECIFIC_ORDER"
                    checked={isChecked('stock', 'SPECIFIC_ORDER')}
                    onChange={() => onChangeHandler('stock', 'SPECIFIC_ORDER')}
                  />
                  Під замовлення ({getGoodsToOrder()})
                </label>
              </fieldset>

              <Price>
                <legend>Ціна</legend>
                <div>
                  <span>0</span>
                  <span>{maxValue}</span>
                  <span>10000</span>
                </div>

                <MultiRangeSlider
                  id="price-range"
                  min={0}
                  max={10000}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    setMinValue(e.minValue);
                    setMaxValue(e.maxValue);
                  }}
                  canMinMaxValueSame={true}
                  ruler={false}
                  label={false}
                  barLeftColor="#a7a5a3"
                  barInnerColor="#101010"
                  barRightColor="#a7a5a3"
                  thumbLeftColor="#101010"
                  thumbRightColor="#101010"
                  style={{
                    border: 'none',
                    boxShadow: 'none',
                    width: '100%',
                  }}
                />

                <div>
                  <label>
                    <input
                      type="number"
                      name="price_min"
                      max={maxValue}
                      value={minValue}
                      onChange={(e) => {
                        if (e.target.value > maxValue) return;
                        setMinValue(e.target.value);
                        onChangeHandler('price_min', e.target.value);
                      }}
                      placeholder="0"
                      min="0"
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      name="price_max"
                      value={maxValue}
                      onChange={(e) => {
                        if (e.target.value < minValue) return;
                        setMaxValue(e.target.value);
                        onChangeHandler('price_max', e.target.value);
                      }}
                      placeholder="10000"
                      min={minValue}
                      max="10000"
                    />
                  </label>
                </div>
              </Price>
              <button
                type="submit"
                className="primaryBtn"
                onClick={() => clearOffset()}
              >
                Застосувати
              </button>
            </Form>
          </Aside>

          {!query && catalog?.length > 0 ? (
            <div
              style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
            >
              {tags?.length > 0 && (
                <TagsContainer>
                  <ul>
                    {tags.map((el, index) => (
                      <li key={`${el.value}-${index}`}>
                        <p>{el.tag}</p>
                        <button
                          type="button"
                          onClick={() => deleteFilter(el.field, el.value)}
                        >
                          <svg width={9} height={9}>
                            <use href={`${sprite}#close`} />
                          </svg>
                        </button>
                      </li>
                    ))}
                    <li>
                      <label>
                        Видалити всі
                        <input
                          type="reset"
                          form="filter"
                          value=""
                          onClick={() => {
                            setSearchParams({});
                            setTags([]);
                          }}
                        />
                      </label>
                    </li>
                  </ul>
                </TagsContainer>
              )}
              <FlexDiv>
                <span>
                  Представлено {getRangeToDisplay()} з {quantity}
                </span>
                <span style={{ margin: '0 32px' }}> | </span>
                <SelectBox onClick={(e) => toggleSelectMenu(e)}>
                  <span>Сортувати: </span>
                  <p>
                    {selectValue}
                    <svg
                      width={8}
                      height={12}
                      style={{
                        transform: showSelectMenu
                          ? 'rotate(-270deg)'
                          : 'rotate(-90deg)',
                      }}
                    >
                      <use href={`${sprite}#chevron`} />
                    </svg>
                  </p>

                  <Backdrop
                    style={{ display: showSelectMenu ? 'block' : 'none' }}
                  />
                  <Menu $show={showSelectMenu}>
                    {[
                      { label: 'За популярністю', value: 'rating' },
                      { label: 'Від дешевих до дорогих', value: 'price' },
                      {
                        label: 'Від дорогих до дешевих',
                        value: '-price',
                      },
                    ].map((el) => (
                      <SelectItem
                        $show={!showSelectMenu && el.label === selectValue}
                        key={el.value}
                        onClick={() => {
                          setSelectValue(el.label);
                          onChangeHandler('order_by', el.value);
                        }}
                      >
                        {(showSelectMenu || el.label === selectValue) && (
                          <CheckedIcon
                            checked={
                              !showSelectMenu && el.label === selectValue
                            }
                            width={24}
                            height={24}
                            style={{
                              transform: 'rotate(0deg)',
                            }}
                          >
                            <use href={`${sprite}#checked`} />
                          </CheckedIcon>
                        )}

                        <p>{el.label}</p>
                      </SelectItem>
                    ))}
                  </Menu>
                </SelectBox>
              </FlexDiv>

              <GoodsList>
                {getSortedGoods()?.map((el) => (
                  <li key={el.id}>
                    <CatalogCard item={el} />
                  </li>
                ))}
              </GoodsList>
              <Paginator
                setCurrentPage={pageChanger}
                currentPage={
                  params.offset ? Math.ceil(+params.offset / limit + 1) : 1
                }
                pageCount={limit !== 12 ? 0 : Math.ceil(quantity / limit)}
              />
            </div>
          ) : (
            <NoResultBox>
              <NoResult>
                <p>За запитом {query ? `'${query}'` : ''} нічого не знайдено</p>
                <ul>
                  <li>Спробуйте ввести назву товару або категорії</li>
                  <li>Переконайтеся, що в назвах немає граматичних помилок</li>
                  <li>
                    Або скористайтесь списком усіх товарів, поділених за
                    категоріями (ліворуч)
                  </li>
                </ul>
              </NoResult>

              <PopularGoods width={3} />
            </NoResultBox>
          )}
        </FlexContainer>
      </ContainerLimiter>
    </>
  );
};

export default Catalog;
