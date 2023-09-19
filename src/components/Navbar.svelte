<script>
    import { page } from '$app/stores'
    /**
   * @type {boolean}
   */
    let atHome;
    /**
   * @type {boolean}
   */
    let atAboutMe;
    /**
   * @type {boolean}
   */
    let atCreate;

    $: atHome = $page.url.pathname === "/"
    $: atAboutMe = $page.url.pathname === "/about-me"

    const isActive = (/** @type {boolean} */ atWhere) => {
        return atWhere? "active": ""
    }
</script>

<nav>
    <div class=left>
        <a href="/" class="logo">TravelNotes</a>
        <a href="/" id="home-button" class="navbutton {isActive(atHome)}">Home</a>
        <a href="/about-me" id="about-me-button" class="navbutton {isActive(atAboutMe)}">About Me</a>
        <a href="/article/create" class="link-button">Create</a>
        
    </div>

</nav>

<style>
    nav {
        width: 100%;
        display: flex;
        /* justify-content: ; */
        padding: 5px;
        z-index: 2;
        background-color: white;
    }

    .left {
        display: flex;
        /* padding: 5px 0; */
    }

    .navbutton:hover {
        border-bottom: 2px solid gray;
    }

    a {
        padding: 5px;
        text-decoration: none;
        color: black;
        margin: 5px;
    }

    .logo {
        text-decoration: none;
        color: black;
    }

    .active {
        border-bottom: 2px solid blue;
    }

    .link-button {
        background-color: blue;
        color: white;
        border-radius: 3px;
        text-align: center;
        height: 15px;
    }

    .link-button:hover {
        background-color: purple;
    }

</style>