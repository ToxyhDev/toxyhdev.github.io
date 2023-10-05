/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Création de l'affichage du nombre de recette
------------------------------------------------------------------- */

class NumberRecipes {
  constructor() {
    // this._number = number

    this.$filterResult = document.querySelector('.filter-result')
  }

  //   get number() {
  //     return this._number
  //   }

  createResult(number) {
    this.$filterResult.textContent = `${number} recettes`
  }
}
