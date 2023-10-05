/* eslint-disable no-unused-vars */
// --> Contructor Patterns
/* ----------------------------------------------------------------
    Class(modèle) des ingrédients à trier
------------------------------------------------------------------- */

class RecipesModelsUstensils {
  constructor(data) {
    this._id = data.id
    this._ustensils = data.ustensils
  }

  get id() {
    return this._id
  }

  get ustensils() {
    const listUstensils = this._ustensils.map((element) => {
      return element
    })
    return listUstensils
  }
}
