export const content: { [key: string]: string[] | {intro: string, menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>Une vagues de chaleur est une période de 5 jours consécutifs où la température maximum du jour est au-dessus de 25°C et où elle dépasse 30°C à trois reprise sur cette même période.</p>
            <p>Les vagues de chaleur concernent toute la Wallonie, mais dans les zones urbaines s’ajoute en plus un phénomène « d’ilot de chaleur urbain » qui implique que dans une ville il fait parfois 3 à 4°C de plus que dans la périphérie rurale. Ce phénomène est dû à une combinaison de facteurs dans les zones fortement urbanisées :</p>
            <ul>
                <li>Les matériaux imperméabilisant, sombre (comme le bitume), emmagasine le rayonnement solaire et le restitue sous forme de chaleur, notamment la nuit.</li>
                <li>L’absence de végétation limite l’effet de fraicheur lié à l’ombre, mais également à l’évapotranspiration des végétaux.</li>
                <li>Les activités humaines utilisant de l’énergie dégagent toujours un peu de chaleur (moteurs, ordinateurs, climatisations, …), qui réchauffe l’air environnant.</li>    
            </ul>
            <div class="image-wrapper">
                <img src="images/ilot-chaleur.jpg" alt="Phénomème d'îlot de chaleur"/>
                <p class="source">Source: <a href="https://bybeton.fr/grand_format/maitrise-ilots-de-chaleur-urbains-solutions-beton">https://bybeton.fr/grand_format/maitrise-ilots-de-chaleur-urbains-solutions-beton</a></p>    
            </div>    
        `
    ],
    exposition: [
        `
            <h2>Retour sur le passé !</h2>
            <p>Sur les 20 années les plus chaudes enregistrées depuis 1900, 19 se sont produites entre 2000 et 2022. Entre 1900 et 1990 la belgique subissait en moyenne une vague de chaleur tous les 4 ans. Depuis 1990 la moyenne est à une vague de chaleur une année sur deux.</p>
            <p class="source">Source: <a href="https://www.meteobelgique.be/article/articles-et-dossier/le-climat/2084-les-vagues-de-chaleur-en-belgique-depuis-1901">meteobelgique.be</a></p>       
        `,
        `
            <h2>De plus en plus fréquente !</h2>
            <p>Les vagues de chaleurs ont toujours existés en Belgique. Cependant, elles sont de plus en plus fréquentes au fils des années. On remarque également une augmentation de la durée de ces vagues de chaleurs. En effet, en plus d'être plus fréquentes, elles sont généralement plus longues.</p>
        `,
        `
            <h2>De plus en plus intenses !</h2>
            <p><a href='https://www.meteobelgique.be/article/articles-et-dossier/le-climat/2084-les-vagues-de-chaleur-en-belgique-depuis-1901'><span class='emphase'>Météo Belgique</span></a> définit 2 notions importantes pour comprendre ce graphique. Les poids, en degrés jours avec 20°c de température moyenne comme référence : une température moyenne de 22.3°C aura un poids de 2.3, une de 19.5°C un poids de -0.5. Et l'intensité, ou le poids par rapport à durée.</p>
            <p>Sur le graphique ci-contre, la taille des bulles correspond à l'intensité des vagues de chaleur. Depuis 1990, on remarque que les vagues de chaleurs sont plus intenses. En plus d'être de plus en plus fréquentes, elle sont donc également de plus en plus intenses !</p>
        `
    ],
    perspective : [
        `
            <h2>Perspectives et facteurs aggravants</h2>
            <p><span class='emphase'>Les changements climatiques</span> entraînent en Belgique une hausse des vagues de chaleur qui seront plus fréquentes, plus longues et plus intenses. Le nombre moyen de jours de vague de chaleur par an (actuellement d’environ 7 jours/an) devrait en effet augmenter d’un facteur de 4 à 8 selon le projet <a href='https://www.sciencedirect.com/science/article/pii/S2405880717300195?via%3Dihub'><span class='emphase'>CORDEX</span></a></p>
            <p><a href="#artificialisation"><span class='emphase'>L’artificialisation des terres</span></a> renforce le phénomène d’îlot de chaleur en milieu urbain.</p>
            <p><a href="#health"><span class='emphase'>La pollution de l’air</span></a> se combine avec le phénomène de vague de chaleur et d’ilot de chaleur urbain, avec un risque accru de pic d’ozone néfaste pour la santé.</p>
        `,
    ],
    impact : [
        `
            <h2>Impact socio-économique</h2>
            <p>S’il peut y avoir une certaine fatigue des infrastructures et bâtiments, les dégâts dans ce domaine dû aux vagues de chaleur seront relativement limités.</p>
            <p>L’impact principale se situe au niveau de la santé des citoyens, plus particulièrement des personnes vulnérables (personnes âgées et enfants en bas âge) avec une augmentation des soins de santé et un risque de mortalité accru.</p>
            <p>Selon les estimations de l’étude d’impact socio-économique à l’échelle de la Belgique ramenées à <span class='emphase municipality-name'></span>, cela représenterait <span class='emphase displayedDeathCount'></span> décès supplémentaires annuels dus aux vagues de chaleur. L’augmentation des soins de santé s’élèverait quant à elle à <span class='emphase displayedExcessCost'></span> euros par an.</p>
        `,
    ],
    do_not_touch: [],
    impact_2: [
        `
            <h2>Impact socio-économique</h2>
            <p>En première approximation, <span class='emphase displayedNbPeopleAtRisk'></span> citoyens (<span class='emphase pctPeopleAtRisk'></span>%) sont exposés au phénomène d’ilots de chaleur et subiront donc plus rapidement et plus intensément les vagues de chaleur. Une analyse plus poussée doit être effectuée pour voir si la population plus sensible (les enfants de moins de 5 ans et les plus de 65 ans) est plus ou moins exposée que les autres citoyens. Nous pouvons toutefois d’ores et déjà identifier quelques bâtiments accueillant des personnes sensibles qui sont situés en zone à risque d'îlot de chaleur :</p>
        `
    ],
    // mesure: {
    //     intro: `
    //         <h2>Les mesures d'adaptation</h2>
    //         <p>Il est possible des prendres des mesures pour limiter l’exposition et/ou la sensibilité au risque de vagues de chaleur. Nous suggérons ici quatre mesures d’adaptation Pour mettre en place ces mesures à l’échelle communale, différents leviers d’action sont possibles que nous évoquons dans la section <a href="#misc"><span class="emphase">transversale</span></a>.</p>
    //     `,
    //     menu: [
    //         "Etudier le phénomène d’îlot de chaleur",
    //         "Végétalisation",
    //         "Urbanisme adapté à la surchauffe",
    //         "Gestion des canicules"
    //     ],
    //     texts: [
    //         `
    //             <p>Dans les <a href="https://event.icedd.be/AWAC/cartes.html" target="_blank"><span class="emphase">10 cartes disponibles</span></a> pour le téléchargement l’une d’entre elle permet d’identifier les parcelles les plus à risque de phénomène d’îlot de chaleur urbain selon le taux d’imperméabilisation du sol et la proximité ou non d’espaces verts.</p>
    //             <p>Cette cartographie reste toutefois une indication sur base d’hypothèses théoriques. Mesurer réellement l’effet d’ilot de chaleur urbain sur le territoire communal permettrait une modélisation beaucoup plus fine pour localiser au mieux les actions. Des enseignements peuvent être tirés du programme <a href='https://librairie.ademe.fr/changement-climatique-et-energie/204-climatologie-urbaine-enseignements-du-programme-mustardijon.html'><span class='emphase'>MustarDijon</span></a> à ce sujet. La mesure (T°) étant très simple, cela peut faire l’objet d’un projet de sciences participatives avec les citoyens.</p>    
    //         `,
    //         `
    //             <p>Etudier de manière plus précise le phénomène d’îlot de chaleur permettra de mettre en évidence les zones les plus vulnérables, mais l’ensemble du territoire wallon fera face à une augmentation des vagues de chaleur et des mesures d’adaptation peuvent donc être mises en place sur l’ensemble du territoire.</p>
    //             <p>La végétalisation des centres urbains les plus artificialisés est à mettre en toute grande priorité dans le plan d’action. Il s’agit en effet d’une mesure bénéfique sur de nombreux plans (régulation thermique, régulation des fortes pluies, contribution au réseau écologique, qualité esthétique, bien-être et santé de la population).</p>
    //             <p>Il s’agit notamment de : Plantations d’arbres urbains, Végétalisation des façades et des toitures, Création de nouveaux espaces verts publics</p>
    //         `,
    //         `
    //             <p>Tout comme pour les risques d’inondation, le principal facteur d’augmentation du risque d’îlots de chaleur est l’imperméabilisation croissante du territoire. Une stratégie visant à stopper l’artificialisation des terres serait donc tout à fait pertinente pour le risque d’îlots de chaleur aussi.</p>
    //             <p>En Wallonie la réglementation en matière de Performance Energétique des Bâtiments (PEB) intègre des critères exigeants en matière de lutte contre la surchauffe. Ceux-ci sont toutefois liés à l’enveloppe du bâtiment uniquement et non pas à sa localisation géographique et donc au risque d’être dans un îlot de chaleur urbain. Il est donc opportun pour la commune de sensibiliser les maitres d’ouvrage se situant dans les zones à risque et de suggérer, voire soutenir ou imposer des mesures urbanistiques permettant de lutter contre la surchauffe : végétalisation importante de toiture et de façade, protection des vitrages si ceux-ci sont importants et fort exposés, bâti de couleur blanche.</p>
    //             <p>A noter pour les priorisation en matière de rénovation, que les bâtiments les plus à risque de surchauffe sont les bâtiments construits entre 1945 (après-guerre avec un fort besoin en reconstruction et des économies importantes réalisées sur les coûts) et 1985 (première réglementation thermique en Wallonie).</p>
    //         `,
    //         `
    //             <p>La Wallonie dispose d’un « <a href='https://www.aviq.be/fr?q=plan-wallon-forte-chaleur-pics-ozone'><span class='emphase'>Plan Wallon Forte Chaleur et Pic d’Ozone</span></a> » qui permet d’anticiper un risque de forte chaleur et de déclencher une série d’actions de prévention et, de recommandations auprès des services les plus concernés (maisons de repos, santé, évènements sportifs ou culturels).</p>
    //             <p>Une commune pourra éventuellement développer son propre plan chaleur afin de coordonner les services d’aides aux populations les plus sensibles (petite enfance, aînés, sans abris), ouvrir au grand public des lieux frais (ex : églises, musées) et relayer efficacement les communications de la région. Tout comme pour la gestion des inondations, des plans chaleurs pourraient être envisagés à l’échelle des institutions accueillant des personnes sensibles et dont les bâtiments sont situés dans les zones à risque d’îlot de chaleur.</p>
    //         `
    //     ]
    // },
}