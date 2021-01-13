import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

function setAxios() {
  console.log('设置axios');
}
export default setAxios;
