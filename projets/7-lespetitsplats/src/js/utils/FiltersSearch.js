/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Barre de recherche dans les filtres
------------------------------------------------------------------- */

class FiltersSearch {
  constructor() {
    this.$inputFormFilter = document.getElementsByClassName('filterForm__input')

    this.$inputRemove = document.querySelectorAll('.filterForm__remove')

    this._dataInput = []
  }

  listenerInput() {
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

  listenerInputRemove() {
    this.$inputRemove.forEach((element, index) => {
      element.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        this.deleteInput(index)
        new TagInFilters().sortSearchAdvanced(event.target.value, index)
      })
    })
  }

  deleteInput(index) {
    this.$inputFormFilter[index].value = ''
  }
}
