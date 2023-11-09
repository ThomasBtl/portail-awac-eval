interface INavSection {
    /** Le titre de la sous-section.*/
    title: string;
    /** Le contenu de la sous-section.*/
    content: string;
}

interface INavContent {
    /** Le titre de la carte */
    title: string;
    /** 
     * Tableau contenant les sous-sections de la carte
     * Ce tableau peut contenir des INavSection, une chaine de caractère [NAV] qui correspond au menu de naviguation ou d'une chaine de caractère [CONTINUE] qui correspond à une flèche qui emène l'utilisateur vers la carte suivante.
     */
    sections : (INavSection | "[NAV]" | "[CONTINUE]")[]
}

export const content: INavContent = {
    title : "Vulnérabilité du territoire",
    sections: [
        {
            title: "Naviguer au travers d’une problèmatique !",
            content: 
            `
                <p>Sur ce portail, trois sections vous sont proposées couvrant chacune un type de risque environnemental majeur en Wallonie ou un secteur fortement impacté, basé sur l’approche de la démarche « Adapte ta commune ». Dans chacune de ces sections vous retrouverez : </p>
                <ul>
                    <li>Une <span class="emphase">définition du risque/secteur,</li>
                    <li>son <span class="emphase">historique et</span> son évolution dans le <span class="emphase">futur</span>,</li>
                    <li>une analyse quantitative et qualitative de <span class="emphase">l’impact socio-économique</span></li>
                    <li>ainsi que les mesures d’adaptation possible.</li>
                </ul>
                <p></p>
            ` 
        },
        "[NAV]",
        {
            title : "Ou laissez-vous guider !",
            content: ""
        },
        "[CONTINUE]"
    ]
}

