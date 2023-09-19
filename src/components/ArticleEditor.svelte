<script>
	import { upsertArticle } from '../service/upsertArticle';
	import {goto} from "$app/navigation"

	/**
	 * @type {string}
	 */
	export let title = '';
	/**
	 * @type {string}
	 */
	export let description = '';
	/**
	 * @type {string}
	 */
	export let markdown = '';
	/**
	 * @type {string | undefined}
	 */
	export let _id = undefined;
</script>

<form
	on:submit={async () => {
		console.log({ title, description, markdown });
		const upsertResponse = await upsertArticle(
			{
				title,
				description,
				markdown
			},
			_id
		);
		console.log({upsertResponse})
		goto(`/article/${upsertResponse.article.slug}`)

	}}
>
	<input type="text" placeholder="Give the article a title" id="title-input" bind:value={title} />
	<!-- <input type="text" placeholder="Write a summary of your article" bind:value={description} /> -->
	<textarea bind:value={markdown} placeholder="Write about anything!" />
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
		font-size: 24px;
	}

	textarea {
		min-height: 70vh;
	}
</style>
