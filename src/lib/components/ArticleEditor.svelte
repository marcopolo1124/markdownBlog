<script>
	export let title = '';
	export let markdown = '';
</script>

<form method="POST" action="?/upsert">
	<input name="title" type="text" placeholder="Give the article a title" id="title-input" bind:value={title} />
	<!-- <input type="text" placeholder="Write a summary of your article" bind:value={description} /> -->
	<textarea name="markdown" bind:value={markdown} placeholder="Write about anything!" />
	<input type="submit" value="Save article" />
</form>

<style>
	input,
	textarea {
		display: block;
		border: 0;
		padding: 5px;
		margin: 5px;
		width: 100%;
	}

	#title-input {
		font-size: 3.994rem;
	}

	textarea {
		min-height: 70vh;
		font-size: 1.3rem
	}
</style>
