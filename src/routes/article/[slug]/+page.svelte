<script>
  	import MarkdownContainer from '$lib/components/MarkdownContainer.svelte';
  	import { goto } from '$app/navigation';
	export let data;
	$: article = data.article
	let failed = false;

</script>

	
{#if failed}
	<p>failed to load</p>
{:else if !article}
	<p>...loading</p>
{:else}
	<div class=editBar>
		<button on:click={()=>{goto(`/article/${article?.slug}/edit`)}}>Edit</button>
	</div>
	<div class=container>
		<h1>{article.title}</h1>
		<p class="muted">Written on {article.createdAt?.toLocaleDateString()}</p>
		<MarkdownContainer source={article.markdown}/>
	</div>

{/if}


<style>
	.muted {
		font-size: 1.3rem;
		color: grey;
	}
	h1 {
		display: block;
		border: 0;
		padding: 5px;
		margin: 5px;
		width: 100%;
	}

	h1 {
		font-size: 3.994rem;
	}

	.container {
		min-width: 300px;
		width: 60vw;
		margin: 6rem auto 1rem;
	}

	.editBar {
		display: flex;
		flex-direction: row-reverse;
		padding: 5px 20px;
	}

</style>