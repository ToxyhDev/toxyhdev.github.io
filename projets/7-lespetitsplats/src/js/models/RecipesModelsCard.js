/* eslint-disable no-unused-vars */
// --> Contructor Patterns
/* ----------------------------------------------------------------
    Class(modèle) d'une recette avec les données à exploiter
------------------------------------------------------------------- */

class RecipesModelsCard {
  constructor(data) {
    // console.log(data)

    this._id = data.id
    this._name = data.name
    this._image = data.image
    this._desc = data.description
    this._ingredients = data.ingredients
    this._time = data.time
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get image() {
    return `src/assets/recettes/${this._image}`
  }

  get desc() {
    return this._desc
  }

  get ingredients() {
    const formatIngredients = []
    this._ingredients.map((element) => {
      const newFormat = {
        ingredient: element.ingredient,
        quantity: `${element.quantity ? element.quantity : ''} ${
          element.unit ? element.unit : ''
        }`,
      }
      formatIngredients.push(newFormat)
    })
    return formatIngredients
  }

  get time() {
    return this._time
  }
}
