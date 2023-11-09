export const content: { [key: string]: string[] | {intro: string, menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>En Wallonie, on distingue 2 grands types d’inondation, les inondations par débordement, et les inondations par ruissellement.</p>
            <div class="illustration">
                <p>L’inondation par ruissellement se produit lorsque les eaux de pluie ne peuvent pas ou plus s’infiltrer dans le sol, ruisselle et fini par se concentrer et générer des inondations locales. Ce phénomène survient généralement à la suite de très fortes pluies, de manière relativement brève et localisé. Combiné à de l’érosion des sols (<a href="#farming"><span class="emphase">ruissellement sur des terres agricoles à nu</span></a>) cela peut engendrer des coulées de boues ayant un grand impact sur les infrastructures.</p>          
                <img src="images/ruissellement.png" alt="Illustre une inondation par ruissellement"/>    
            </div>
            <div class="illustration">
                <p>L’inondation par débordement se produit lorsqu’un cours d’eau déborde de son lit habituel. Celle-ci se produit généralement sur un temps plus long à la suite de pluies importantes, pas nécessairement extrêmes, mais survenant sur une longue période en continu.</p>
                <img src="images/debordement.png" alt="Illustre une inondation par debordement"/>    
            </div>
            <p class="source">Source des illustrations : Agence de l’eau Seine-Normandie</p>
        `
    ],
    exposition: [
        `
            <h2>Retour sur le passé !</h2>
            <p>La Wallonie a déjà pu vivre plusieurs inondations par le passé. Revenons sur quelques-unes des plus marquantes (source : <a href="https://www.meteo.be/fr/climat/climat-de-la-belgique/evenements-remarquables-depuis-1901/evenements-remarquables/evenements/inondations"><span class="emphase">IRM</span></a>).</p>
        `,
    ],
    floodMap: [
        `
            <p>Le mois de février 1984 à Chiny, restera dans les mémoires des habitants avec une série d'inondations dûe aux fortes pluies débutant dans les Ardennes.</p>
        `,
        `
            <p>Les fêtes de fin d'année 1993 ne seront pas gaies non plus pour les wallons qui sont encore contraints de passer le réveillon les pieds dans l'eau. Des précipitations exceptionnelles seront relevées à Bouillon, Libramont-Chevigny et Vresse-sur-Semois.</p>
        `,
        `
            <p>L'histoire se répétera en janvier 1995, où de nouveaux relevés de précipitations records seront enregistrée à Bouillon, Libramont-Chevigny et Beaumont.</p>
        `,
        `
            <p>Finalement le 14, 15 et 16 juillet 2021 fût l'évémenent le plus marquant car le plus désastreux en termes de dégâts mais surtout de victimes. En Belgique, 39 personnes décèderont durant ce tragique épisode.</p>
        `,
    ],
    perspective : [
        `
            <h2>Perspectives et facteurs aggravants</h2>
            <p>Les changements climatiques entraîneront une plue grande irrégularité des précipitations que ce que nous avons connu jusqu’à présent. Cela se traduira par davantage de précipitations extrêmes alors que le nombre de jours de précipitations diminuera en été. Les pluies seront donc plus concentrées que par le passé. En Belgique les changements projetés par le projet <a href='https://www.sciencedirect.com/science/article/pii/S2405880717300195?via%3Dihub'><span class='emphase'>CORDEX</span></a> suggèrent que l’intensité des pluies extrêmes pourrait augmenter de 66% d’ici à la fin du siècle. Ces pluies dans le futur pourraient ainsi être responsables d'inondations par débordement, faisant augmenter le niveau des cours d’eau, mais aussi par ruissellement.</p>
            <p>Ce ruissellement est aggravé par l’imperméabilisation des sols, conséquence directe de l’augmentation de <a href='#artificialisation'><span class='emphase'>l’artificialisation du territoire</span></a>. Au plus une surface est imperméabilisé, au plus l’eau ruissellera sur cette surface au lieu de <a href='#eau'><span class='emphase'>s’infiltrer pour rejoindre les nappes phréatiques</span></a>.</p>    
        `
    ],
    impact : [
        `
            <h2>Impact socio-économique</h2>
            <p>Les inondations ont un impact économique, surtout sur les infrastructures, mais parfois également, sur la santé et la vie des citoyens.</p>
            <p>Lors d’épisode d’inondations, les infrastructure et biens situés en zones inondables sont également sujets à dommage. Les données provenant des cartes, misent à disposition <a href="https://event.icedd.be/AWAC/cartes.html" target="_blank"><span class="emphase">ici</span></a>, nous permettent de situer les bâtiments suivant en zone d’aléa d’inondation.</p>
        `,
    ],
    filler: [
        `
            <p>À <span class="emphase municipality-name"></span>, <span class="emphase nbResidencesAtRisk"></span> habitations sont situées dans des zones qui pourraient être inondées dans le futur, soit environ <span class="emphase pctResidencesAtRisk"></span>% du résidentiel de la commune.</p>
            <p>A titre comparatif la moyenne wallonne est de <span class="emphase">17,98</span>%</p>
        `,
        `
            <p><span class="emphase nbRetailOfficesServicesAtRisk"></span> commerces, services et institutions du secteur tertiaire sont également situées dans des zones à risque soit <span class="emphase pctRetailOfficesServicesAtRisk"></span>% du secteur pour <span class="emphase municipality-name"></span>.</p>
            <p>A titre comparatif la moyenne wallonne est de <span class="emphase">38,89</span>%</p>
        `,
        `
            <p>Finalement <span class="emphase nbIndustryCraftsAtRisk"></span> entreprises industrielles et d’artisanat se situent en zone d’aléa d’inondation, soit <span class="emphase pctIndustryCraftsAtRisk"></span>% pour <span class="emphase municipality-name"></span>.</p>
            <p>A titre comparatif la moyenne wallonne est de <span class="emphase">36,76</span>%</p>
        `,
    ],
    people: [
        `
            <h2>Personnes</h2>
            <p>En première approximation <span class="emphase pctResidencesAtRisk"></span>% des habitations représenteraient <span class="emphase nbPeopleAtRisk"></span> citoyens exposés au risque d’inondation à <span class="emphase municipality-name"></span>. Une analyse plus poussée doit être effectuée pour voir si la population plus sensible (enfants de moins de 5 ans, plus de 65 ans, personnes en situation de précarité socio-économique) est plus ou moins exposée que les autres citoyens. Nous pouvons toutefois d’ores et déjà identifier quelques bâtiments accueillant des personnes sensibles qui sont situés en zone à risque d’inondation : </p> 
        `
    ],
    // mesure: {
    //     intro: `
    //         <h2>Les mesures d'adaptation</h2>
    //         <p>Il est possible des prendres des mesures pour limiter l’exposition et/ou la sensibilité au risque d’inondation. Nous suggérons ici quatre mesures d’adaptation Pour mettre en place ces mesures à l’échelle communale, différents leviers d’action sont possibles que nous évoquons dans la section <a href="#misc"><span class="emphase">transversale</span></a>.</p>
    //     `,
    //     menu: [
    //         "Limiter l’imperméabilisation des terres",
    //         "Renaturer les berges et créer des zones d'immersion temporaire",
    //         "Les nouvelles rivières urbaines",
    //         "Plans d’urgences"
    //     ],
    //     texts: [
    //         `
    //             <p>La compétence de l’aménagement du territoire, dont les aspects opérationnels sont largement dans les mains de l’échelon communal est le principal levier d’action pour limiter l’imperméabilisation du territoire (facteur aggravant de risque), s’assurer que le nouveau bâti ne se fasse pas en zone d’inondation et n’augmente pas le risque pour les zones situées en aval.</p>
    //             <p>Les communes wallonnes disposent actuellement d’outils comme le schéma de développement communal (SDC) ou des guides communaux d’urbanisme pour pouvoir intégrer ces aspects dans l’octroi des permis d’urbanisme. Il est également possible de sensibiliser et accompagner les maitres d’œuvre dans la conceptualisation d’infrastructures perméables et résilientes. Enfin certaines communes font le choix de promouvoir l’habitat léger qui n’imperméabilise pas le sol qu’il occupe. Chacune de ces mesures peut se traduire en actions ayant une ambition simple (appliquer les orientations Wallonnes) ou très ambitieuse (stopper dès aujourd’hui toute artificialisation et imposer une gestion complète de l’eau de pluie sur la parcelle pour toute demande de permis).</p>
    //             <p>Outre la contribution à réduire la vulnérabilité aux inondations, limiter l’imperméabilisation des terres répond aussi à d’autres grands risques et enjeux : îlots de chaleur urbains, agriculture, biodiversité. Si une seule priorité, un seul niveau d’ambition élevé, devait être choisi en matière d’adaptation, stopper l’imperméabilisation des terres serait une bonne option.</p>    
    //         `,
    //         `
    //             <p>Renaturer les berges et assurer la présence de noues ou prairies inondables le long d’un cours d’eau permet de limiter l’impact négatif des inondations par débordement (<a href='https://inondations.wallonie.be/accueil.html'><span class='emphase'>SPW PGRI</span></a>. Les principales zones inondables suite au débordement des cours d’eau Renaturer les berges et assurer la présence de noues ou prairies inondables le long d’un cours d’eau permet de limiter l’impact négatif des inondations par débordement (<a href='https://inondations.wallonie.be/accueil.html'><span class='emphase'>SPW PGRI</span></a>. Les principales zones inondables suite au débordement des cours d’eau impact direct sur les zones inondables bordant ces cours d’eau et un impact indirect sur le débit des cours d’eau plus importants qu’ils alimentent. Ce faible impact en termes de gestion du risque s’ajoute toutefois à un bénéfice non-négligeable pour la biodiversité des milieux rivulaires et justifie donc qu’on y attache de l’attention.</p>
    //         `,
    //         `
    //             <p>Les nouvelles rivières urbaines (NRU) sont des réseaux d’aménagements hydrauliques et paysagers permettant une gestion des eaux de pluie de manière décentralisée. Les eaux pluviales sont ainsi directement stockées/infiltrées/retenues proche de là où la pluie tombe, et n’encombrent pas le réseau d’égouttage, évitant ainsi des débordements en temps de forte pluie. De plus, les NRU minimisent le ruissellement en infiltrant les eaux de pluie directement localement, évitant ainsi une potentielle érosion des sols, surtout sur les terres agricoles. Ces infrastructures contribuent au remplissage des nappes phréatiques et par conséquent, augmentent la durabilité de la ressource eau (<a href='https://www.egeb-sgwb.be/IMG/pdf/egeb-aquatopia-texte.pdf'><span='emphase'>Aquatopia</span></a>).</p>
    //             <p>A l’échelle de la parcelle il s’agit d’aménagements visant à stocker, réutiliser et infiltrer localement l’eau afin d’avoir une contribution nette nulle au ruissellement Pour une commune il s’agit surtout de considérer les aménagements publics. Toutefois des outils de calcul et recommandations de spécifications techniques peuvent être fournis en soutien aux projets privés de construction/rénovation.</p>
    //             <p>Sur l’espace public, ces aménagements, appelés ouvrages collectifs de récupération (OCR), sont des structures légères, généralement moins coûteuses et plus faciles à mettre en place et à entretenir que les structures conventionnelles (tuyaux enterrés, ...). Elles sont le plus souvent végétalisées.</p>
    //         `,
    //         `
    //             <p>Les communes ont pour mission d’établir un « plan général d’urgence et d’intervention » (PGUI) qui prévoit les mesures à prendre et l’organisation des secours en cas d’événements calamiteux, de catastrophes ou de sinistres, en ce compris les inondations sur le territoire. Ce plan de gestion permet de coordonner les différents services (pompiers, aide médicale d’urgence, police, appui logistique et communication) pour répondre à la crise au moment où elle survient. Un coordinateur de la planification d’urgence (PlanU) est en charge de rédiger et maintenir à jour ce plan. La commune peut également aller plus loin en soutenant les bâtiments sensibles (hôpitaux, crèches, écoles) situés dans les zones inondables, dans l’élaboration de plans d’urgences spécifiques.</p>
    //         `
    //     ]
    // },
    // outil: [
    //     `
    //         <h2>Outils pratiques</h2>
    //         <p>D’autres outils utiles à la planification et l’analyse du risque :</p>
    //         <ul>
    //             <li><a href='https://inondations.wallonie.be/accueil.html'><span class='emphase'>Portail inondation</span></a> (attention les cartes d’aléa ne prennent pas en compte les changements climatiques)</li>
    //             <li><a href='https://inondations.wallonie.be/files/documents_a_telecharger/DI/PGRI%202/PGRI2227_FINAL_20210408.pdf'><span class='emphase'>Plans de gestion des risques d’inondation</span></a></li>
    //             <li><a href='http://environnement.wallonie.be/contrat_riviere/'><span class='emphase'>Contrats de rivière</span></a></li>
    //             <li><a href='https://hydrometrie.wallonie.be/home.html'><span class='emphase'>Aqualim</span></a></li>
    //             <li><a href='https://spw.wallonie.be/guide/guide-services/15957'><span class='emphase'>Centre Régional de Crise</span></a></li>
    //             <li><a href='http://voies-hydrauliques.wallonie.be/opencms/opencms/fr/hydro/Actuelle/crue/index.html'><span class='emphase'>Infocrues</span></a></li>
    //             <li><a href='https://planu.be/index.php'><span class='emphase'>PlanU</span></a></li>
    //         </ul>
    //     `
    // ]
}
