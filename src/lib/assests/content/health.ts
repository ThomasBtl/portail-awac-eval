export const content: { [key: string]: string[] | {menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>La pollution se définit comme l'introduction directe ou indirecte, par suite de l'activité humaine, de substances ou de chaleur dans l'air, l'eau ou le sol, susceptibles de porter atteinte à la santé humaine ou à la qualité des écosystèmes. Les polluants atmosphériques les plus problèmatiques aujourd'huit pour la santé humaine sont :</p>
            <p>Les <span class="emphase">particules fines</span>, qui proviennent des activités humaines (industrie et logement) ou à la suite d’incendies. Leur temps de présence dans l’air dépend de leurs caractéristiques propres et des conditions météorologiques (dispersion par le vent, précipitées au sol par la pluie).</p>
            <p>Les <span class="emphase">oxydes d’azote</span> regroupent le monoxyde d’azote (NO) et le dioxyde d’azote (NO2), il s’agit de composés issus de la combustion.</p>
            <p><span class="emphase">L’ozone troposphérique</span> n’est pas directement émis dans l’air, il s’agit d’un polluant secondaire issu d’une réaction chimique entre les NOX et les composés organiques volatils.</p>
        `
    ],
    exposition: [
        `
            <h2>Exposition</h2>
            <p>en 2009, la communauté scientifique a défini 9 « limites planétaires », c’est-à-dire des seuils à ne pas franchir afin de rester dans une zone habitable stable sur la planète.</p>
            <img style="width:100%; "src="images/sante-historique.png"/>
            <p>En 2022, une <a href="https://pubs.acs.org/doi/10.1021/acs.est.1c04158,"><span class="emphase">étude</span></a> vient pour la première fois de quantifier la limite relative à « l'introduction dans l'environnement d'entités nouvelles », c'est-à-dire la pollution chimique (p.ex. polluants organiques, matières radioactives, nanomatériaux, microplastiques) due aux activités humaines. Les conclusions de cette étude indiquent que l’humanité fonctionne actuellement au-delà du seuil critique de pollution. En complément des autres seuils déjà estimés, cela signifie que 5 limites sur 9 ont déjà été dépassées, ce qui souligne l’urgence de la situation dans laquelle nous nous trouvons.</p>
        `,
    ],
    perspective: [
        `
            <h2>Perspectives et facteurs aggravants</h2>
            <p>L’amplification du phénomène de pollutions et nuisances environnementales est causée principalement par les activités humaines : le <span class="emphase">transport</span> (la Wallonie possède un réseau routier 4 fois plus dense que la moyenne européenne), l’agriculture (la Wallonie utilise 61% d’engrais azotés de plus que la moyenne européenne), le <span class="emphase">logement</span> et <span class="emphase">l’industrie</span>.</p>
            <p>Concernant <span class="emphase">les changements climatiques</span> il est probable que :</p>
            <ul>
                <li>La baisse attendue du nombre de jours de pluie aura pour effet de moins contribuer au « nettoyage » de l’air et donc augmenter en moyenne la pollution atmosphérique.</li>
                <li>En été les températures plus élevées et vagues de chaleur seront favorables à l’apparition de pics d’ozone.</li>
                <li>La baisse des besoins en consommation d’énergie pour le chauffage en hiver devrait toutefois réduire la pollution par les particules fines et NOX durant cette saison.</li>
            </ul>
            <p>Ces effets seront toutefois négligeables par rapport aux effets des changements attendus (réduction de la pollution) de la mobilité et du chauffage si les engagements en matière de réduction des émissions de gaz à effet de serre sont suivis.</p>
            <p>Enfin il y a les risques liés à des accidents survenant sur des <a href=""><span class="emphase">sites Seveso</span></a> (site d’entreprises ayant une activité liée à la manipulation, fabrication, emploi ou stockage de substances dangereuses).</p>
        `,
    ],
    impact: [
        `
            <h2>Impact socio-économique</h2>
            <p>À <span class="emphase municipality-name"></span>, <span class="emphase nbDeathByAirPollutants"></span> décès/an sont dus aux trois principaux polluants atmosphériques (particules fines, oxyde d'azote et ozone).</p>
        `
    ],
    adapt: [
        `
            <h2>Les mesures d'adaptation</h2>
            <p>Il est possible de prendre des mesures pour limiter l’exposition et/ou la sensibilité aux risques pour la santé. Pour les risques liés à la qualité de l’air, sont de limiter l’utilisation des moteurs thermiques et favoriser fortement la mobilité douce dans la zone la plus large possible. Bonne nouvelle, l’adaptation rejoint ici les efforts qui seront faits en termes d’atténuation (plan vélo, piétonnier, transports en commun, co-voiturages, services de transport cyclo-logistique, …). Le succès dépendra de leur mise en œuvre effective et des budgets qui lui seront alloués.Pour mettre en place ces mesures à l’échelle communale, différents leviers d’action sont possibles que nous évoquons dans la section <a href="#misc"><span class="emphase">transversale</span></a>.</p>
        `,
    ]
}