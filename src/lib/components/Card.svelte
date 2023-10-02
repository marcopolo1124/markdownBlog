<script>
  	import MarkdownContainer from './MarkdownContainer.svelte';
	export let article;
	/**
	 * @type {any}
	 */
	// export let articles;
	let { title, createdAt, slug, markdown } = article;
	let dateString = new Date(createdAt).toLocaleDateString()
	// let articleId = _id;
</script>

<div class="card">
	<div class="info-container">
		<a href={`/article/${slug}`}><h2 class="card-title">{title}</h2></a>
		
		<p class="muted">{dateString}</p>
		<MarkdownContainer source={markdown}/>
	</div>
	<slot/>
</div>

<style>
	h2 {
		font-size: 25px;
	}

	.card {
		display: flex;
		justify-content: space-between;
		height: 150px;
		overflow: hidden;
		text-overflow: clip;
		border-radius: 5px;
	}

	.muted {
		font-size: 1rem;
	}

	.card a {
		text-decoration: none;
		width: 100%;
	}

	.card a:hover{
		text-decoration: underline
	}

	.info-container {
		width: 100%;
		-webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
		max-height: 150px;
	}
	.card {
		/* border: 1px solid black; */
		margin: 10px 20px;
	}
</style>
