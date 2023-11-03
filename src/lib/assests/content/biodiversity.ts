export const content: { [key: string]: string[] | {intro: string, menu: string[], texts: string[]} } = {
    definition: [
        `
            <h2>Définition</h2>
            <p>La diversité des espèces vivantes (biodiversité) présentes sur un territoire est intiment liée au climat. Chaque espèce, qu’elle soit animale ou végétale, s’épanouit dans des plages plus ou moins étroites des paramètres climatiques : précipitations (quantité et variabilité), les températures moyennes, maximum, minimum, les périodes de sécheresse, de gel. La biodiversité joue un rôle multiple dans une stratégie d’adaptation au changement climatique.</p>
            <ul>
                <li>Elle est un secteur impacté par le changement climatique et à ce titre mérite qu'on mette en place des mesures de gestion lui permettant de d'adapter au mieux.</li>
                <li>Elle est une source de résilience pour les autres secteurs impactés par le changement climatique.</li>
                <li>Elle constitue également une réserve de carbone et contribue ainsi (quand on l’augmente) à l’atténuation du changement climatique, ou à l’inverse (quand elle décline) à l’augmentation des teneurs en gaz à effet de serre (GES) dans l’atmosphère.</li>
            </ul>
        `
    ],
    exposition: [
        `
            <h2>Exposition</h2>
            <p>L’effondrement de la biodiversité est une crise majeure, mondiale et largement en cours au même titre que celle induite par le changement climatique.</p>
            <p>À l’échelle mondiale, 1 espèce sur 8 est menacée d’extinction tandis que les populations d’espèces communes ont diminué de 20% depuis le début du XXe siècle. [<a href=""><span class="emphase">IPBES</span></a>]</p>
            <p>En belgique, 1 à 2 espèces sur 3 sont menacée. Une situation particulièrment préoccupante en Wallonie, notemment pour :</p>
            <div class="decrease-wrapper" style="display: flex; column-gap: 40px; justify-content: center; flex-wrap: wrap;">
                <div class="decrease-content">
                    <p class="emphase" style="text-align: center;">Oiseaux communs</p>
                    <div style="display: flex; align-item: center; justify-content: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=red class="bi bi-arrow-down-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" stroke=red/>
                        </svg>
                        <span style="padding: 0 10px;font-size: 1.12em;">-30,47%</span>
                    </div>
                    <p style="text-align: center;">sur les 28 dernières années</p>
                </div>
                <div class="decrease-content">
                    <p class="emphase" style="text-align: center;">Oiseaux des milieux agricoles</p>
                    <div style="display: flex; align-item: center; justify-content: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=red class="bi bi-arrow-down-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" stroke=red/>
                        </svg>
                        <span style="padding: 0 10px;font-size: 1.12em;">-57%</span>
                    </div>
                    <p style="text-align: center;">sur les 28 dernières années</p>
                </div>
                <div class="decrease-content">
                    <p class="emphase" style="text-align: center;">Espèces des forêts</p>
                    <div style="display: flex; align-item: center; justify-content: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" stroke=red/>
                        </svg>
                        <span style="padding: 0 10px;font-size: 1.12em;">-28,7%</span>
                    </div>
                    <p style="text-align: center;">sur les 28 dernières années</p>
                </div>
            </div>
        `,
    ],
    perspective: [
        `
            <h2>Perspectives et facteurs aggravants</h2>
            <p>Les menaces principales qui pèsent actuellement sur la biodiversité sont :</p>
            <ul>
                <li>La fragmentation</li>
                <li>L’exploitation excessive des ressources naturelles</li>
                <li>La pollution</li>
                <li>Les espèces exotiques envahissantes (EEE)</li>
            </ul>
            <p><span class="emphase">Les changements climatiques</span> quant à eux modifient progressivement le type d’espèces présentes sur nos régions, ce qui n’implique pas nécessairement de perte en biodiversité, mais une modification de la composition de celle-ci. outefois les changements prévus sont trop rapides par rapport à la capacité de déplacement des espèces, notamment des espèces végétales dont les populations se déplacent via la dissémination de leurs graines et la croissance des nouvelles générations. De plus le changement climatique vient renforcer l’impact de chacune des autres menaces précitées.<p>
        `,
    ],
    impact: [
        `
            <h2>Impact socio-économique</h2>
            <p>Les premiers individus exposés par la perte de biodiversité, ce sont toutes les populations d’espèces autres qu’humaines. Pour eux perte de biodiversité signifie chaque jour un nombre de morts qui, s’il s’appliquait à nous les humains, serait qualifié de génocide. Depuis cette perspective, toute estimation de coût est impossible. Lorsqu’une espèce disparait, il est impossible de la faire revenir.</p>
            <p>Une évaluation de l'impact économique que donneraient les pertes de fourniture écoystémiques à l'horizon 2050. [<a href="https://climat.be/doc/seclim-be-2020-finalreport.pdf"><span class="emphase">Évaluation de l'impact socio-économique du changement climatique en Belgique</span></a>]. Attention que ces estimations sont basées sur des méthodes diverses et ne peuvent donc pas être simplement sommées. Par ailleurs cela ne représente que la fraction des services écosystémiques que ces méthodes ont pu chiffrer et n’est en aucun cas exhaustif.</p>
            <table>
                <tr>
                    <th></th>
                    <th>Estimation pour <span class="municipality-name"></span> (millions euro/an valeur 2019)</th>
                </tr>
                <tr>
                    <td>Production de bois</td>
                    <td style="text-align: center;"><span class="woodProduction"></span></td>
                </tr>
                <tr>
                    <td>Stockage de carbone</td>
                    <td style="text-align: center;"><span class="carbonStorage"></span></td>
                </tr>
                <tr>
                    <td>Filtration de l’air, loisirs et santé</td>
                    <td style="text-align: center;"><span class="airFiltrationLeisureHealth"></span></td>
                </tr>
                <tr>
                    <td>Pollinisation</td>
                    <td style="text-align: center;"><span class="agriculturalArea"></span></td>
                </tr>
                <tr>
                    <td>Eau douce</td>
                    <td style="text-align: center;"><span class="surfaceWaterArea"></span></td>
                </tr>
            </table>
        `
    ],
    mesure: {
        intro: `
            <h2>Les mesures d'adaptation</h2>
            <p>Il est possible de prendre des mesures pour limiter l’exposition et/ou la sensibilité au risque de perte de biodiversité. Pour vraiment enrayer le déclin un changement profond dans la relation que nous avons avec les autres espèces de la biosphère est nécessaire. A une échelle moins ambitieuse mais qui s’adapte mieux aux outils de notre société actuelle, nous suggérons de travailler sur le réseau écologique du territoire. Pour mettre en place le réseau écologique, différents leviers d’action sont possibles que nous évoquons dans la section <a href="#misc"><span class="emphase">transversale</span></a></p>
        `,
        menu: [
            "Réseau Ecologique",
        ],
        texts: [
            `
                <p>Etablir un réseau écologique permet de définir les priorités en matière de protection, gestion et restauration des milieux naturels. Cela ne doit pas être vu comme le seul outil de protection de la nature car en dehors des zones prioritaires des mesures de protection de la biodiversité peuvent être menées et avoir beaucoup de pertinence. Un réseau écologique permet. Toutefois d’orienter les choix d’allocation des ressources pour maximiser les effets bénéfiques pour la biodiversité et de mieux comprendre les enjeux à l’échelle d’un territoire.</p>
                <p>Au niveau communal en Belgique les réseaux écologiques sont généralement établis dans le cadre d’un Plan Communal de Développement de la Nature (PCDN). Ils peuvent ensuite être intégrés ou non aux outils d’aménagement du territoire pour leur donner un caractère contraignant.</p>
                <p>Dans le nouveau Schéma de Développement Territorial de la Wallonie, des liaisons écologiques ont été définies et la déclaration de politique régionale entend concrétiser leur application par des outils juridiques et méthodologiques.</p>
                <p>Le réseau écologique doit être identifié de manière à permettre la distinction de différentes trames (zones cœurs et zones de liaison) correspondant à différents milieux (zones boisées, zones humides, zones bocagères, …). Ce afin de faciliter le choix des espèces représentatives mais également pour avoir une meilleure vue des mesures de gestion/restauration qui seront à opérer.</p>
                <p>Idéalement ce réseau doit s’inscrire dans une cohérence avec la vision régionale et les réseaux déjà établis dans les communes limitrophes.</p>
                <p><a href="https://event.icedd.be/AWAC/cartes.html" target="_blank"><span class="emphase">Sur les cartographies disponibles sur ce portail</span></a>, est identifié la qualité de la trame forestière sur base de la situation en 2014. Ceci ne remplace toutefois pas une cartographie de réseau écologique menée de manière complète, notamment dans le cadre d’un PCDN.</p>
                <p>Une fois le réseau écologique identifié, il s’agit de mettre en œuvre les mesures de protection, restauration et de gestion qui permettront de préserver et améliorer la qualité du réseau.</p>
                <p>La manière de mettre en œuvre dépendra de 3 facteurs :</p>
                <ul>
                    <li>Qui est propriétaire de la parcelle concernée. On distinguera ici notamment les parcelles de la ville, les autres services publics et les propriétaires privés. En fonction du propriétaire et des mesures envisagées la Ville aura différents leviers d’action sur ces acteurs (<a href="https://www.uvcw.be/focus/environnement/art-2371"><span class="emphase">fiche de suggestions de l’UVCW</span></a>).</li>
                    <li>Dans quel type de zone on se situe. Par exemple dans une zone centrale on visera avant tout à donner un statut de protection et ensuite à élaborer un plan de gestion détaillé. Dans des zones de liaison il sera souvent difficile de donner un statut légal et, la zone étant souvent fort étendue et hétérogène, on se concentrera sur la sensibilisation à des mesures standards de gestion qui sont favorables.</li>
                    <li>Quelle est la trame (milieu forestier, prairie, milieu sec ou humide, …) dans laquelle on se situe, ce qui influencera les habitats qu’on visera à créer.</li>
                </ul>
                <p>Afin d’élaborer une stratégie efficace de mise en œuvre il s’agira dans un premier temps de coordonner les plus grands acteurs autour de la table (propriétaires des parcelles importantes du réseau, services publics, gestionnaires, associations de protection de la nature).</p>
            `,
        ]
    }
}