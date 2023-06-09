import axios from '../requester'

// Api resources here
export default {
  // Async await
  async demoGetV2 () {
    return (await axios.get('http://example.com/')).data
  },
  demoPostV2 () {
    return axios.post('https://sit.weihong777.cn/api/v01/storeapp/account/loginByLoginName', { logonName: '13201100001', password: 'abc123456', mac: '' }).then(response => response.data)
  }
}
