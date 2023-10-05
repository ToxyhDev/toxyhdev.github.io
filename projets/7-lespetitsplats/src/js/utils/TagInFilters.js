/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class TagInFilters {
  constructor(recipes) {
    this._recipes = recipes

    this.$filtersTags = document.querySelectorAll('.filterDropdown__list')
  }
  static filtersData = []

  static dataInFilter = []

  initAppliance(ingredients, appliance, ustensils) {
    TagInFilters.filtersData.push(ingredients)
    TagInFilters.filtersData.push(appliance)
    TagInFilters.filtersData.push(ustensils)
  }

  runSortFilter() {
    TagInFilters.filtersData.map((data, index) =>
      this.sortRecipesFilters(data, index)
    )
  }

  sortRecipesFilters(data, index) {
    const sortRecipes = data.filter((recipe) => {
      if (this._recipes.includes(`${recipe.id}`)) {
        return recipe
      }
    })

    this.deleteDouble(sortRecipes, index)
  }

  deleteDouble(data, index) {
    const elementArray = []

    data.forEach((element) => {
      if (element.ingredientsFilter) {
        // console.log(element.ingredientsFilter)
        element.ingredientsFilter.map((ingredient) =>
          elementArray.push(ingredient)
        )
      } else if (element.appliance) {
        // console.log(element.appliance)
        elementArray.push(element.appliance)
      } else if (element.ustensils) {
        // console.log(element.ustensils)
        element.ustensils.map((ustensil) => elementArray.push(ustensil))
      } else {
        throw 'Error'
      }
    })

    const removeDouble = Array.from(new Set(elementArray))
    this.createTagInFilter(removeDouble, index)

    if (TagInFilters.dataInFilter.length >= 3) {
      TagInFilters.dataInFilter = []
    }
    TagInFilters.dataInFilter.push(removeDouble)

    console.log(TagInFilters.dataInFilter)
  }

  createTagInFilter(data, index) {
    this.$filtersTags[index].innerHTML = ''
    data.forEach((tag) => {
      const tagCard = new TagFilterElement(tag, index)
      this.$filtersTags[index].appendChild(tagCard.createTag())

      const labelElement = document.getElementById(
        `filter-${index + tag.replace(/\s/g, '')}`
      )

      labelElement.addEventListener('click', () => {
        new ListTags().addToListTag(tag)
        new FiltersSearch().deleteInput(index)
      })
    })
  }

  sortSearchAdvanced(value, index) {
    const addMatchRecipe = []
    const words = TagInFilters.dataInFilter[index]
    // console.log(words)
    for (const word of words) {
      // console.log(word)
      // -> search mot commencant par lettre saisi
      if (word.toLowerCase().startsWith(value.toLowerCase())) {
        // console.log(word)
        addMatchRecipe.push(word)
      }
    }
    console.log(addMatchRecipe)
    this.createTagInFilter(addMatchRecipe, index)
  }
}
