/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Factory permettant de créer la datas à utiliser
------------------------------------------------------------------- */

class RecipesFactory {
  constructor(data, type) {
    // --> Création card recettes
    if (type === 'recipes') {
      const recipesCardData = data.recipes.map((data) => {
        return new RecipesModelsCard(data)
      })
      return recipesCardData

      // --> Création des datas name
    } else if (type === 'name') {
      const recipesNameData = data.recipes.map((data) => {
        return new RecipesModelsName(data)
      })
      return recipesNameData

      // --> Création des datas decription
    } else if (type === 'desc') {
      const recipesDescData = data.recipes.map((data) => {
        return new RecipesModelsDesc(data)
      })
      return recipesDescData

      // --> Création des datas ingrédients
    } else if (type === 'ingredients') {
      const recipesIngredientsData = data.recipes.map((data) => {
        return new RecipesModelsIngredients(data)
      })
      return recipesIngredientsData

      // --> Création des datas appareils
    } else if (type === 'appareils') {
      const recipesAppliancesData = data.recipes.map((data) => {
        return new RecipesModelsAppliance(data)
      })
      return recipesAppliancesData

      // --> Création des datas ustensiles
    } else if (type === 'ustensiles') {
      const recipesUstensilsData = data.recipes.map((data) => {
        return new RecipesModelsUstensils(data)
      })
      return recipesUstensilsData

      // --> Erreur
    } else {
      throw 'Unknown type format'
    }
  }
}
