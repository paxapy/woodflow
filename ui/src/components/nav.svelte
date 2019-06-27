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
		z-index: 5;
	}

	.nav img {
		padding: 2em 1.3em 7em;
	}

	.nav a {
		writing-mode: tb-rl;
	  transform: rotate(180deg);
	  margin: 42px auto;
	  display: block
	}
</style>

<nav class="nav">
	<img alt="woodflow" src="img/icon.png">
	<a class='{segment === undefined ? "selected" : ""}' href='.'>мастерская</a>
	<a class='{segment === "about" ? "selected" : ""}' href='about'>лодки и каноэ</a>
	<a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>
