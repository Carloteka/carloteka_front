import axios from 'axios';

axios.defaults.baseURL = import.meta.env.PROD
  ? 'http://localhost:8000/api'
  : 'http://carloteka.com/api';

export const fetchContacts = async () => {
  try {
    const response = await axios.get('/shop/contacts/');
    const arrayData = response.data;
    // console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/shop/categories/');
    const arrayData = response.data;
    // console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchItemDetails = async (slug) => {
  try {
    const response = await axios.get(`/shop/items/${slug}/`);
    const arrayData = response.data;
    console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error.response);
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
    console.log(error.response);
  }
};

export const fetchAllGoods = async (limit) => {
  const params = {
    limit: limit || 100,
  };
  try {
    const response = await axios.get('/shop/items/', { params });
    const arrayData = response.data.results;
    // console.log(arrayData);
    return {
      in_stock_count: response.data.in_stock_count,
      specific_order_count: response.data.specific_order_count,
      count: response.data.count,
      data: arrayData,
    };
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchFilteredGoods = async (search) => {
  const params = { limit: 12 };
  try {
    const response = await axios.get(`/shop/items/${search}`, { params });
    // console.log(response.data);
    const arrayData = response.data.results;
    return {
      in_stock_count: response.data.in_stock_count,
      specific_order_count: response.data.specific_order_count,
      count: response.data.count,
      data: arrayData,
    };
  } catch (error) {
    console.log(error.response);
  }
};

// ------- review -----------------

export const postReview = async (id, body) => {
  try {
    const response = await axios.post(
      `/shop/items/${id}/reviews/create/`,
      body,
    );
    console.log(response);
    return response.status === 201 ? 201 : undefined;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchReview = async (id, offset) => {
  const params = {
    offset,
  };
  try {
    const response = await axios.get(`/shop/items/${id}/reviews/`, { params });
    console.log(response.data);
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};
// ------  nova poshta -------------

export const fetchNPAreas = async () => {
  try {
    const response = await axios.get('/np/areas/');
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchNPSettlements = async (Ref) => {
  const params = { Ref };

  try {
    const response = await axios.get('/np/settlements/', { params });
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchNPWarehouses = async (SettlementRef) => {
  const params = { SettlementRef };

  try {
    const response = await axios.get('/np/warehouses/', { params });
    const arrayData = response.data;
    // console.log(response.data);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    if (error.response?.data?.detail?.detail[0] === 'To many requests') {
      return 500;
    }
    return error.response.status;
  }
};

export const createContact = async (body) => {
  try {
    const response = await axios.post('/np/contact/create/', body);
    const arrayData = response.data;
    // console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};

export const createWaybill = async (body) => {
  try {
    const response = await axios.post('/np/waybill/create/', body);
    const arrayData = response.data;
    return arrayData;
  } catch (error) {
    console.log(error.response);
    if (
      error.response?.data?.detail?.detail[0] ===
      'Recipient Warehouse max allowed volumeweight: 30'
    ) {
      return 'weightError';
    }
    return error.response.status;
  }
};

export const createOrder = async (body) => {
  try {
    const response = await axios.post('/shop/orders/create/', body);
    const arrayData = response.data;
    // console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};

//  ----------- liqpay --------------

export const getLiqpayBtn = async (id) => {
  const params = { order_id: id };
  try {
    const response = await axios.get('/liqpay/create-liqpay-button/', {
      params,
    });
    const arrayData = response.data;
    // console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};

export const getLiqpayStatus = async (id) => {
  const params = { order_id: id };
  try {
    const response = await axios.get('/liqpay/get-status/', {
      params,
    });
    // console.log(response);
    return response?.status;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};

export const createLiqpayCallback = async () => {
  try {
    const response = await axios.post('/liqpay/pay-callback/');
    const arrayData = response.data;
    console.log(response);
    return arrayData;
  } catch (error) {
    console.log(error.response);
    return error.response.status;
  }
};
