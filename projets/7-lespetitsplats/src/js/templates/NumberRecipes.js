/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Création de l'affichage du nombre de recette
------------------------------------------------------------------- */

class NumberRecipes {
  constructor() {
    this.$filterResult = document.querySelector('.filter-result')
  }

  createResult(number) {
    this.$filterResult.textContent = `${number} recettes`
  }
}
