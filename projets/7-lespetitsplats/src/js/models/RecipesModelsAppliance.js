/* eslint-disable no-unused-vars */
// --> Contructor Patterns
/* ----------------------------------------------------------------
    Class(modèle) des ingrédients à trier
------------------------------------------------------------------- */

class RecipesModelsAppliance {
  constructor(data) {
    this._id = data.id
    this._appliance = data.appliance
  }

  get id() {
    return this._id
  }

  get appliance() {
    return this._appliance
  }
}
