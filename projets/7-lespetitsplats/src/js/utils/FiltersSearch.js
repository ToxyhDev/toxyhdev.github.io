/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Barre de recherche dans les filtres
------------------------------------------------------------------- */

class FiltersSearch {
  constructor() {
    this.$inputFormFilter = document.getElementsByClassName('filterForm__input')

    this._dataInput = []
  }

  listenerInput() {
    console.log(this.$inputFormFilter)
    Array.from(this.$inputFormFilter).forEach((element, index) => {
      element.addEventListener('input', (event) => {
        new TagInFilters().sortSearchAdvanced(event.target.value, index)
      })
      element.addEventListener('submit', (event) => {
        event.preventDefault()
        event.stopPropagation()
      })
    })
  }

  deleteInput(index) {
    this.$inputFormFilter[index].value = ''
  }
}
