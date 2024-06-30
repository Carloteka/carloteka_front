import css from './Catalog.module.scss';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter.tsx';
import { Paginator } from '../../components/Paginator/Paginator.tsx';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard.tsx';
import { PopularGoods } from '../../components/popularGoods/index.ts';
import sprite from '../../images/sprite.svg';
import { fetchAllGoods, fetchFilteredGoods } from '../../api/api.js';
import { checkLocalStorage } from '../../utils';

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

  const categories = checkLocalStorage('categories', []);

  const [catalog, setCatalog] = useState([]);

  const [quantity, setQuantity] = useState(catalog?.length);
  const [specOrderQuantity, setSpecOrderQuantity] = useState(0);
  const [instockQuantity, setInstockQuantity] = useState(0);
  const [tags, setTags] = useState([]);

  const [category] = useState(categories);

  const limit = 12;

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
        setInstockQuantity(data.in_stock_count);
        setSpecOrderQuantity(data.specific_order_count);
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
      setInstockQuantity(data.in_stock_count);
      setSpecOrderQuantity(data.specific_order_count);
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
      <ContainerLimiter>
        <div className={css.flexBox}>
          <button
            type="button"
            className={`${css.showFilters} ${
              showFilters ? 'secondaryBtn' : 'primaryBtn'
            }`}
            onClick={() => setShowFilters((prev) => !prev)}
          >
            {showFilters ? 'Сховати фільтри' : 'Фільтри'}
          </button>
          <aside
            className={css.aside}
            style={{ display: showFilters ? 'block' : 'none' }}
          >
            <form
              onSubmit={handleSubmit}
              id="filter"
              className={css.filtersForm}
            >
              <fieldset>
                <legend>Категорії товарів</legend>
                {category?.map((el) => (
                  <label key={el.id}>
                    <input
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
                  <input
                    type="checkbox"
                    name="stock"
                    value="IN_STOCK"
                    checked={isChecked('stock', 'IN_STOCK')}
                    onChange={() => onChangeHandler('stock', 'IN_STOCK')}
                  />
                  В наявності ({instockQuantity})
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="stock"
                    value="SPECIFIC_ORDER"
                    checked={isChecked('stock', 'SPECIFIC_ORDER')}
                    onChange={() => onChangeHandler('stock', 'SPECIFIC_ORDER')}
                  />
                  Під замовлення ({specOrderQuantity})
                </label>
              </fieldset>

              <fieldset className={css.priceFilter}>
                <legend>Ціна</legend>

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
              </fieldset>
              <button
                type="submit"
                className="primaryBtn"
                onClick={() => clearOffset()}
              >
                Застосувати
              </button>
            </form>
          </aside>

          {query && catalog?.length === 0 ? (
            <div className={css.noResultBox}>
              <div>
                <p>За запитом {query ? `'${query}'` : ''} нічого не знайдено</p>
                <ul>
                  <li>Спробуйте ввести назву товару або категорії</li>
                  <li>Переконайтеся, що в назвах немає граматичних помилок</li>
                  <li>
                    Або скористайтесь списком усіх товарів, поділених за
                    категоріями (ліворуч)
                  </li>
                </ul>
              </div>

              <PopularGoods width={3} />
            </div>
          ) : (
            <div className={css.mainContentBox}>
              {tags?.length > 0 && (
                <div className={css.tagsDiv}>
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
                </div>
              )}
              <div className={css.flexDiv}>
                <span>
                  Представлено {getRangeToDisplay()} з {quantity}
                </span>
                <span style={{ margin: '0 32px' }}> | </span>
                <div
                  className={css.selectBox}
                  onClick={(e) => toggleSelectMenu(e)}
                >
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

                  <div
                    className="backdrop"
                    style={{ display: showSelectMenu ? 'block' : 'none' }}
                  />
                  <ul
                    className={css.menu}
                    style={{
                      visibility: showSelectMenu ? 'visible' : 'hidden',
                    }}
                  >
                    {[
                      { label: 'За популярністю', value: 'rating' },
                      { label: 'Від дешевих до дорогих', value: 'price' },
                      {
                        label: 'Від дорогих до дешевих',
                        value: '-price',
                      },
                    ].map((el) => (
                      <li
                        className={css.selectItem}
                        style={{
                          backgroundColor:
                            !showSelectMenu && el.label === selectValue
                              ? '#2d3f24'
                              : 'white',
                          color:
                            !showSelectMenu && el.label === selectValue
                              ? 'white'
                              : '#101010',
                        }}
                        key={el.value}
                        onClick={() => {
                          setSelectValue(el.label);
                          onChangeHandler('order_by', el.value);
                        }}
                      >
                        {(showSelectMenu || el.label === selectValue) && (
                          <svg
                            className={`${css.checkedIcon} ${
                              !showSelectMenu &&
                              el.label === selectValue &&
                              css.checkedIconActive
                            }`}
                            checked={
                              !showSelectMenu && el.label === selectValue
                            }
                            width={24}
                            height={24}
                          >
                            <use href={`${sprite}#checked`} />
                          </svg>
                        )}

                        <p>{el.label}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className={css.goodList}>
                {getSortedGoods()?.map((el) => (
                  <li key={el.id}>
                    <CatalogCard item={el} />
                  </li>
                ))}
              </ul>
              <Paginator
                setCurrentPage={pageChanger}
                currentPage={
                  params.offset ? Math.ceil(+params.offset / limit + 1) : 1
                }
                pageCount={Math.ceil(quantity / limit)}
              />
            </div>
          )}
        </div>
      </ContainerLimiter>
    </>
  );
};

export default Catalog;
