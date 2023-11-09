export const content: {title: string; menu: {icon: string, title: string; text: string; buttonText: string, buttonLink: (container?: HTMLDivElement) => void}[]} = {
    title : "Découvrez  les  vulnérabilités  du  territoire  en  Wallonie  !",
    menu : [
        {
            icon: `
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 35C13.125 35 26.25 22.5619 26.25 13.125C26.25 9.64403 24.8672 6.30564 22.4058 3.84422C19.9444 1.38281 16.606 0 13.125 0C9.64403 0 6.30564 1.38281 3.84422 3.84422C1.38281 6.30564 5.18704e-08 9.64403 0 13.125C0 22.5619 13.125 35 13.125 35ZM13.125 19.6875C11.3845 19.6875 9.71532 18.9961 8.48461 17.7654C7.2539 16.5347 6.5625 14.8655 6.5625 13.125C6.5625 11.3845 7.2539 9.71532 8.48461 8.48461C9.71532 7.2539 11.3845 6.5625 13.125 6.5625C14.8655 6.5625 16.5347 7.2539 17.7654 8.48461C18.9961 9.71532 19.6875 11.3845 19.6875 13.125C19.6875 14.8655 18.9961 16.5347 17.7654 17.7654C16.5347 18.9961 14.8655 19.6875 13.125 19.6875Z" fill="black"/>
                </svg>   
            `,
            title: "Via nos carte",
            text: "Pour les risques ayant une dimension spatiale importante, 10 cartes réalisées en 2017 par l’ICEDD pour l’AWAC dans le cadre de la démarche « Adapte ta Commune » sont disponibles en téléchargement. Elles permettent de mieux appréhender certaines vulnérabilités et planifier des mesures d’adaptation.",
            buttonText: "Accéder aux cartes",
            buttonLink: () => window.open('https://event.icedd.be/AWAC/cartes.html', '_blank')
        },
        {
            icon: `
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_245_25)">
                        <path d="M17.5 3.90031C15.3453 2.0475 12.2216 1.77187 9.37781 2.05625C6.06594 2.39094 2.72344 3.52625 0.640938 4.47344C0.449857 4.56034 0.287821 4.7004 0.174171 4.87688C0.0605209 5.05337 5.8125e-05 5.25883 0 5.46875L0 29.5312C5.06669e-05 29.7143 0.0460187 29.8943 0.133694 30.055C0.221369 30.2156 0.347948 30.3517 0.501836 30.4507C0.655725 30.5497 0.832004 30.6086 1.01453 30.6218C1.19705 30.6351 1.37998 30.6023 1.54656 30.5266C3.47594 29.6516 6.58438 28.5994 9.59656 28.2953C12.6788 27.9847 15.2622 28.4856 16.6469 30.2137C16.7494 30.3415 16.8792 30.4446 17.0269 30.5154C17.1745 30.5863 17.3362 30.6231 17.5 30.6231C17.6638 30.6231 17.8255 30.5863 17.9731 30.5154C18.1208 30.4446 18.2506 30.3415 18.3531 30.2137C19.7378 28.4856 22.3213 27.9847 25.4013 28.2953C28.4156 28.5994 31.5263 29.6516 33.4534 30.5266C33.62 30.6023 33.803 30.6351 33.9855 30.6218C34.168 30.6086 34.3443 30.5497 34.4982 30.4507C34.6521 30.3517 34.7786 30.2156 34.8663 30.055C34.954 29.8943 35 29.7143 35 29.5312V5.46875C34.9999 5.25883 34.9395 5.05337 34.8258 4.87688C34.7122 4.7004 34.5501 4.56034 34.3591 4.47344C32.2766 3.52625 28.9341 2.39094 25.6222 2.05625C22.7784 1.76969 19.6547 2.0475 17.5 3.90031Z" fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_245_25">
                            <rect width="35" height="35" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            `,
            title: "Via notre visualisation narrative",
            text: "Découvrez trois sections permetant de mieux comprendre les types de risque environnementaux majeurs en Wallonie et les secteurs impactés. Dans chacune de ces sections vous retrouverez une définition du risque/secteur, son historique et son évolution dans le futur, une analyse quantitative et qualitative de l’impact socio-économique ainsi que les mesures d’adaptation possible.",
            buttonText: "Commencer !",
            buttonLink: (container) => window.scrollTo({top: container.getBoundingClientRect().height, behavior: 'smooth'})
        },
    ]
}