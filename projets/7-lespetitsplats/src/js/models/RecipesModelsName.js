/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// --> Contructor Patterns
/* ----------------------------------------------------------------
    Class(modèle) des nom à trier
------------------------------------------------------------------- */

class RecipesModelsName {
  constructor(data) {
    this._id = data.id
    this._name = data.name
  }

  get id() {
    return this._id
  }

  get name() {
    const removeStopWord = new RemoveStopWords(this._name)
    const nameFiltered = removeStopWord.filterStopWord()
    return nameFiltered
  }
}
