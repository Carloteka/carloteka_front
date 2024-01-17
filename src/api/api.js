import axios from 'axios';

axios.defaults.baseURL = import.meta.env.PROD
  ? 'http://localhost:8000/api'
  : 'http://carloteka.com/api';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/shop/categories/');
    const arrayData = response.data;
    // console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchItemDetails = async (id) => {
  try {
    const response = await axios.get(`/shop/items/${id}/`);
    // console.log(response);
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopularGoods = async () => {
  const params = {
    'page-size': 12,
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
    'page-size': limit || 100,
  };
  try {
    const response = await axios.get('/shop/items/', { params });
    const arrayData = response.data.results;
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilteredGoods = async (search) => {
  const params = { 'page-size': 12 };
  try {
    const response = await axios.get(`/shop/items/${search}`, { params });
    const arrayData = response.data.results;
    // console.log(arrayData);
    return { count: response.data.count, data: arrayData };
  } catch (error) {
    console.log(error);
  }
};
