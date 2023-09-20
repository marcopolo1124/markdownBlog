<div class=timeline-container>
	<div class="timeline">
		<h2 class="title">A summary of my work experience</h2>
		<div class="container right">
			<div class="content">
				<div>
					<h3>2018 September - 2021 June</h3>
					<h4>University of Bath | Mathematics and Physics | 1st hons</h4>
				</div>
				<div>
					<img src="uniOfBathLogo.png" alt="logo of the university of bath" width="110px" />
				</div>
			</div>
		</div>
		<div class="container right">
			<div class="content">
				<div>
					<h3>2021 October - 2023 March</h3>
					<h4>3ADesign | Backend Engineer</h4>
					<p>Created https interfaces to interact with test equipment</p>
				</div>
				<div>
					<img src="3ADesignLogo.png" alt="logo of the 3Adesign" width="110px" />
				</div>
			</div>
		</div>
		<div class="container right">
			<div class="content">
				<div>
					<h3>2023 March - 2023 August</h3>
					<h4>Aurora Energy Research | Full Stack Engineer</h4>
					<p>Created data pipelines and internal tools in aid for modelling</p>
				</div>
				<div>
					<img
						src="auroraEnergyResearchLogo.png"
						alt="logo of the Aurora Energy Research"
						width="110px"
					/>
				</div>
			</div>
		</div>
		<div class="container right">
			<div class="content">
				<h3>Present - ???</h3>
			</div>
		</div>
	</div>
</div>


<style>
	/* The actual timeline (the vertical ruler) */
	.timeline-container {
		height: 100vh;
		overflow: scroll;
	}
	.timeline-container::-webkit-scrollbar{
		display: none;
	}

	.title {
		position: sticky;
		color: white;
		top: 40%;
		font-size: 55px;
		margin-left: 5vw;
		border-radius: 5px;
		padding: 20px 5vw;
		width: 30vw;
	}

	.timeline {
		position: relative;
		width: 100vw;
		background-color: #5a51d2;
		min-width: 500px;
		padding-bottom: 100px;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
		content: '';
		position: absolute;
		width: 13px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	/* Container around content */
	.container {
		padding: 15px 50px;
		position: relative;
		background-color: inherit;
		width: 40vw;
		min-width: 250px;
	}

	/* The circles on the timeline */
	.container::after {
		content: '';
		position: absolute;
		width: 26px;
		height: 26px;
		right: -17px;
		background-color: #5a51d2;
		border: 10px solid white;
		top: 28px;
		border-radius: 50%;
		z-index: 1;
	}
	/* Place the container to the right */
	.right {
		left: 50%;
	}

	/* Add arrows to the right container (pointing left) */
	.right::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 35px;
		width: 0;
		z-index: 1;
		left: 37px;
		border: medium solid white;
		border-width: 13px 13px 13px 0;
		border-color: transparent white transparent transparent;
	}

	/* Fix the circle for containers on the right side */
	.right::after {
		left: -19px;
	}

	h3 {
		font-size: 35px;
		padding: 8px 15px;
	}

	h4 {
		font-size: 24px;
		color: grey;
		padding: 8px 15px;
	}

	p {
		font-size: 20px;
		padding: 8px 15px;
	}

	/* The actual content */
	.content {
		padding: 20px 30px;
		background-color: white;
		position: relative;
		border-radius: 6px;
		box-shadow: 10px 10px gray;
		display: flex;
		align-items: center;
	}

	@media only screen and (max-width: 750px) {
		.title {
			font-size: 40px;
		}
		h3 {
			font-size: 26px;
		}

		h4 {
			font-size: 20px;
		}

		p {
			font-size: 16px;
		}

		img {
			width: 45px;
		}
		
		.container {
			width: 35vw
		}

		.container::after {
			content: '';
			/* position: absolute; */
			width: 15px;
			height: 15px;
			/* right: -17px; */
			background-color: #5a51d2;
			border: 6px solid white;
			/* top: 15px; */
			border-radius: 50%;
			z-index: 1;
		}
		.right::after {
			left: -14px;
		}
	}
</style>
