import axios from 'axios';
import store from '@/store/index';

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

function setAxios() {
  axios.interceptors.request.use(
    (config) => {
      if (store.state.token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `${store.state.token}`;
      }
      return config;
    },
  );
}

export default setAxios;
