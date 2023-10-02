<script>

    /**
	 * @type {string}
	 */
    export let slug
    /**
   * @type {any[]}
   */
     export let articles = []

</script>

<form method="POST" action="?/delete">
    <input type="hidden" name="slug" value={slug}/>
    <button/>
</form>

<style>
    button {
        border: none;
        background: url(./remove.svg) no-repeat 50% 50%;
        background-size: 1.5rem 1.5rem;
        cursor: pointer;
        height: 100%;
        aspect-ratio: 1;
        opacity: 0.5;
        transition: opacity 0.2s;
    }
</style>
