/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Création des tags
------------------------------------------------------------------- */
class TagLabel {
  constructor(data) {
    this._tag = data

    this.$wrapper = document.createElement('li')
    this.$wrapper.classList.add('filterSelected')
  }

  get tag() {
    return this._tag
  }

  createTag() {
    const tagLabel = `
      <p class="filterSelected__name">${this._tag}</p>
      <span class="filterSelected__close"></span>
    `

    this.$wrapper.innerHTML = tagLabel

    return this.$wrapper
  }
}
