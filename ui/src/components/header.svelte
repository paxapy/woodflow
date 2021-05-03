<header class="header">
  <a class="logo" href="/" title="woodflow"><span></span></a>
  <address>
    <a href="/#contact" class="location">Пеновский район, д. Гора</a>
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
  </address>
</header>

<style>
  .header {
    position: absolute;
  	display: flex;
  	top: 0;
  	left: 0;
    align-items: center;
  	justify-content: space-between;
  	width: 100%;
  	padding: 42px 72px;
  	box-sizing: border-box;
  }

  .header .logo {
    background: url('/img/logo.png') no-repeat;
    width: 88px;
    height: 30px;
  }

  .header address {
    display: flex;
    align-items: center;
  }

  .header address a {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    padding: 0 4px;
  }

  .header address a.location {
    padding-right: 42px;
  }

  .header address a.lsf {
    font-size: 19pt;
    font-weight: normal;
  }

  .dark .header .logo {
    background-image: url('/img/logo-dark.png');
  }

  @media screen and (max-width: 720px) {
    .header address a.location {
      display: none;
    }
  }

  @media screen and (max-width: 604px) {
    .header {
      padding: 42px 33px;
    }
  }
</style>
