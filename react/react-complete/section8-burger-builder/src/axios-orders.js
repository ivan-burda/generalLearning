import axios from 'axios';

const instance = axios.create({
  baseURL:'https://burgerbuilder-e65af-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance;