import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  function isChecked(field, value) {
    const temp = params[field];

    return temp && temp.includes(value) ? true : false;
  }

  function getPriceValue(field) {
    const temp = params[field];

    return temp ? temp : field === 'price-to' ? 4000 : 0;
  }

  function getSortingValue() {
    let sortBy = 'За популярністю';
    switch (params['sort-by']) {
      case 'price-up':
        sortBy = 'Від дешевих до дорогих';
        break;

      case 'price-down':
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
        const data = await fetchAllGoods(12);
        setQuantity(data.length);
        setCatalog(data);
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
      if (isChecked('category-id-name', el.id_name)) {
        tagsList.push({
          field: 'category-id-name',
          value: el.id_name,
          tag: el.name,
        });
      }
    });

    const availability = 'in-stock';
    params[availability] &&
      tagsList.push({ field: 'in-stock', value: 'True', tag: 'В наявності' });

    const backorder = 'specific-order';
    params[backorder] &&
      tagsList.push({
        field: 'specific-order',
        value: 'True',
        tag: 'Під замовлення',
      });

    const priceFrom = 'price-from';
    const priceTo = 'price-to';
    const price = `₴${params[priceFrom] ? getPriceValue('price-from') : 0} - ₴${
      params[priceTo] && getPriceValue('price-to')
    }`;

    if (params[priceTo] || params[priceFrom]) {
      tagsList.push({ field: 'price', tag: price });
    }

    if (tagsList.length > 0) {
      tagsList.push('dummy');
    }

    return tagsList;
  }

  function getRangeToDisplay() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    let range = '';
    if (!params.page) {
      range = `1-${catalog.length}`;
    } else {
      range = `${(params.page - 1) * limit + 1}-${
        (params.page - 1) * limit + catalog.length
      }`;
    }
    if (catalog.length === 1) {
      range = !params.page
        ? '1'
        : `${(params.page - 1) * limit + catalog.length}-й`;
    }
    return range;
  }

  function getGoodsInStock() {
    if (!catalog || catalog?.length === 0) {
      return;
    }
    const amount = catalog.filter((el) => el.in_stock === 1);
    return amount.length;
  }

  function getGoodsToOrder() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.in_stock === 3);
    return amount.length;
  }

  function getGoodsSizeLarge() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.size === 'large');
    return amount.length;
  }
  function getGoodsSizeMiddle() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.size === 'middle');
    return amount.length;
  }
  function getGoodsSizeLittle() {
    if (catalog === undefined) {
      return;
    }
    const amount = catalog.filter((el) => el.size === 'little');
    return amount.length;
  }

  function onChangeHandler(field, value) {
    let newparams = {};
    let temp = params[field];

    if (field === 'price') {
      const priceTo = 'price-to';
      const priceFrom = 'price-from';

      newparams = {
        ...params,
      };

      delete newparams[priceTo];
      delete newparams[priceFrom];

      setSearchParams(newparams);
      return;
    }

    if (field === 'price-from' || field === 'price-to' || field === 'sort-by') {
      newparams = {
        ...params,
        [field]: value,
      };

      setSearchParams(newparams);
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
  }

  const handleSubmit = (e) => {
    e?.preventDefault();

    let newparams = {};
    newparams = {
      ...params,
    };
    const priceTo = 'price-to';
    const priceFrom = 'price-from';
    if (newparams[priceTo] || newparams[priceFrom]) {
      newparams[priceTo] = maxValue;
      newparams[priceFrom] = minValue;
      setSearchParams(newparams);
    }

    let s = location.search.replaceAll('%26', '&').replaceAll('%3D', '=');

    async function getFilteredCategories() {
      try {
        const data = await fetchFilteredGoods(s);
        setQuantity(data.count);
        setCatalog(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getFilteredCategories();
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
    onChangeHandler(field, value);

    handleSubmit();
  }

  function pageChanger(page) {
    const newparams = { ...params, page };
    setSearchParams(newparams);

    handleSubmit();
  }

  const sortedByStock = catalog.toSorted((a, b) => {
    if (a.in_stock === 1 && b.in_stock === 1) {
      return 0;
    } else if (a.in_stock === 1) {
      return -1;
    } else if (b.in_stock === 1) {
      return 1;
    } else if (a.in_stock === 2 && b.in_stock === 2) {
      return 0;
    } else if (a.in_stock === 2) {
      return -1;
    } else if (b.in_stock === 2) {
      return 1;
    } else {
      return a.in_stock - b.in_stock;
    }
  });

  const [minValue, setMinValue] = useState(getPriceValue('price-from'));
  const [maxValue, setMaxValue] = useState(getPriceValue('price-to'));

  return (
    <>
      <PageTitle>Каталог</PageTitle>
      <ContainerLimiter paddingTopMob={'16px'} paddingTopDesc={'56px'}>
        <FlexContainer>
          <Aside $show={showFilters}>
            <Form onSubmit={handleSubmit} id="filter">
              <fieldset>
                <legend>Категорії товарів</legend>
                {category?.map((el) => (
                  <label key={el.id_name}>
                    <Checkbox
                      type="checkbox"
                      name="cat"
                      value={el.id_name}
                      checked={isChecked('category-id-name', el.id_name)}
                      onChange={() =>
                        onChangeHandler('category-id-name', el.id_name)
                      }
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
                    value="True"
                    checked={isChecked('in-stock', 'True')}
                    onChange={() => onChangeHandler('in-stock', 'True')}
                  />
                  В наявності ({getGoodsInStock()})
                </label>

                <label>
                  <Checkbox
                    type="checkbox"
                    name="stock"
                    value="True"
                    checked={isChecked('specific-order', 'True')}
                    onChange={() => onChangeHandler('specific-order', 'True')}
                  />
                  Під замовлення ({getGoodsToOrder()})
                </label>
              </fieldset>

              <fieldset>
                <legend>Розмір</legend>

                <label>
                  <Checkbox type="checkbox" name="size" value="large" />
                  Великий ({getGoodsSizeLarge()} 9)
                </label>

                <label>
                  <Checkbox type="checkbox" name="size" value="middle" />
                  Середній ({getGoodsSizeMiddle()} 6)
                </label>
                <label>
                  <Checkbox type="checkbox" name="size" value="little" />
                  Маленький ({getGoodsSizeLittle()} 4)
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
                      name="price-from"
                      max={maxValue}
                      value={minValue}
                      onChange={(e) => {
                        setMinValue(e.target.value);
                        onChangeHandler('price-from', e.target.value);
                      }}
                      placeholder="0"
                      min="0"
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      name="price-to"
                      value={maxValue}
                      onChange={(e) => {
                        setMaxValue(e.target.value);
                        onChangeHandler('price-to', e.target.value);
                      }}
                      placeholder="4000"
                      min={minValue}
                      max="10000"
                    />
                  </label>
                </div>
              </Price>
              <button type="submit" className="primaryBtn">
                Застосувати
              </button>
            </Form>
          </Aside>

          <ShowFiltersBtn
            type="button"
            className={showFilters ? 'secondaryBtn' : 'primaryBtn'}
            onClick={() => setShowFilters((prev) => !prev)}
          >
            {showFilters ? 'Сховати фільтри' : 'Фільтри'}
          </ShowFiltersBtn>
          {!query && catalog?.length > 0 ? (
            <div style={{ padding: '0' }}>
              {tags?.length > 1 && (
                <TagsContainer>
                  <ul>
                    {tags.map((el, index) => (
                      <li key={`${el.value}-${index}`}>
                        <p>{el.tag}</p>
                        <svg
                          width={15}
                          height={15}
                          onClick={() => deleteFilter(el.field, el.value)}
                        >
                          <use href={`${sprite}#close`} />
                        </svg>
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
                    ))}
                  </ul>
                </TagsContainer>
              )}
              <FlexDiv
                style={{
                  marginBottom: '40px',
                  display: 'inlineFlex',
                  textAlign: 'left',
                }}
              >
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
                      { label: 'Від дешевих до дорогих', value: 'price-up' },
                      {
                        label: 'Від дорогих до дешевих',
                        value: 'price-down',
                      },
                    ].map((el) => (
                      <SelectItem
                        $show={!showSelectMenu && el.label === selectValue}
                        key={el.value}
                        onClick={() => {
                          setSelectValue(el.label);
                          onChangeHandler('sort-by', el.value);
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
                {sortedByStock?.map((el) => (
                  <li key={el.id_name}>
                    <CatalogCard item={el} />
                  </li>
                ))}
              </GoodsList>
              <Paginator
                setCurrentPage={pageChanger}
                currentPage={params.page || 1}
                pageCount={limit !== 12 ? 0 : Math.ceil(quantity / limit)}
              />
            </div>
          ) : (
            <NoResultBox>
              <NoResult>
                <p>За запитом “{query}” нічого не знайдено</p>
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
