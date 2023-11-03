export const content: { [key: string]: string[] | {intro: string, menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>L’agriculture consiste en l’optimisation d’écosystèmes naturels à des fins productives pour l’alimentation humaine.</p>
            <p><span class="emphase">Les activités de cultures et d’élevage</span> sont intimement <span class="emphase">liées au climat</span>. Les conditions météorologiques conditionnent la croissance, la disponibilité de l’eau ainsi que les conditions de labour, de conservation du sol et de récolte. La production agricole est bien entendu variable d’une année à l’autre selon les conditions météorologiques au moment des cultures et des récoltes.</p>
        `
    ],
    exposition: [
        `
            <h2>Exposition</h2>
            <p>En Wallonie, l’agriculture est importante, la superficie agricole utilisée (SAU) représente 44% du territoire.</p>
            <p>L’agriculture y est largement conventionnelle et intensive. Les principales cultures sont les praires permanentes : 42% de la SAU ; le froment d’hiver : 17% ;  le maïs : 8% ; la pomme de terre : 6% ; et la betterave : 5%. (source : <a class="emphase" href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures">Statbel</a>).</p>
            <p>Pour <span class="municipality-name emphase"></span>, ces chiffres s’élèvent à :</p>
            <ul>
                <li>Superficie Agricole Utilisée (SAU) : <span class="emphase pctUsedAgriculturalArea"></span>% du territoire</li>
                <li>Praires permanentes : <span class="emphase pctPermanentMeadowsInUAA"></span>% de la SAU</li>
                <li>Froment : <span class="emphase pctWinterWheatInUAA"></span>% de la SAU</li>
                <li>Maïs : <span class="emphase pctFeedCornInUAA"></span>% de la SAU</li>
                <li>Pomme de terre : <span class="emphase pctPotatoInUAA"></span>% de la SAU</li>
                <li>Betteraves : <span class="emphase pctSugarBeetInUAA"></span>% de la SAU</li>
            </ul>
        `,
        `
            <p>Plusieurs risques pèsent sur ce secteur</p>
            <p>La <span class="emphase">baisse de fertilité des sols</span> due à l’érosion (liée aux fortes pluies et coulées de boues) et renforcé par des pratiques agricoles intensives, mécaniques et les grandes cultures sarclées comme le maïs, la pomme de terre ou la betterave. En Wallonie, les pertes en sols par érosion hydrique ont représenté en moyenne 2,3 tonnes/hectare.an pour la période 2013-2017.(<a href="http://etat.environnement.wallonie.be/contents/indicatorsheets/SOLS%203.html"><span class="emphase">état de l’environnement wallon</span></a>). Il est considéré que des pertes en sol supérieures à 5 tonnes/hectare.an (c’est le cas pour près de 60% des terres cultivées) empêchent le maintien des multiples fonctions remplies par les sols (production agricole, support aux infrastructures, régulation de divers cycles biogéophysiques, services culturels, …)</p>
            <p><span class="emphase">Les calamités agricoles</span> dues à des évènements climatiques extrêmes ou des maladies et ravageurs. La sécheresse de 2018 a ainsi mené à 350 millions d’euros de dédommagements pour calamités agricole en Wallonie.</p>
        `,
        `[CUSTOM_TABLE]`,   
    ],
    perspective: [
        `
            <h2>Perspectives et facteurs aggravants</h2>
            <p>L’amplification de ces risques est causée par quatre facteurs principaux.</p>
            <p><span class="emphase">Les changements climatiques</span> entraînent des précipitations et températures extrêmes et irrégulières ce qui impacte le cycle des cultures, crée des stress hydriques et thermiques pour les cultures et le bétail, induit une perte de rendement de la photosynthèse et favorise l’arrivée de maladies et ravageurs.</p>
            <p><span class="emphase">L’artificialisation des sols</span>, toujours en progression en Wallonie est principalement liée aux nouvelles constructions résidentielles, en majorité (75%) sur des terres cultivées (artificialisation de 12km²/an en moyenne entre 2010 et 2021 en Wallonie).</p>
            <p>La tendance générale observée en matière de <span class="emphase">pratiques agricoles</span> est la croissance du recours à l’agriculture conventionnelle et intensive qui amenuise les facteurs de résilience. En Wallonie, en 2016, nous consommions 61% d’engrais azotés minéraux par ha de SAU en plus que la moyenne de l’union européenne (<a href="http://etat.environnement.wallonie.be/contents/indicatorsheets/AGRI%205.html"><span class="emphase">état de l’environnement wallon</span></a>).</p>
            <p>Entre 1990 et 2019, le nombre d’exploitations agricole a reculé de 56% alors que la superficie moyenne par exploitation augmenta de 123%. Cette tendance vers un <span class="emphase">petit nombre de très grandes exploitations agricoles</span> rend notre modèle moins résilient face aux chocs.</p>
        `,
    ],
    impact: [
        `
            <h2>Impact socio-économique</h2>
            <p>Selon <a href="https://climat.be/doc/seclim-be-2020-finalreport.pdf"><span class="emphase">l’étude d’évaluation de l’impact socio-économique du changement climatique en Belgique réalisée en 2020</span></a>, les pertes maximales pour le secteur agricole pourraient s’élever à 200 millions d’euros par an (valeur de 2019) pour la Wallonie à l’horizon 2050.</p>
            <p>Le coût estimé de l’érosion des sols s’élève quant à lui à 2.310 €/ha.an en moyenne pour les surfaces touchées par du ruissellement et des coulées de boue (étude AGIRaCAD). Toujours selon la même étude, les coulées de boues et inondations qui résultent de ce phénomène de ruissellement génèrent de l’ordre de 600.000€/an de dégâts à l’échelle de la Wallonie. Enfin, les sédiments emportés par les coulées de boues finissent généralement dans les cours d’eau et doivent ensuite être dragués. Le budget annuel de la Wallonie pour ce dragage est actuellement de 16.700.000€.</p>
            <p>Sur les <a href="https://event.icedd.be/AWAC/cartes.html" target="_blank"><span class="emphase">cartographies</span></a> disponibles sur ce portail, peuvent être identifiés les axes de ruissellement ainsi que les parcelles agricoles sensibles à l’érosion des sols afin d’orienter l’analyse des risques et les zones où mettre en place des mesures de lutte contre l’érosion et les coulées de boues. On y retrouve également une carte aidant à identifier les parcelles vulnérables face aux sécheresses.</p>
            <p>Notons également que derrière le secteur agricole se trouve les agriculteurs, qui seront les premiers impactés par les pertes de production. Or de nombreux agriculteurs sont déjà en difficulté financière. Le revenu du travail et capital familial moyen des agriculteurs wallons s’élevait à 27.596€ (SPW, 2020), ce qui correspond à 73% du revenu médian wallon. Ce sont près de 20% des agriculteurs qui travaillent à perte sur l’année, ne dégageant aucun revenu. A ceci s’ajoute une population d’agriculteurs vieillissante, des départs à la retraite mais des difficultés pour les jeunes agriculteurs de s’installer. De plus, les fonds publics alloués aux calamités agricoles se réduisent chaque année afin de pousser les agriculteurs vers des mécanismes assurantiels plutôt que des subventions publiques. Au-delà de la population très spécifique des agriculteurs, les impacts du changement climatique sur le secteur de l’agriculture pourraient avoir comme conséquence une hausse du prix des aliments (du moins pour la production locale) et se répercuter de manière proportionnellement plus impactante sur le budget des ménages plus précaires.</p>
        `
    ],
    mesure: {
        intro: `
            <h2>Les mesures d'adaptation</h2>
            <p>Il est possible des prendres des mesures pour limiter l’exposition et/ou la sensibilité au risque agricole. Nous suggérons ici quatre mesures d’adaptation Pour mettre en place ces mesures à l’échelle communale, différents leviers d’action sont possibles que nous évoquons dans la section <a href="#misc"><span class="emphase">transversale</span></a></p>
        `,
        menu: [
            "Pratiques culturales adaptées",
            "Plantation de haies",
            "Assurer des débouchés à la production locale",
            "Conseil Communal de Politique Agro-alimentaire Durable",
            "Accès au foncier"
        ],
        texts: [
            `
                <p>Des pratiques culturales adaptées pour limiter l’érosion sont des techniques de culture qui viseront à ne pas bousculer l’équilibre du sol (pas de labour, pas de pesticide ni d’engrais chimique) et assurer une couverture végétale (ou paillage) permanente de la parcelle par un système bien planifié de rotations et d’inter-cultures. Ces techniques permettront d’ améliorer la texture et la qualité biologique du sol tout en assurant des apports de matière organique essentiels au développement des cultures. Ce type de mesure doit se mettre en œuvre au travers d’une sensibilisation et d’une collaboration forte avec les agriculteurs. Ce n’est pas un domaine d’action facile pour le niveau communal, mais celui-ci peut jouer un rôle de coordination essentiel.</p>
            `,
            `
                <p>Parmi les pratiques agricoles intéressante on trouve notamment la plantation de haie qui permettra de lutter contre l’érosion des sols et la formation de coulées de boues. Toute haie sur un terrain en pente et située selon une courbe de niveau jouera un rôle important dans la conservation des sols (cet effet est toutefois localisé au pied de la haie et ne remplace donc pas des modifications de pratiques culturales sur l’ensemble de la parcelle). En effet cet obstacle naturel permet de ralentir le ruissellement, d’augmenter le taux de matière organique à proximité de la haie, de favoriser l’infiltration de l’eau et le dépôt des sédiments ainsi que la stabilité globale des terres. Il faut pour cela des éléments linéaires continus de haie ayant une forte densité au pied de la haie, idéalement constitués de 6 plants par mètres répartis sur 2 à 3 rangs (<a href="http://www.awaf.be/haies/fiches_techniques/Erosion.pdf"><span class="emphase">fiche AWAF</span></a>). Pour améliorer encore l’efficacité on peut planter la haie sur un petit talus précédé d’une fosse d’infiltration et/ou d’une bande enherbée. Le temps que la haie grandisse et soit efficace, on peut envisager la pose de fascines (barrière de branchages).</p>
            `,
            `
                <p>Afin de rendre économiquement durable les initiatives des producteurs locaux souhaitant appliquer les pratiques culturales adaptées et fournir leurs produits dans un réseau local, il est nécessaire de <span class="emphase">s’assurer que les débouchés existent et d’augmenter ceux-ci</span>. Si des études récentes permettent de montrer la pertinence économique de ce modèle à long terme, cela nécessite toutefois un changement d’approche conceptuelle et des investissements de transition non négligeables pour dépasser les nombreux verrouillages socio-économiques. Par ailleurs <span class="emphase">de nombreux effets bénéfiques de ces pratiques culturales font partie des externalités qui ne se rentabiliseront donc pas au niveau de l’exploitation</span>. Il est donc nécessaire d’élaborer un cadre économique et politique permettant un retour de ces externalités vers les producteurs. C’est un domaine dans lequel le niveau communal peut influencer à plusieurs titres : en tant que consommateur de produits, organisateur de certaines filières de distribution (marchés) et enfin dans un rôle potentiel de coordinateur des filières, tant pour les produits alimentaires que pour les sous-produits agricoles.</p>
            `,
            `
                <p>Afin d’assurer la sécurité alimentaire il est nécessaire que la commune puisse <span class="emphase">coordonner une vision globale</span> et notamment orienter l’assolement des terres afin que l’ensemble de celles-ci répondent aux besoins de la population.</p>
                <p>Une telle volonté peut se traduire par la mise en place d’un Conseil de Politique Agro-alimentaire (CPA), si possible indépendant de l’institution communale dans ses avis. De l’ambition dépendra les moyens mis à disposition (jusqu’à éventuellement pouvoir influencer sur des contraintes règlementaires) d’un tel conseil, afin d’orienter activement l’assolement, les pratiques culturales et la coordination des débouchés.</p>
                <p>Dans un premier temps, pour la question de l’assolement, le CPA devra étudier le contexte actuel et confronter la production locale aux besoins nutritionnels. Cela permettra d’éclairer différents leviers d’action pour essayer d’accorder au maximum la production et les besoins (assolement, régime alimentaire, gaspillage, augmentation des superficies de production, …).</p>
            `,
            `
                <p>Au vu de la situation agricole en Wallonie il est crucial de <span class="emphase">préserver les terres agricoles existantes et valoriser les autres terres ayant un potentiel productif</span>. A ce titre la commune dispose d’outils d’aménagement du territoire permettant de contrôler l’urbanisation et l’artificialisation des terres. La commune est elle-même propriétaire foncière et possède une marge de manœuvre sur la manière de gérer ses terrains et dans les nouvelles acquisitions. En particulier elle peut coordonner l’accès des citoyens à des potagers collectifs ou jardins éloignés. Cette mise à disposition de terrains pour les citoyens doit se faire avec un accompagnement et un renforcement des savoir-faire. Ce renforcement peut s’étendre au-delà des citoyens ayant accès à un potager collectif, car cela contribue indirectement à la transformation des terres privées de ces citoyens (jardins) en parcelles productives et contribue donc également à l’augmentation de la production locale.</p>
            `
        ]
    }
}