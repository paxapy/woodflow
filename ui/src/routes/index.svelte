<script>
	let boatUrl = '';
	let canoeUrl = '';
	function setUrl() {
		let boatInd = [14, 16, 17, 18, 19, 20, 21, 22];
		let canoeInd = [10, 12, 13];
		let b = boatInd[Math.floor(Math.random() * boatInd.length)];
		let c = canoeInd[Math.floor(Math.random() * canoeInd.length)];
		boatUrl = `img/goods/boat_${b}sm.jpg`;
		canoeUrl = `img/goods/canoe_${c}sm.jpg`;
		setTimeout(function () { setUrl(); }, 4200);
	}
	setUrl();
</script>

<style>
	.home__top {
		margin: 0;
		height: 100vh;
	}

	.home__top img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.home__top h1 {
		position: absolute;
		top: 142px;
		left: 72px;
		width: 8em;
		font-weight: bold;
		font-size: 64px;
		line-height: 1;
	}

	.home__top figcaption {
		position: absolute;
    top: 300px;
    font-size: 19px;
    left: 72px;
    width: 21em;
	}

	.home__button {
		display: inline-block;
    padding: 7px 33px;
    text-decoration: none;
    border-radius: 5px;
		font-weight: 600;
		font-size: 13px;
	}

	.home__button.black {
		color: white;
		background: black;
	}

	.home__button.white {
		color: black;
		background: white;
	}

	.home__textbox {
		text-align: center;
    padding: 42px;
	}

	.home__textbox h1 {
		font-size: 40px;
    font-weight: 600;
	}

	.home__textbox p {
		font-weight: normal;
		font-size: 13px;
		line-height: 24px;
		padding: 0 33%;
	}

	.home__textbox .home__button {
		margin-top: 11px;
	}

	.home__founder img {
		height: 64vh;
		width: 100%;
		object-fit: cover;
	}

	.home__founder figcaption {
		position: relative;
    text-align: right;
    color: white;
    bottom: 42px;
		right: 21px;
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
	}

	.home__goods {
		display: flex;
	}

	.home__goods figure {
		width: 50%;
		height: 64vh;
	}

	.home__goods figure img {
		width: 100%;
		height: 100%;
    object-fit: cover;
	}

	.home__goods figure figcaption.home__textbox {
		display: none;
		position: relative;
		padding: 0;
		height: 100%;
		bottom: 64.4vh;
		flex-flow: column;
		align-items: center;
    justify-content: center;
		color: white;
	}

	.home__goods figure:hover figcaption.home__textbox {
		display: flex;
		background: rgba(0, 0, 0, 0.7);
	}

	.home__goods figure figcaption.home__textbox p {
		text-align: left;
		padding: 0 11%;
	}

	.home__contacts {
		display: flex;
	}

	.home__contacts div {
		display: flex;
		width: 50%;
		height: 64vh;
		padding: 0;
		flex-flow: column;
		justify-content: center;
	}

	.home__contacts div.map iframe {
		width: 100%;
    height: 100%;
	}

	.home__contacts .home__textbox {
		color: white;
		background: black;
	}

	.home__contacts .home__textbox p {
		padding: 0 21%;
		margin: 0;
		text-align: left;
	}

	.home__contacts .home__textbox p.bold {
		font-weight: bold;
	}

	.home__contacts .home__textbox p.contact {
		margin-top: 42px;
	}

	.home__contacts .home__textbox p.contact a {
		align-items: center;
    display: flex;
		font-weight: bold;
		text-decoration: none;
	}

	.home__contacts .home__textbox p.contact a img {
		padding-right: 11px;
	}
</style>

<svelte:head>
	<title>woodflow insides</title>
</svelte:head>

<figure class="home__top">
	<h1>Деревянные лодки и каноэ</h1>
	<img alt='woodflow' src="img/top.png">
	<figcaption>По технологиям северо-американских кустарных производств</figcaption>
</figure>

<section class="home__textbox" id="shipyard">
	<h1>Мастерская</h1>
	<p>
		Производим и продаем уникальные легкие деревянные лодки и каноэ ручной работы.
		Осуществляем доставку.
		Лодки изнутри и снаружи покрываются стеклотканью на прозрачном эпоксидном составе,
		что делает стеклоткань практически невидимой.
		Древесина совершенно изолирована от воздействия воды.
		Уход и реставрация при небольших повреждениях, царапинах, просты.
	</p>
</section>

<figure class="home__founder">
	<img alt="founder" src="img/blackboat/b30.jpg">
	<figcaption>Наша деревянная лодка</figcaption>
</figure>

<section class="home__textbox" id="goods">
	<h1>Лодки и Каноэ</h1>
	<p>
		Обратите внимание на легкость, прочность и долговечность конструкции.
		Отметим, что на обозримом пространстве никто не делает лодок из дерева
		по современным технологиям, заимствованым по аналогам северо-американских
		кустарных производств.
		Кто видел 3-х местную деревянную лодку, которую можно унести на плече,
		или каноэ, которое можно нести в одной руке?
	</p>
	<a href="/shipyard" class="home__button black">Подробнее</a>
</section>

<section class="home__goods">
	<figure>
		<img alt="boats" src={boatUrl}>
		<figcaption class="home__textbox">
			<h1>Лодки</h1>
			<p>
				Отнюдь не нами выдуманная, современная и десятилетиями отработанная технология
				изготовления деревянных лодок, практика их эксплуатации осуществлена в северной америке,
				по крайней мере, со времен изобретения эпоксидных составов.
			</p>
			<a href="/boats" class="home__button white">Подробнее</a>
		</figcaption>
	</figure>
	<figure>
		<img alt="canoes" src={canoeUrl}>
		<figcaption class="home__textbox">
			<h1>Каноэ</h1>
			<p>
				Были случаи, когда человек приобретал у нас каноэ, чтобы подвесить его над камином.
				Если это лодка не из дерева, то возможно было бы такое?
			</p>
			<a href="/boats/kanoes" class="home__button white">Подробнее</a>
		</figcaption>
	</figure>
</section>

<section class="home__textbox">
	<h1>Дерево и Вода</h1>
	<p>
		Мастерская расположена в Пеновском районе Тверской области (Верхневолжские озера, 40 км до истока Волги).
		Древесина для изготовления лодок производится в непосредственной близости от мастерской,
		заготавливается в лесах нашего района.
	</p>
	<p>
		В ближайших планах расширение модельного ряда,
		изготовление лодок других размеров и применение дорогих пород древесины.
	</p>
</section>

<section class="home__contacts" id="contact">
	<div class="map">
		<iframe title="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
			src="https://www.openstreetmap.org/export/embed.html?bbox=32.593517303466804%2C56.975438847875594%2C32.65136718750001%2C56.99299969366218&amp;layer=mapnik">
		</iframe>
	</div>
	<div class="home__textbox">
		<h1>Контакты</h1>
		<p class="bold">
			Если вы хотите, что бы мы изготовили для вас деревянную лодку или каноэ
		</p>
		<p>
			или хотите обсудить сроки изготовления, а так же способ доставки и все прочие вопросы:
		</p>
		<p class="contact">
			<a href="tel:+79190673506">
				<img alt="call" src="img/icons/call-white.svg">
				8 919 067 35 06
			</a>
			<a href="mailto:order@woodflow.ru">
				<img alt="email" src="img/icons/mail-white.svg">
				order@woodflow.ru
			</a>
		</p>
	</div>
</section>
