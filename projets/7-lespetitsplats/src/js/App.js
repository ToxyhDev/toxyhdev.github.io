/* eslint-disable no-undef */
/* ----------------------------------------------------------------
    Gestion de l'app
------------------------------------------------------------------- */
class App {
  constructor() {
    //  --> Envoie de l'URL avec nouvelle instance
    this.recipesApi = new RecipesApi('./src/js/data/recipes.json')

    this.$recipesContainer = document.querySelector('.section-recipes')

    this._initDataRecipes = new CreateRecipeCard()

    this._initDataFilters = new TagInFilters()
  }

  async main() {
    //  --> Récupération des datas
    const recipesData = await this.recipesApi.get()
    console.log(recipesData)

    //  --> Trie des données des Recipes Cards
    const recipes = new RecipesFactory(recipesData, 'recipes')
    // console.log(recipes)

    // const initDataRecipes = new CreateRecipeCard()
    this._initDataRecipes.initRecipesArray(recipes)

    //  --> Trie des données des Nom de recettes (stop word + minuscule)
    const recipesNames = new RecipesFactory(recipesData, 'name')
    // console.log(recipesNames)

    //  --> Trie des données des Descriptions de recettes (stop word + minuscule)
    const recipesDesc = new RecipesFactory(recipesData, 'desc')
    // console.log(recipesDesc)

    //  --> Trie des données des Ingrédients de recettes (stop word + minuscule)
    const recipesIngredients = new RecipesFactory(recipesData, 'ingredients')
    // console.log(recipesIngredients)

    const recipesAppliance = new RecipesFactory(recipesData, 'appareils')

    const recipesUstensils = new RecipesFactory(recipesData, 'ustensiles')

    const allSortData = [
      ...recipesNames,
      ...recipesDesc,
      ...recipesIngredients,
      ...recipesAppliance,
      ...recipesUstensils,
    ]
    // console.log(allSortData)

    this._initDataFilters.initAppliance(
      recipesIngredients,
      recipesAppliance,
      recipesUstensils
    )

    //  --> Création du tableau de recherche
    const groupAllData = new GroupAllData(allSortData).groupDatas()
    // console.log(groupAllData)
    this._initDataRecipes.initInvertedIndex(groupAllData)

    // --> Création du formulaire de recherche
    const mainSearch = new MainSearch()
    mainSearch.listenerValidate()

    //  --> Création des card recipe et ajout au DOM
    new RecipeTagFactory([])
    // recipes.forEach((recipe) => {
    //   const templateCard = new RecipeCard(recipe)
    //   this.$recipesContainer.appendChild(templateCard.createRecipeCard())
    // })

    new FiltersSearch().listenerInput()
  }
}

/* ----------------------------------------------------------------
    Lance l'execution de l'app avec la méthode main()
------------------------------------------------------------------- */
const app = new App()
app.main()
