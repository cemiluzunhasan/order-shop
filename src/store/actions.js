import axios from 'axios';
import types from './action-types';

const actions = {
  getData: ({ url, key, params }) => {
    return async dispatch => {
      key && dispatch({ type: types.GLOBAL_REQUEST, key });
      try {
        const { data } = await axios.get(url, { params });
        key && dispatch({ type: types.GLOBAL_SUCCESS, key, data });
        return data;
      } catch (error) {
        key && dispatch({ type: types.GLOBAL_ERROR, key, error });
        throw error;
      }
    }
  },
  postData: ({ url, model, params }) => {
    return async dispatch => {
      try {
        const { data } = await axios.post(`${url}`, model, { params });
        dispatch({ type: types.ADD_DATA, model, data });
        return data;
      } catch (error) {
        throw error;
      }
    }
  },
  putData: ({ url, model, params }) => {
    return async dispatch => {
      try {
        const { data } = await axios.put(`${url}`, model, { params });
        dispatch({ type: types.UPDATE_DATA, model, data });
        return data;
      } catch (error) {
        throw error;
      }
    }
  },
  deleteData: ({ url, key, id, params }) => {
    return async dispatch => {
      try {
        const { data } = await axios.delete(`${url}/${id}`, { params });
        dispatch({ type: types.DELETE_DATA, key, id, data });
        return data;
      } catch (error) {
        throw error;
      }
    }
  }
}

export default actions;