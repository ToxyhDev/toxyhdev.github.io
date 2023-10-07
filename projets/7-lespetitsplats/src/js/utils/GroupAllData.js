/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------
    Regroupe toute les données sous le même ID
------------------------------------------------------------------- */
class GroupAllData {
  constructor(data) {
    this._data = data

    this._newData = []

    this._invertedIndex = {} // Index inversé
  }

  groupDatas() {
    this._data.map((element) => {
      const id = element.id

      const name = element.name || ''
      const desc = element.desc || ''
      const ingredients = Array.isArray(element.ingredients)
        ? element.ingredients.join(' ')
        : ''
      const appliance = element.appliance || ''
      const ustensils = Array.isArray(element.ustensils)
        ? element.ustensils.join(' ')
        : ''

      const words = [name, desc, ingredients, appliance, ustensils]
        .filter(Boolean) //Supprime élément vide du tableau ('')
        .join(' ')
        .toLowerCase()

      // En utilisant Object.hasOwnProperty.call, j'évite tout conflit
      // potentiel avec d'autres implémentations de hasOwnProperty

      // ==> Je rassemble tout les mots sous le même id
      if (Object.hasOwnProperty.call(this._newData, id)) {
        // Si ID existe déjà, ajoutez les mots à la liste existante.
        this._newData[id].push(words)
      } else {
        // Si ID n'existe pas je rajoute les 1er mots
        this._newData[id] = [words]
      }
    })

    for (const id in this._newData) {
      if (Object.hasOwnProperty.call(this._newData, id)) {
        // --> Je crée une grande chaîne de caractère pour chaque ID
        this._newData[id] = this._newData[id].join(' ')
        //  --> Je sépare tout les mots dans un tableau
        this._newData[id] = this._newData[id].split(' ')
        //  --> J'enlève les mots doublons
        this._newData[id] = [...new Set(this._newData[id])]

        // ==> Création index inversé
        this._newData[id].forEach((word) => {
          //  --> Pour chaque mot je rajoute sa recette
          if (!Object.hasOwnProperty.call(this._invertedIndex, word)) {
            // --> Si index mot n'existe pas
            this._invertedIndex[word] = [id]
          } else {
            // --> Si existe déja je rajoute juste id
            this._invertedIndex[word].push(id)
          }
        })
      }
    }

    return this._invertedIndex
  }
}
