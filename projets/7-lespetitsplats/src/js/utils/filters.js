/* ----------------------------------------------------------------
    Gère l'ouverture et fermeture des filtres
------------------------------------------------------------------- */
class Filters {
  constructor() {
    this.$btnFilter = document.querySelectorAll('.filter')
  }

  listenerBtnFilter() {
    this.$btnFilter.forEach((element, index) => {
      const $btn = element.querySelector('.filter__button')
      $btn.addEventListener('click', () => {
        element.classList.toggle('active')

        const $dropdown = document.getElementById(`filter-dropdown${index}`)
        const expanded = $dropdown.getAttribute('aria-expanded') === 'true'
        $dropdown.setAttribute('aria-expanded', !expanded)
      })
    })
  }
}

const filters = new Filters()
filters.listenerBtnFilter()
