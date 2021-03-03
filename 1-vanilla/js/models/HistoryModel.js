export default {
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  list() {
    /*
    * return this.data로 하지 않은 이유
    * 서버에서 비동기로 데이터를 가지고 오는 경우와 쿠키로 데이터를 얻는 경우가 있기때문에
    * 공통으로 사용하기 위해 비동기로 처리
    * */
    return Promise.resolve(this.data)
  },

  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },

  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}
