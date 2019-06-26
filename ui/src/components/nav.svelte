<script>
	export let segment;
</script>

<nav>
	<img alt="woodflow" src="img/icon.png">
	<a class='{segment === undefined ? "selected" : ""}' href='.'>мастерская</a>
	<a class='{segment === "about" ? "selected" : ""}' href='about'>лодки и каноэ</a>
	<a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>
