<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`goods.json?category=${params.category}`);
		const data = await res.json();

		if (res.status === 200) {
			return { category: params.category, goods: data, boat: data[0]};
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let category = '';
	export let goods = [];
	export let boat = {};
</script>

<style>
.goods-nav {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 42px 230px;
	box-sizing: border-box;
	z-index: 6;
}

.goods-nav a {
	text-decoration: none;
  text-transform: uppercase;
  padding: 0 11px;
}

.goods-nav a.active {
	text-decoration: underline;
}

.details {
	padding: 120px 72px;
}

.details h1 {
	font-weight: 700;
  font-size: 64px;
}

.details .spec th {
	font-weight: normal;
	padding: 0 23px 4px 0;
	font-size: 14px;
}

.details .spec th.weight {
	padding-right: 33px;
}

.details .spec td {
	font-weight: bold;
	font-size: 19px;
}

.details .price {
	margin-top: 210px;
	font-size: 45px;
	font-weight: bold;
}

.slider {
	position: absolute;
	top: 0;
	right: 0;
	width: 72%;
}

.slider img {
	width: 100%;
}
</style>

<svelte:head>
	<title>Boats | {boat.title}</title>
</svelte:head>

<nav class="goods-nav">
	{#each goods as good}
		<a href='/goods/{category}#{good.slug}'
			class="{boat.slug == good.slug ? 'active': ''}"
			on:click="{() => boat = good}">
			{good.title}
		</a>
	{/each}
</nav>

<section class="details">

	<h1>{boat.title}</h1>

	<table class="spec">
		<thead>
			<tr>
				<th>Длина:</th>
				<th>Ширина:</th>
				<th>Высота:</th>
				<th>Толщина:</th>
				<th class="weight">Вес:</th>
				<th>Мест:</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{boat.length}м</td>
				<td>{boat.width}м</td>
				<td>{boat.height}м</td>
				<td>{boat.thickness}мм</td>
				<td>{boat.weight}кг</td>
				<td>{boat.capacity}</td>
			</tr>
		</tbody>
	</table>
	<p class="description"></p>

	<h2 class="price">{boat.price} ₽</h2>

	<a href="#pop" class="link-button big">Заказать</a>
</section>

<figure class="slider">
	<img alt={boat.title} src={boat.image}>
	<figcaption>
		<span>o</span>
	</figcaption>
</figure>
