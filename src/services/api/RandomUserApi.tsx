import BaseApi from "./_BaseApi";

export default class RandomUserApi {
  baseApi() {
    return new BaseApi();
  }

  async getRandomUser(): Promise<any> {
    let response = await this.baseApi().axios.get(this.baseApi().base, {});
    return response.data;
  }
}
