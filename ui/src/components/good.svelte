<script>
  import { afterUpdate } from 'svelte';
  import Modal from './modal.svelte';

  export let mediaPrefix;
  export let good;

  let image;
  let showModal = false;

  afterUpdate(() => {
    if (good.images.indexOf(image) === -1) {
      setImage(good.images[0]);
    }
	});

  function setImage(img) {
    image = img;
  }

  function swipeImage() {
    const index = good.images.indexOf(image);
    const next = good.images[index + 1];
    const img = next ? next : good.images[0];
    setImage(img);
  }

  swipeImage();

</script>

<section class="details">

  <h1>{good.title}</h1>

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
        <td>{good.fullLength}м</td>
        <td>{good.width}м</td>
        <td>{good.height}м</td>
        <td>{good.thickness}мм</td>
        <td>{good.weight}кг</td>
        <td>{good.capacity}</td>
      </tr>
    </tbody>
  </table>

  <figure class="slider" on:click={() => swipeImage()}>
    <img alt={good.title} src={`${mediaPrefix}${image.url}`}>
  </figure>

  <p class="description"></p>

  <h2 class="price">{good.price} ₽</h2>

  {#if good.images.length > 1}
    <nav class="switch">
      {#each good.images as img}
        <span
          class="{image.id == img.id ? 'active': ''}"
          on:click|stopPropagation={() => setImage(img)}>
        </span>
      {/each}
    </nav>
  {/if}

  <button class="link-button big" on:click={() => showModal = true}>Заказать</button>
</section>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			{good.title}
		</h2>
    <p>
      Проще всего сделать заказ можно позвонив нам по телефону:
      <a href="tel:+79190673506">
        +7 (919) 067 35 06
      </a>
    </p>
    <p>
      Либо написать на почту:
      <a href="mailto:order@woodflow.ru">
        order@woodflow.ru
      </a>
    </p>
    <p>
      И обсудить сроки, условия доставки и прочие интересующие вопросы.
    </p>
	</Modal>
{/if}

<style>
  .details {
    padding: 120px 72px;
  }

  .details h1 {
    font-weight: 700;
    font-size: 64px;
  }

  .details .spec {
    position: relative;
    z-index: 1;
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
    margin-top: 242px;
    font-size: 45px;
    font-weight: bold;
  }

  .details .link-button {
    position: absolute;
    padding: 27px 42px;
    z-index: 1;
  }

  .slider {
    position: absolute;
    top: 210px;
    right: 0;
    width: 82%;
    max-height: 75%;
    overflow: hidden;
    cursor: pointer;
  }

  .slider img {
    width: 100%;
    position: relative;
    right: -11px;
  }

  .switch {
    position: absolute;
    right: 42px;
    display: flex;
    flex-flow: row;
    align-items: center;
    z-index: 1;
  }

  .switch span {
    display: inline-block;
    height: 11px;
    width: 11px;
    border-radius: 5px;
    margin: 4px;
    background: black;
    cursor: pointer;
  }

  .switch span.active {
    height: 13px;
    width: 13px;
    border-radius: 7px;
  }

  .dark .switch span {
    background: #ffebc7;
  }

  @media screen and (max-width: 998px) {
    .details {
      padding: 158px 72px;
    }

    .details .price {
      margin-top: 50%;
    }
    .slider {
      top: 33%;
    }
  }
</style>