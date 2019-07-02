<script>
	export let segment;
</script>

<style>
	.nav {
		position: fixed;
		background: black;
	  color: white;
		width: 72px;
		height: 100vh;
		display: flex;
		flex-flow: column;
		align-items: center;
		padding: 33px 0;
		z-index: 5;
	}

	.nav a {
		writing-mode: tb-rl;
	  transform: rotate(180deg);
	  padding: 42px 0;
		text-decoration: none;
	}

	.nav a.home {
		transform: none;
		padding: 0;
	}

	.nav a.active {
		text-decoration: underline;
	}

	.nav .contact {
		display: none;
		flex-flow: column;
	}

	.nav:hover .contact {
		display: flex;
	}

	.nav .contact a {
		padding: 7px 0;
		transform: rotate(-90deg);
	}
</style>

<nav class="nav">
	<a href="/" class="home">
		<img alt="woodflow" src="img/icon.png">
	</a>
	{#if segment === undefined}
		<a href="/goods">⟱</a>
		<a href="/#shipyard">мастерская</a>
		<a href="/#goods">лодки и каноэ</a>
	{/if}
	{#if segment && segment.includes("goods")}
		<a href="/">⟰</a>
		<a href="/goods/boats" class="{segment === "boats" ? "active" : ""}">лодки</a>
		<a href="/goods/canoes" class="{segment === "canoes" ? "active" : ""}">каноэ</a>
	{/if}
	<div class="contact">
		<a href="tel:+79190673506">
			<img alt="call" src="img/icons/call-white.svg">
		</a>
		<a href="mailto:order@woodflow.ru">
			<img alt="email" src="img/icons/mail-white.svg">
		</a>
	</div>
</nav>
