<script>
	import { categories, currentCategory } from '../store/goods.js';
	export let segment;
</script>


<nav class="nav">
	<a href="/" class="home">
		<img alt="woodflow" src="img/icon.png">
	</a>
	{#if !segment || !segment.includes('goods')}
		<a href="/goods/{$currentCategory}">⟱</a>
		<a href="/#shipyard">мастерская</a>
		<a href="/#goods">лодки и каноэ</a>
	{:else}
		<a href="/">⟰</a>
		{#each $categories as category}
			<a href="/goods/{category.slug}" class="{category.slug === $currentCategory ? 'active' : ''}">
				{category.title}
			</a>
		{/each}
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
		white-space: nowrap;
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
		position: absolute;
    bottom: 13%;
	}

	.nav:hover .contact {
		display: flex;
	}

	.nav .contact a {
		padding: 7px 0;
		transform: rotate(-90deg);
	}
</style>
