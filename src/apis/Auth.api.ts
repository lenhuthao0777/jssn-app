import apiService from '@src/services/AxiosClient'
import CommonApi from '.'

class Auth extends CommonApi {
  static baseUrl = 'auth'

  static login(body?: any): Promise<any> {
    return apiService
      .post(`${this.baseUrl}/login`, body)
      .then((res) => res.data)
  }
}

export default Auth
