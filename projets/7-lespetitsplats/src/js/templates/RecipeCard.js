/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Création de la card d'une recette
------------------------------------------------------------------- */

class RecipeCard {
  constructor(data) {
    this._recipe = data

    this.$wrapper = document.createElement('li')
  }

  get recipes() {
    return this._recipe
  }

  createRecipeCard() {
    this.$wrapper.classList.add('recipe')
    const recipeCard = `
        <header class="recipe__header">
            <img
            src="${this._recipe.image}"
            class="recipe__img"
            alt="Image d'une ${this._recipe.name}"
            />
            <span class="recipe__time">${this._recipe.time}min</span>
        </header>
        <article class="recipe__text">
            <h3 class="recipe__title">${this._recipe.name}</h3>

            <section class="recipe__desc">
            <h4 class="recipe__text--title">RECETTE</h4>
            <p class="recipe__text--desc">
                ${this._recipe.desc}
            </p>
            </section>
            <section class="recipe__ingredients">
            <h4 class="recipe__text--title">INGRÉDIENTS</h4>
            <ul class="recipe__list">
            ${this._recipe.ingredients
              .map(
                (element) =>
                  `
                <li class="recipe__text--desc recipe__list--size">
                ${element.ingredient} <br /><span>${element.quantity}</span>
                </li>
                `
              )
              .join('')}
            </ul>
            </section>
        </article>
    `

    this.$wrapper.innerHTML = recipeCard

    return this.$wrapper
  }

  createMsgError() {
    this.$wrapper.classList.add('recipe__msgError')
    const msgError = `Aucune recette contient: <span class="font-strong">"${ListTags.tagArray.join(
      ', '
    )}"</span>, vous pouvez chercher "tartes aux pommes", "poisson", etc.`

    this.$wrapper.innerHTML = msgError

    return this.$wrapper
  }
}
