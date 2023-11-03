export const content: { [key: string]: string[] | {intro: string, menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>L'artificialisation du territoire est un processus par lequel les activités humaines entraînent une perte de qualité du territoire modifié. Il s'agit le plus souvent de nouvelles constructions résidentielles, et ceci en majorité sur des terres cultivées.</p>
            <p>Cette artificialisation entraîne des problèmes dans plusieurs secteurs. L’artificialisation d’un sol diminue sa perméabilité. ce qui encouragera l’eau à ruisseler à sa surface plutôt qu’à s’y infiltrer</span>, cela limitera par la même occasion la régulation des <span class='emphase'>nappes phréatiques</span>. La perte des espaces verts au profit de nouvelles constructions, ne permet pas la bonne circulation de l’air et la dispersion de la chaleur. De plus elle limite le rafraichissement apporté par l’évaporation des végétaux. Cela favorise le <span class="emphase">phénomène d’îlot de chaleur</span>. L’installation de complexes résidentiels sur des terres cultivées va également impacter défavorablement la biodiversité et réduire la <span class="emphase">fertilité des sols.</span></p>
            <p>Ce phénomène d’artificialisation des sols continue d’augmenter au fil des ans.</p>   
        `
    ],
    artificialisation: [
        `
            <p>Entre 2002 et 2020 les superficies artificalisées du territoir de <span class='emphase municipality-name'></span> sont ainsi passées de <span class='emphase displayedTerritory2002'></span> à <span class='emphase displayedTerritory2020'></span> hectares, soit une augmentation de près de <span class='emphase pctArtificialisationIncrease'></span>%
        `,
        `
            <p>Cette artificailsiation est due à <span class='emphase pctResidentialShareInArtificialisation'></span>% par des nouvelles constructions résidentiels et en grande majorité sur des terres cultivées.</p>
        `
    ],
    comparison: [
        `
            <p>Il est possible de placer l'ensemble des communes wallonnes sur un même graphique afin de les comparer entre elles.</p>
            <p>Sur ce graphique, plus une commune se situe sur la droite, plus on territoire est artificialisé. Plus le cercle correspondant à la commune est gros, plus l'impact du résidentiels sur cette artificialisation est élevé.</p>
        `,
        `
            <p><span class='emphase'>Thimister-Clermont</span> est la commune dont l’évolution de l’artificialisation à le plus évolué depuis 2002, avec une augmentation de <span class='emphase'>37.41</span>% dont <span class='emphase'>36.54</span>% peuvent être attribués au résidentiel.</p>
            <p>De l’autre côté, <span class='emphase'>Mons</span> est la commune qui a connu la plus petite évolution de l’artificialisation de son territoire avec <span class='emphase'>1.98</span>%. Cette évolution n’est dû qu’au résidentiel.</p>
        `,
        `
            <p>Mons n’est pas la seule commune à voir l’évolution de son artificialisation entièrement due à la construction de nouvelles zones résidentielles. C’est le cas de plusieurs autres communes.</p>
            <p>De manière générale, on observe que, dans la plupart des communes, la construction de nouveaux bâtiments résidentiels prend une part importante dans l’artificialisation globale du territoire.</p>
        `
    ],
    population: [
        `
            <p>L’évolution de la population pourrait expliquer le besoin grandissant de nouveaux bâtiments résidentiels.</p>
            <p>Pour la commune de <span class='municipality-name emphase'></span>, sur la même période 2002-2020, on constate que la population a augmenté de <span class='populationIncrease emphase'></span>%.</p>
        `,
        `
            <p>De plus, toujours durant la même période, la taille de ménage a tendance à diminuer, passant pour <span class='municipality-name emphase'></span> de <span class='population2002 emphase'></span> à <span class='population2020 emphase'></span>.</p>
        `,
        `
            <p>Ceux deux informations peuvent expliquer le besoin grandissant de zones résidentielles. Cependant, bien que des habitations supplémentaires soient nécessaires le taux auquel elles sont construites n’est quant à lui pas si justifier.</p>
            <p>En effet, on continue de construire plus d’habitations que nécessaire, augmentant ainsi l’artificialisation du territoire de manière encore plus prononcé.</p>
        `
    ],
}