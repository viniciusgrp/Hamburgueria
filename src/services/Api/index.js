import axios from "axios";

const Api = axios.create({
    baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com/',
    timeout: 5000,
  });

  export default Api