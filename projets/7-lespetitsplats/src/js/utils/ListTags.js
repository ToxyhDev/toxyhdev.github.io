/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Gestion des tags
------------------------------------------------------------------- */
class ListTags {
  constructor() {
    this.$filterSection = document.querySelector('.section-filterSelected')
  }
  static tagArray = []

  static tagArrayFormatted = []

  // --> J'ajoute mes tags saisi à ma liste(tableau)
  addToListTag(value) {
    ListTags.tagArray.push(value)

    this.createCard(value)
    this.tagFormatted(value)

    // => Envoie des tags pour l'affichage des recettes correspondantes
    this.sendTags()
  }

  // --> Création de la card HTML du Tag
  createCard(value) {
    const createTagLabel = new TagLabel(value)
    this.$filterSection.appendChild(createTagLabel.createTag())

    this.crossToRemoveTag()
  }

  // --> Ajout du listener suppression au tag
  crossToRemoveTag() {
    const $crossTag = document.querySelectorAll('.filterSelected')

    $crossTag.forEach((element, index) => {
      const $crossDelete = element.querySelector('.filterSelected__close')
      // -> Rajoute le listener qu'au dernier élément crée
      if (index === $crossTag.length - 1) {
        $crossDelete.addEventListener('click', () => this.removeTag(index))
      }
    })
  }

  // --> Supprime de la liste le tag et supprime visuel tag HTML
  removeTag(index) {
    ListTags.tagArray.splice(index, 1)
    // console.log(ListTags.tagArray)
    ListTags.tagArrayFormatted.splice(index, 1)
    // console.log(ListTags.tagArrayFormatted)
    this.$filterSection.innerHTML = ''
    this.reCreateTag()
  }

  // --> Recréer l'ensemble des tags
  reCreateTag() {
    ListTags.tagArray.forEach((value) => this.createCard(value))

    // => Envoie des tags pour l'affichage des recettes correspondantes
    this.sendTags()
  }

  tagFormatted(value) {
    const removeStopWord = new RemoveStopWords(value)
    const nameFiltered = removeStopWord.filterStopWord()
    ListTags.tagArrayFormatted.push(nameFiltered)
    // console.log(ListTags.tagArrayFormatted)
  }

  sendTags() {
    new RecipeTagFactory(ListTags.tagArrayFormatted)
  }
}
