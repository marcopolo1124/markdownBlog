<script>
	// @ts-ignore
	import ServerIcon from '~icons/solar/server-broken';
	// @ts-ignore
	import BrowserIcon from '~icons/icon-park-twotone/browser';
	// @ts-ignore
	import CloudIcon from '~icons/iconamoon/cloud-light';
	// @ts-ignore
	import DevOpsIcon from '~icons/solar/infinity-bold-duotone';
	// @ts-ignore
	import EmailIcon from '~icons/iconamoon/email';
	// @ts-ignore
	import GitHubIcon from '~icons/mdi/github';
	import Timeline from '../../components/Timeline.svelte';

	let iconSize = '85px';
</script>

<div id="about-me-container">
	<section id="introduction" class="section">
		<div class="info">
			<h1>Hello!</h1>
			<h3>I am Marco, a software developer</h3>
			<p>I want to learn more, code more and build interesting things</p>
		</div>
		<div class="background" />
	</section>

	<section id="skills" class="section">
		<h2>I can...</h2>
		<div class="skill container">
			<div class="skill card">
				<ServerIcon font-size={iconSize} />
				<p class="skill-description">Build a reliable backend with Node.js and Python Flask</p>
			</div>
			<div class="skill card">
				<BrowserIcon font-size={iconSize} />
				<p class="skill-description">
					Create a stunning frontend with Svelte, React or just plain Javascript
				</p>
			</div>
			<div class="skill card">
				<DevOpsIcon font-size={iconSize} />
				<p class="skill-description">
					Create efficient code pipelines with AWS Codepipeline, Coderepo and Codebuild
				</p>
			</div>
			<div class="skill card">
				<CloudIcon font-size={iconSize} />
				<p class="skill-description">Deploy scalable cloud infrastructure with AWS</p>
			</div>
		</div>
	</section>
	<section class="section" id="timeline">
		<Timeline />
	</section>

	<section id="contact-me" class="section">
		<h2>Contact me on...</h2>
		<div class="contacts container">
			<div class="contacts card">
				<EmailIcon font-size={iconSize} />
				<p class="skill-description">Email: marcotcl24@gmail.com</p>
			</div>
			<div class="contacts card">
				<GitHubIcon font-size={iconSize} />
				<p class="skill-description">GitHub Repo: https://github.com/marcopolo1124</p>
			</div>
		</div>
	</section>
</div>

<style>
	h1 {
		font-size: 100px;
	}

	.skill.container {
		display: flex;
		justify-content: space-between;
	}
	#about-me-container {
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
		overflow-x: hidden;
		height: calc(100vh - 53px);
		width: 100vw;
	}
	section {
		scroll-snap-align: start;
		height: 100vh;
	}

	#introduction {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.info {
		/* border: 1px solid blue; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 50px;
		margin: 0 50px;
		border-right: 8px solid #9203d3;
		/* height: 70px; */
	}
	#skills,
	#contact-me {
		/* background-color: #9203d3; */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h2 {
		/* color: white; */
		font-weight: 700;
		font-size: 38px;
		margin: 0 20px;
		padding: 0 10px;
		/* text-align: center; */
	}

	#timeline {
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		/* padding: 5px; */
		/* padding: 100px 0; */
	}

	.background {
		width: 50vw;
		height: 100vh;
		background: linear-gradient(0.125turn, #9203d3, #02ccd1);
	}

	.card {
		border-radius: 10px;
		width: 20vw;
		margin: 10px;
		text-align: center;
		height: 20vh;
		padding: 20px 10px;
		box-shadow: 10px 5px gray;
		min-width: 150px;
	}

	.skill.card {
		background-color: #9203d3;
		color: white;
	}

	.card > p {
		margin: 5px;
		overflow-wrap: break-word;
	}

	.card.contacts {
		width: 25vw;
	}

	.container { 
		display: flex;
		padding: 10px;
		margin: 10px;
	}

	p {
		font-size: 18px;
	}

	h3 {
		font-size: 20px;
	}

	@media only screen and (max-width: 850px) {
	p {
		font-size: 10px;
	}
	h2 {
		font-size: 20px;
	}
	.container {
		flex-wrap: wrap;
	}
}

</style>
