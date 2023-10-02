<script>
	import ArticleEditor from '$lib/components/ArticleEditor.svelte';
	export let data;

	$: article = data.article
	let failed = false;
</script>

{#if failed}
	<p>article not found</p>
{:else}
	<ArticleEditor title={article.title} markdown={article.markdown}/>
{/if}
