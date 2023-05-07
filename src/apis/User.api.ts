import apiService from '@src/services/AxiosClient'
import CommonApi from '.'

class User extends CommonApi {
  static baseUrl = 'user'
}

export default User
