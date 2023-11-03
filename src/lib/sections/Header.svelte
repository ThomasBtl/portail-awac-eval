<!-- 
    @component

    This component represents the header section of the portal, where you can find a navigation to the most important points related to the portal itself.
 -->
<script lang=ts>
    import { content } from '$lib/assests/content/header';

    /**Main wrapper of the section*/
    let container: HTMLDivElement;
    /**Index of the current selected menu*/
    let menuActive: number = 0;

    /**
     * Handler that change the current active menu.
     * Called from the click of a menu button
     * 
     * @param id {number} - The id of the new active menu.
     * @modifies {menuActive}
     * */
    function onMenuClick(id: number) {
        if (menuActive !== id) {
            menuActive = id
        }
    }
</script>

<section>
    <div class="home-header" bind:this={container}>
        <div class="header-content">
            <div class="header-logo">
                <img src="images/icedd-logo.png" alt="Logo de l'ICEDD"/>
            </div>
            <div class="header-intro">
                <div class="card card-header">
                    <div class="title">
                        {@html content.title}
                    </div>
                    <div class="header-menu">
                        <div class="header-menu-selection">
                            {#each content.menu as menu, i}
                                <button class:active="{menuActive === i}" type="button" on:click={() => onMenuClick(i)}>
                                    {@html menu.icon}
                                    <p>{@html menu.title}</p>
                                </button>
                            {/each}
                        </div>
                        <div class="header-menu-content">
                            <p>{@html content.menu[menuActive].text}</p>
                            <div>
                                <button 
                                    type="button"
                                    on:click={() => content.menu[menuActive].buttonLink(container)}
                                >{@html content.menu[menuActive].buttonText}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-right">
            <p>défilez pour commencer la visualisation narrative</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 1C8.13263 1 8.25981 1.05268 8.35357 1.14645C8.44734 1.24021 8.50002 1.36739 8.50002 1.5V13.293L11.646 10.146C11.7399 10.0521 11.8672 9.99937 12 9.99937C12.1328 9.99937 12.2601 10.0521 12.354 10.146C12.4479 10.2399 12.5007 10.3672 12.5007 10.5C12.5007 10.6328 12.4479 10.7601 12.354 10.854L8.35402 14.854C8.30758 14.9006 8.2524 14.9375 8.19165 14.9627C8.13091 14.9879 8.06579 15.0009 8.00002 15.0009C7.93425 15.0009 7.86913 14.9879 7.80839 14.9627C7.74764 14.9375 7.69247 14.9006 7.64602 14.854L3.64602 10.854C3.55213 10.7601 3.49939 10.6328 3.49939 10.5C3.49939 10.3672 3.55213 10.2399 3.64602 10.146C3.73991 10.0521 3.86725 9.99937 4.00002 9.99937C4.1328 9.99937 4.26013 10.0521 4.35402 10.146L7.50002 13.293V1.5C7.50002 1.36739 7.5527 1.24021 7.64647 1.14645C7.74024 1.05268 7.86741 1 8.00002 1Z" fill="white"/>
            </svg>    
        </div>
    </div>
</section>

<style>
    section {
        background: var(--primaryBackground);
        padding: 0;
    }

    .home-header {
        position: relative;
        min-height: 100vh;
    }

    .bottom-right {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        padding-bottom: 5px;
        color: #fff;
        height: 40px;
        font-size: 0.8rem;
    }

    .bottom-right svg{
        padding-left: 10px;
        padding-right: 10px;
    }

    .header-content{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 75px;
    }

    .header-content p:first-child {
        height: 210px;
    }

    .header-logo {
        width: 45%;
    }

    .header-logo img {
        width: 100%;
        padding: 50px 20px;
    }

    .header-intro {
        width: 50%;
    }

    .card-header {
        margin: 75px 0;
    }

    .card-header p{
        font-size: 1rem;
    }

    .title {
        width: 90%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-size: 2rem;
    }

    .header-menu-selection {
        display: flex;
        width: 100%;
        padding-top: 50px;
        border-bottom: 2px solid black;
    }

    .header-menu-selection p{
        padding: 0 10px;
    }

    .header-menu-selection button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 70px;
        font-size: 1.1rem;
        border: none;
        background-color: transparent;
        transition: background-color 0.2s ease;
    }

    .header-menu-selection button:nth-child(1) { border-radius: 10px 0 0 0; }

    .header-menu-selection button:nth-child(2) { border-radius: 0 10px 0 0; }

    .active {
        background-color: var(--secondaryBackground) !important;
        transition: background-color 0.2s ease;
    }

    .header-menu-content {
        padding: 50px 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

    .header-menu-content p {
        display: flex;
        width: 50%;
    }

    .header-menu-content div {
        display: flex;
        width: 50%;
    }

    .header-menu-content div button{
        height: 60px;
        padding: 5px 15px;
        background-color: var(--primaryBackgroundNolinear);
        color: #fff;
        border: none;
        border-radius: 5px;
        -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
        font-size: 1rem;
        margin: 0 auto;
    }

    @media (max-width: 1300px) {
        .header-content {
            display: block;
        }

        .header-logo{
            margin: 0 auto;
        }

        .header-logo img {
            width: 100%;
            padding: 0;
        }

        .header-intro {
            width: 90%;
            margin: 0 auto;
        }

    }

    @media (max-width: 1024px) {
        .header-content {
            display: block;
        }

        .header-logo{
            width: 100%;
        }

        .header-logo img {
            width: 100%;
            padding: 0;
        }

        .header-intro {
            width: 100%;
        }

        .header-menu-content {
            padding: 0;
            height: auto;
            justify-content: center;
        }

        .header-menu-content p {
            height: auto;
            width: 80%;
        }

        .title {
            width: 100%;
        }
    }
</style>