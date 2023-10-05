/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// --> Contructor Patterns
/* ----------------------------------------------------------------
    Class(modèle) des description à trier
------------------------------------------------------------------- */
class RecipesModelsDesc {
  constructor(data) {
    this._id = data.id
    this._desc = data.description
  }

  get id() {
    return this._id
  }

  get desc() {
    const removeStopWord = new RemoveStopWords(this._desc)
    const nameFiltered = removeStopWord.filterStopWord()
    return nameFiltered
  }
}
