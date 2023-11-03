export const css = {
    /** Couleur de fond primaire. Utiliser pour les sections importantes telles que la section d'acceuil ou les introduction aux chapitres.*/
    primaryBackground : "linear-gradient(100.88deg, #0078F8 3.69%, #63A7F0 33.27%, #0078F8 98.35%)",
    /** Couleur de fond primaire non dégradé */
    primaryBackgroundNolinear : "#0078F8",
    /** Couleur de fond de séparation entre les différentes sous-section d'un chapitre. Permet de séparer les idées que l'on présente. Alternera entre cette couleur et le blanc sur le portail.*/
    secondaryBackground : "#e7e7e7",
    /** Couleur du texte */
    text : "#000",
    /** Couleur du texte pour une alerte de type succès. [Il n'y a pas d'alerte d'autre type, c'est pour cette raison qu'aucune autre couleur n'est définie] */
    success : "#52c41a",
    /** Couleur de fond pour une alerte de type succès. [Il n'y a pas d'alerte d'autre type, c'est pour cette raison qu'aucune autre couleur n'est définie] */
    successBackground : "#f6ffed",
    /** Une couleur rougeâtre seulement utilisé lors de la sélection d'une commune comme couleur de fond pour un div survolé lorsque l'on souhaite déseclectionner une commune.*/
    delete : "#ff4d4f",
    /** Couleur de fond des cartes. */
    card: "#fefefe"
}

export const graph = {
    /** Couleur principale pour représenter le secteur résidentiel. */
    residential: "#FF0000",
    /** Couleur principale pour représenter le secteur commercial. */
    retail: "#0078F8",
    /** Couleur principale pour représenter le secteur industriel. */
    industry: "#FFBF01",
    /** Couleur utilisé lors du survol d'une commune sur la carte de sélection d'une communes. */
    mapHover: "#0078F8",
    /** Couleur principale pour représenter l'artificialisation. */
    artificialisation: "#6E6E6E",
    /** Pour le graphique montrant l'évolution de l'artificialisation par communes; Couleur de la commune la plus à gauche.*/
    compareBegin: "#60c96e",
    /** Pour le graphique montrant l'évolution de l'artificialisation par communes; Couleur de la commune la plus à droite.*/
    compareEnd: "#2A4858",
    /** Couleur des lignes pour les graphiques concernant la population. */
    population: "#FF0000",
    /** Couleur utiliser pour représenter les inondations. */
    flood: "#007577",
    /** Couleur utiliser pour représenter les vagues de chaleur. */
    heat: "#b01111"
}