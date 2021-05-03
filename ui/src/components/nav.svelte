<script>
	export let segment;
	export let categories;
	export let current;
</script>

<nav class="nav">
	<a href="/" class="home">
		<img alt="woodflow" src="img/icon.png">
	</a>
	{#if !segment || !segment.includes('goods')}
		<a href="/goods/{current}">⟱</a>
		<a href="/#shipyard">мастерская</a>
		<a href="/#goods">лодки и каноэ</a>
	{:else}
		<a href="/">⟰</a>
		{#each categories as category}
			<a href="/goods/{category.slug}" class="{category.slug === current ? 'active' : ''}">
				{category.title}
			</a>
		{/each}
	{/if}
	<div class="contact">
		<a class="lsf" target="_blank" href="https://vk.com/club63204386">
      vk
    </a>
    <a class="lsf" target="_blank" href="https://www.instagram.com/lodki69/">
      instagram
    </a>
    <a class="lsf" href="mailto:order@woodflow.ru">
      mail
    </a>
    <a class="lsf" href="tel:+79190673506">
      call
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
		font-weight: normal;
		font-size: 19pt;
	}
</style>
