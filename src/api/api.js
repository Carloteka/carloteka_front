import axios from 'axios';

axios.defaults.baseURL = import.meta.env.PROD
  ? 'http://carloteka.com/api'
  : 'http://localhost:8000/api';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/shop/categories/');
    const arrayData = response.data;
    // console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchItemDetails = async (slug) => {
  try {
    const response = await axios.get(`/shop/items/${slug}/`);
    const arrayData = response.data;
    console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopularGoods = async () => {
  const params = {
    limit: 12,
  };
  // console.log(Object.entries(params).map(([key, value]) => `${key}=${value}`));
  try {
    const response = await axios.get('/shop/items/', {
      params,
      paramsSerializer: function paramsSerializer(params) {
        return Object.entries(Object.assign({}, params))
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
      },
    });

    const arrayData = response.data.results;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllGoods = async (limit) => {
  const params = {
    limit: limit || 100,
  };
  try {
    const response = await axios.get('/shop/items/', { params });
    const arrayData = response.data.results;
    // console.log(response);
    return { count: response.data.count, data: arrayData };
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilteredGoods = async (search) => {
  const params = { limit: 12 };
  try {
    const response = await axios.get(`/shop/items/${search}`, { params });
    // console.log(response);
    const arrayData = response.data.results;
    return { count: response.data.count, data: arrayData };
  } catch (error) {
    console.log(error);
  }
};

// ------  nova poshta -------------

export const fetchNPAreas = async () => {
  try {
    const response = await axios.get('/shop/np/areas/');
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNPSettlements = async (Ref) => {
  const params = { Ref };

  try {
    const response = await axios.get('/shop/np/settlements/', { params });
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNPWarehouses = async (SettlementRef) => {
  const params = { SettlementRef };

  try {
    const response = await axios.get('/shop/np/warehouses/', { params });
    const arrayData = response.data;
    return arrayData.length === 0
      ? 'У вибраному населенному пункті не має відділень'
      : arrayData;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};
