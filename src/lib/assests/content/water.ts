export const content: { [key: string]: string[] | {intro: string, menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>Une pénurie d’eau résulte d’une insuffisance quantitative et/ou qualitative de la ressource hydrique disponible par rapport à la demande. Cela signifie qu’il existe un déséquilibre entre les prélèvements et la recharge des nappes d’eau souterraine ou le maintien de débits suffisants des cours d’eaux en surface.</p>
            <p>La Wallonie possède un capitale d’eau douce de 13 milliards de m³ par an. De ce volume est prélevé près de 3 milliards de m³ par an pour différents usages (réseau de distribution d’eau potable, industrie, agriculture) dont environ 90% dans les eaux de surface et 10% dans les eaux souterraines. Pour l’usage d’eau potable via le réseau de distribution publique la part provenant des eaux souterraines s’élève environ à 75% car l’infiltration des eaux jusque dans les nappes assure déjà une potabilisation par filtration naturelle. Une grande partie de cette eau consommée, retourne dans les eaux de surface sous forme de rejet après usage, mais une partie non-négligeable estimée à 80 millions de m³ par an n’est pas restituée, soit parce qu’elle est évaporée, soit parce qu’elle est incorporée dans des produits de l’industrie ou consommée. La recharge des eaux souterraines dépend fortement (i) du type de sol et de son occupation qui influencent la capacité d’infiltration et (ii) de la régularité des précipitations. Le volume d’eau souterraine disponible pour être prélevé de manière durable a été estimé en 1982 à 550 millions de m³ par an. Cette estimation n’a pas été mise à jour depuis (<a href="http://etat.environnement.wallonie.be/home/Infographies/eau.html"><span class="emphase">état de l’environnement wallon</span></a>). Outre l’aspect quantitatif, les eaux restituées sont de qualité variable et doivent faire l’objet de traitement pour ne pas impacter négativement les cours d’eau.</p>
        `
    ],
    exposition: [
        `
            <h2>Retour sur le passé et perspectives !</h2>
            <p>Le risque de raréfaction de la ressource eau en Wallonie est alarmant pour les autorités régionales et a amené à la réalisation d’une <span class="emphase">étude prospective</span>. Celle-ci estime que si à l’échelle du territoire l’évolution annuelle de la recharge ne devrait pas poser de problème par rapport aux prélèvements, des problèmes locaux (pénuries) liés à des évènements ponctuels (sécheresses) sont par contre inquiétants.</p>
            <p>Cette étude a également permis de cartographier les communes concernées par des problèmes de pénurie en 2017, 2018 et 2019. Les pénuries menant à des arrêtés de police pour interdire les usages non-essentiels et/ou des transferts entre points d’eau par camions-citernes (ce qui va à l’encontre des objectifs de réduction des émissions de gaz à effet de serre).</p>
            <img src="images/eau_historique.png" alt="Cartes historiques des pénurie d'eau"/>
            <p>L’étude souligne que des mesures locales de préservation de la ressource doivent être mises en place dès aujourd’hui pour obtenir des effets bénéfiques d’ici quelques décennies (restauration de milieux naturels, adaptation des modes de production en agriculture, sylviculture et dans l’industrie, économies d’eau et approvisionnement alternatifs).</p>
        `, 
    ],
    perspective : [
        `
            <h2>Facteurs aggravants</h2>
            <p>Les <span class='emphase'>changements climatiques</span> amèneront des précipitations beaucoup plus irrégulières, ce qui ne permettra plus un rechargement optimal des nappes phréatiques</p>
            <p><span class='emphase'>L’artificialisation des terres</span> oblige l’eau à ruisseler sur la surface artificialisée au lieu de s’infiltrer dans le sol pour rejoindre les nappes phréatiques.</p>    
        `,
    ],
    impact : [
        `
            <h2>Impact socio-économique</h2>
            <p>Évaluer l’impact économique au niveau de la population n’est pas simple. L’eau est un besoin vital. Cependant la quantité d’eau nécessaire pour remplir ce besoin vital ne représente que 7% de la consommation actuelles moyenne. Cela s’explique par les autres usages tels que l’hygiène domestique, mais qui pourraient être assurés par une eau non potable.</p>
        `,
        `
            <h2>Impact socio-économique</h2>
            <p>La ressource eau représente également un coût économique pour les sociétés de distribution. Afin d’assurer la distribution en eau et d’éviter les pertes sur le réseau, la Wallonie investit en moyenne 117 M€/an pour son infrastructure (2015-2019). Ce sont des investissements importants mais nécessaires, lorsque l’on compare ce coût d’entretien aux pertes économiques liées aux fuites sur le réseau. Celles-ci sont de l’ordre de 358 M€/an (source : <a href="https://www.aquawal.be/fr/statistiques-de-l-eau-potable-et-de-l-assainissement-des-eaux-usees-en-wallonie.html?IDC=621"><span class="emphase">statistiques Aquawal 2020</span></a>).</p>
            <p>Par ailleurs l’étude d’évaluation de <a href="https://climat.be/actualites/2020/impact-socio-economique-en-belgique"><span class="emphase">l’impact socio-économique du changement climatique en Belgique réalisée en 2020</span></a> suggère une estimation de coût pour un scénario où les pénuries plus fréquentes amèneraient à des rationnements de 25% de l’usage de l’eau pendant une période de 20 jours par an. Le coût d’un tel scénario pour <span class='emphase municipality-name'></span> représenterait <span class='emphase rationCost'></span> d’euros. Il ne s’agit toutefois que d’un scénario fictif dont il n’est pas possible d’estimer la probabilité annuelle selon les différents scénarios climatiques et aux horizons 2050 et 2100</p>    
        `
    ],
    mesure: {
        intro: `
            <h2>Les mesures d'adaptation</h2>
            <p>Il est possible des prendres des mesures pour limiter l’exposition et/ou la sensibilité au risque de pénurie d'eau. Nous suggérons ici quatre mesures d’adaptation Pour mettre en place ces mesures à l’échelle communale, différents leviers d’action sont possibles que nous évoquons dans la section <a href="#misc"><span class="emphase">transversale</span></a>.</p>
        `,
        menu: [
            "Limiter l’imperméabilisation des terres",
            "Réseau écologique",
            "Réduction de la consommation"
        ],
        texts: [
            `
                <p>La compétence de l’aménagement du territoire, dont l’opérationnalisation est largement dans les mains de l’échelon communal est le principal levier d’action pour limiter l’imperméabilisation du territoire et préserver ainsi les capacités d’infiltration et de recharge des nappes (voir section inondations pour plus de détail au sujet de cette mesure)</p>
            `,
            `
                <p>La contribution d’une parcelle à la recharge des nappes phréatiques est directement liée à l’occupation du sol et la capacité des éléments qui l’occupent à retenir l’eau en surface le temps nécessaire à son infiltration, recouvrir celle-ci pour empêcher son évaporation, structurer le sol pour une meilleure infiltration de l’eau et éventuellement filtrer certains polluants pour améliorer la qualité de l’eau rechargeant la nappe. La mise en œuvre d’un réseau écologique sera favorable à la capacité de régulation et protection de la ressource eau. Des pistes de mise en œuvre sont élaborées dans la section biodiversité et forêt ainsi que dans la section agriculture.</p>
            `,
            `
                <p>Il s’agit ici de mettre en place des actions de sensibilisation, de soutien et de régulation qui permettront aux citoyens, services publics et entreprises de réduire leur consommation d’eau de ville. 93% de la consommation pourrait utiliser une source alternative (eau de pluie ou de puits), la moitié nécessitant une filtration (bains/douches, vaisselle) et l’autre moitié pouvant être utilisée même sans filtration ou avec une filtration très basique (arrosage, WC, machines à laver, nettoyage).</p>
                <p>Outre la sensibilisation de ses citoyens, la commune pourra jouer un rôle d’exemplarité en récupérant l’eau de pluie dans ses bâtiments communaux.</p>
                <p>Un travail de lobbying pourra également être fait auprès des intercommunales dont la volonté d’aider les usagers à réduire leur consommation d’eau se confronte malheureusement à des besoins de rentabilité financière.</p>
                <p>Enfin, en période de sécheresse prolongée et risque de pénurie d’eau, une collaboration étroite avec l’intercommunale en charge de la distribution permettra d’alerter, prioriser et limiter les usages de l’eau.</p>
            `
        ]
    },
}