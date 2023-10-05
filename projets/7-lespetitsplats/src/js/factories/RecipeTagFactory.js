/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* ----------------------------------------------------------------
    Factory permettant de créer les recettes
------------------------------------------------------------------- */
class RecipeTagFactory {
  constructor(tags) {
    const creatingRecipes = new CreateRecipeCard()

    if (tags.length === 0) {
      // console.log('Il ny a pas de tag')
      creatingRecipes.filterRecipes(true)
    } else if (tags.length >= 1) {
      // console.log('Il y a des tag')
      creatingRecipes.filterRecipes(false, tags)
    } else {
      throw 'Data Error'
    }
  }
}
