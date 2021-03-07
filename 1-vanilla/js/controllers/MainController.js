import FormView from '../views/FormView.js';
import ResultView from '../views/ResultView.js';
import SearchModel from '../models/SearchModel.js'
const tag = '[MainController]'

export default {
  init() {
    // TODO: browser 기본 발생 이벤트는 뭐가 있는
    FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.onResetForm())
    ResultView.setup(document.querySelector('#search-result'))

  },

  search(query) {
    console.log(tag, 'search()', query)
    // search api
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
    this.onSearchResult([])
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
  },

  onSearchResult(data) {
    ResultView.render(data)
  }
}
