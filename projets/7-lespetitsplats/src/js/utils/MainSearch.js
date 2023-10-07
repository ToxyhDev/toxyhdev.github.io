/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Barre de recherche principale
------------------------------------------------------------------- */
class MainSearch {
  constructor() {
    this.$formMainSearch = document.querySelector('.searchBar__form')

    this.$inputForm = document.querySelector('.searchBar__input')

    this._ListTags = new ListTags()
  }

  listenerValidate() {
    this.$formMainSearch.addEventListener('submit', (event) => {
      this.validate(event)
    })
  }

  validate(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.$inputForm.value.length >= 3) {
      this.addTag(this.$inputForm.value)
      this.$inputForm.value = ''
    } else {
      console.error('Saisir minimum 3 caractères')
    }
  }

  addTag(value) {
    this._ListTags.addToListTag(value)
  }
}
