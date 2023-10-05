/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Créer les recettes en fonction de la liste fourni
------------------------------------------------------------------- */

class CreateRecipeCard {
  constructor() {
    this.$recipesContainer = document.querySelector('.section-recipes')
  }

  static recipes = []

  static invertedIndex = {}

  initRecipesArray(data) {
    CreateRecipeCard.recipes = data
  }

  initInvertedIndex(words) {
    CreateRecipeCard.invertedIndex = words
  }

  filterRecipes(boolean, tags) {
    this.$recipesContainer.innerHTML = ''
    const recipesArray = CreateRecipeCard.recipes

    const wordsArray = CreateRecipeCard.invertedIndex
    // --> Vrai affiche toute les recette
    if (boolean) {
      this.createRecipe(recipesArray)

      const idArray = recipesArray.map((recipe) => recipe.id.toString())
      new TagInFilters(idArray).runSortFilter()
    } else {
      this.searchWordIndex(wordsArray, tags)
    }
  }

  createRecipe(recipes) {
    new NumberRecipes().createResult(recipes.length)
    //  --> Création des card recipe et ajout au DOM
    recipes.forEach((recipe) => {
      const templateCard = new RecipeCard(recipe)
      this.$recipesContainer.appendChild(templateCard.createRecipeCard())
    })
  }

  createMsgNotFound() {
    const templateCard = new RecipeCard()
    this.$recipesContainer.appendChild(templateCard.createMsgError())
  }

  searchWordIndex(words, tags) {
    // --> Sépare les tags avec + de 2 mots (ex 'tarte thon' -> 'tarte' 'thon')
    tags = tags.join(' ').split(' ')

    // --> Initialise tableau pour rajouter id recette
    let addMatchRecipes = []

    tags.filter((tag) => {
      const addMatchRecipe = []

      for (const word in words) {
        // -> search mot commencant par tag et ajoute
        if (word.startsWith(tag)) {
          addMatchRecipe.push(words[word].join(' '))
        }
      }

      // --> Enlève les id double sur les correspondances du tag
      addMatchRecipes.push(
        Array.from(new Set(addMatchRecipe.join(' ').split(' '))).join(' ')
      )
    })

    // --> Formate le tableau pour l'utiliser
    let resultMatchRecipes = addMatchRecipes.join(' ').split(' ')

    // => Si + de 2 tags supprimer non doublon
    if (tags.length >= 2) {
      // -> Le tableau tourne autant de fois qu'il y a de tags
      for (let i = 1; i < tags.length; i++) {
        resultMatchRecipes = resultMatchRecipes.filter(
          (value, index, array) => {
            return array.indexOf(value) !== index
          }
        )
      }
    }

    if (resultMatchRecipes.join().length > 0) {
      this.searchRecipes(resultMatchRecipes)
      new TagInFilters(resultMatchRecipes).runSortFilter()
    } else {
      this.createMsgNotFound()
      new NumberRecipes().createResult(0)
      new TagInFilters([]).runSortFilter()
    }

    // console.log(resultMatchRecipes.join().length)
    // this.searchRecipes(resultMatchRecipes)
  }

  searchRecipes(resultMatchRecipes) {
    // ==> Création du tableau des recettes en HTML
    const displayRecipe = CreateRecipeCard.recipes.filter((recipe) => {
      if (resultMatchRecipes.includes(`${recipe.id}`)) {
        return recipe
      }
    })

    this.createRecipe(displayRecipe)
    // console.log(displayRecipe)
  }
}
