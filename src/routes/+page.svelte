<script>
	import { fetchArticles } from '../service/getArticles';
	import Card from '../components/Card.svelte';
	import PageSelector from '../components/PageSelector.svelte';
  import DeleteButton from '../components/DeleteButton.svelte';
	let page = 1;
	let perPage = 5;
	let pageCount = 0;
	/**
	 * @type {any[]}
	 */
	let articles = [];
	let failed = false;
	let loading = true;
	let toggleDeleteArticle = false;

	/**
	 * @param {number} page
	 * @param {number} perPage
	 */
	async function fetchAndUpdateArticles(page, perPage) {
		loading = true;
		try {
			const articlesObj = await fetchArticles(page, perPage);
			articles = articlesObj.articles;
			pageCount = articlesObj.pageCount;
			loading = false;
			failed = false;
		} catch (e) {
			loading = false;
			failed = true;
			console.log(e);
			articles = [];
		}
	}

	/**
	 * @param {string} articleId
	 */
	$: fetchAndUpdateArticles(page, perPage);
	$: console.log({ failed, articles });
</script>

<div class=body>
	{#if failed}
		<p class=msg>failed to load, please try again later</p>
	{:else if loading}
		<p class=msg>loading...</p>
	{:else if articles.length === 0}
		<p class=msg>Empty! please write more articles</p>
	{:else}
		
		<div class=container>
			<div class=editBar>
				<button on:click={() => {toggleDeleteArticle = !toggleDeleteArticle}}>Toggle delete</button>
			</div>
			{#each articles as article (article.slug)}
				<Card {article}>
					{#if toggleDeleteArticle}
						<DeleteButton articleId={article._id} bind:articles bind:toggleDeleteArticle/>
					{/if}
				</Card>
			{/each}
		</div>

	{/if}
</div>


{#if pageCount && page}
	<PageSelector bind:page bind:pageCount />
{/if}

<style>
	.body {
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;

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


</style>