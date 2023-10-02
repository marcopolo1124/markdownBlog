<script>
	import Card from '../lib/components/Card.svelte';
	export let data;
	$: articles = data.articles
	$: pageNum = data.pageNum
	$: perPage = data.perPage
	$: pageCount = data.pageCount

	let failed = false;
	let toggleDeleteArticle = false;

	$: console.log(articles)

</script>

<div class=body>
	{#if failed}
		<p class=msg>failed to load, please try again later</p>
	{:else if articles.length === 0}
		<p class=msg>Empty! please write more articles</p>
	{:else}
		<div class=container>
			<div class=editBar>
				<button on:click={() => {toggleDeleteArticle = !toggleDeleteArticle}}>Toggle delete</button>
			</div>
			{#each articles as article (article.slug)}
				<Card {article}/>
			{/each}
		</div>
	{/if}
</div>

<div class=page-selector-container>
	<div class=page-selector>
		{#each Array(pageCount) as _, idx}
			<a
				href={`/?page=${idx + 1}&perPage=${perPage}`}
				class={`page-link ${idx + 1 === pageNum? 'current-page': ''}` }
				on:click={() => {pageNum = idx + 1}}
			>
				{idx + 1}
			</a>
		{/each}
	</div>
</div>

<style>
	.body {
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 200px;

	}

	.container {
		min-height: 80vh;
		width: 100%
	}
	.editBar {
		display: flex;
		flex-direction: row-reverse;
		padding: 5px 20px;
		position: sticky;
		top: 0;
		/* background-color: white; */
		z-index: 2

	}

	.msg {
		text-align: center;
	}

	.page-selector-container {
		width: 100vw;
		display: flex;
		justify-content: center;
	}
	a.page-link {
		margin: 2px;
		text-decoration: none;
		color: black;
		font-size: 20px;
	}

	a.page-link:hover {
		color: grey
	}

	a.page-link.current-page {
		color: blue
	}
</style>