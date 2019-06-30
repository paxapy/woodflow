<script context="module">
	export async function preload({ params, query }) {

		const res = await this.fetch(`goods/boats/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { boat: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let boat;
</script>

<style>
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

.details .order-button {
	color: white;
	background: black;
	padding: 33px 42px;
	text-decoration: none;
	display: inline-block;
	font-size: 20px;
	font-weight: 600;
	border-radius: 10px;
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
	<title>{boat.title}</title>
</svelte:head>

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

	<h2 class="price">{boat.price.toLocaleString()} ₽</h2>

	<a href="#pop" class="order-button">Заказать Лодку</a>
</section>

<figure class="slider">
	<img alt={boat.title} src={boat.image}>
	<figcaption>
		<span>o</span>
	</figcaption>
</figure>
