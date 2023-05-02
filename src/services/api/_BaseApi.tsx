import properties from "../../properties";
import { Axios } from "../Axios";

export default class BaseApi {
  axios: Axios;
  base: string;

  constructor() {
    this.axios = new Axios();
    this.base = properties.BASE_URL;
  }
}
