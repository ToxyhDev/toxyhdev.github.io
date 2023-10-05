/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Création des tags
------------------------------------------------------------------- */
class TagFilterElement {
  constructor(data, index) {
    this._tag = data
    this._index = index

    this.$wrapper = document.createElement('li')
    this.$wrapper.setAttribute('role', 'option')
  }

  get tag() {
    return this._tag
  }

  createTag() {
    const tagLabel = `
      <input
        type="radio"
        id="filter-${this._index + this._tag.replace(/\s/g, '')}"
        name="chooce-filter"
      />
      <label
        for="filter-${this._index + this._tag.replace(/\s/g, '')}"
        class="filterDropdown__option"
        tabindex="0"
        
      >${this.tag.charAt(0).toUpperCase() + this._tag.slice(1)}</label>
      `

    this.$wrapper.innerHTML = tagLabel

    return this.$wrapper
  }
}
