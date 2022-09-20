<template>
  <div class="container-fluid">
    <nav class="nav m-0 p-0 navbar-expand-lg navbar-light yellow row flex-wrap">
      <div class="d-flex nav__one justify-content-between p-0 col-12">
        <a class="nav__logo-link ml-center"
          ><img src="../assets/img/logo.png" class="nav__logo d-none d-md-inline" alt=""
        /></a>
        <a class="nav__logo-link ml-center">
          <img src="../assets/img/logo-mobile.png" class="nav__logo--mobile d-md-none" alt="" />
        </a>
        <form class="nav__form ml-center">
          <button class="nav__search-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              ></path>
            </svg>
          </button>
          <input
            type="search"
            maxlength="120"
            placeholder="Estoy buscando..."
            class="w-100 nav__search"
          />
        </form>
        <div class="d-flex align-items-center m-0">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="menuOpen()"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="nav__cart ml-center">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="d-flex nav__two w-100 flex-column justify-content-center align-items-between">
        <div
          v-bind:class="isCollapse ? 'd-flex' : 'd-none'"
          class="nav__location pb-1 align-items-center justify-content-between"
        >
          <p class="d-flex align-items-center m-0 nav__location__text">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
              class="nav__gps"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
              ></path>
              <circle
                cx="256"
                cy="192"
                r="48"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></circle></svg
            >Enviar a<span class="m-0 pl-1">Santiago Centro</span>
          </p>

          <span class="p-0 nav__location__button">></span>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="welcome">
            <div class="welcome__box d-flex">
              <div class="welcome__profile mr-3">
                <svg class="welcome__img" width="35" height="35" xmlns="http://www.w3.org/2000/svg">
                  <path
                    class="text-center"
                    d="M27.343 33.706l-1.356.64A13.25 13.25 0 0 0 14 26.75c-5.17 0-9.8 2.988-11.978 7.578l-1.356-.643A14.75 14.75 0 0 1 14 25.25a14.75 14.75 0 0 1 13.343 8.456zM14 21.75C8.063 21.75 3.25 16.937 3.25 11S8.063.25 14 .25 24.75 5.063 24.75 11 19.937 21.75 14 21.75zm0-1.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5zm0-2.5v-1.5a5.25 5.25 0 1 0 0-10.5v-1.5a6.75 6.75 0 0 1 0 13.5z"
                    fill="#BBB"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </div>
              <div class="welcome__text">
                <h3 class="welcome__title m-0">Bienvenido</h3>
                <p class="welcome__paragraph">
                  Ingresa a tu cuenta para ver tus compras, favoritos, etc.
                </p>
              </div>
            </div>
            <div class="welcome__buttons d-flex justify-content-between align-items-center p-0">
              <a class="btn-primary">Ingresa</a><a class="btn-secondary">Crea tu cuenta</a>
            </div>
          </div>

          <!-- <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Ofertas</a>
                <a class="dropdown-item" href="#">Inmuebles</a>
                <a class="dropdown-item" href="#">Tecnologia</a>
                <a class="dropdown-item" href="#">Hogar y Muebles</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Supermercado</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    menuOpen() {
      this.isCollapse ? (this.isCollapse = false) : (this.isCollapse = true);
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Proxima Nova', -apple-system, Roboto, Arial, sans-serif, sans-serif;
  background-color: $base-color;
}

.container-fluid {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar-light .navbar-toggler {
  border-color: #fff159;
}
.yellow {
  background-color: #fff159;
}

.navbar {
  height: 89px;
}
.nav {
  &__one {
    height: 50px;
    border-bottom: #e1d87e 1px solid;
  }
  &__logo--mobile {
    height: 32px;
    margin: 8px;
  }
  &__cart {
    height: 50px;
    width: 45px;
  }
  &__search {
    border-radius: 0% 5% 5% 0%;
    border: none;
    height: 32px;
    font-family: inherit;

    &::placeholder {
      font-size: 16px;
      color: #bfbfbf;
      font-family: inherit;
    }
    &-icon {
      background-color: #fff;
      color: #bfbfbf;
      border-radius: 5% 0% 0% 5%;
      font-size: 16px;
      border: none;
      height: 32px;
      width: 48px;
    }
  }
  &__two {
    color: #736c28;
    padding: 5px 5px;
  }
  &__location {
    color: #736c28;

    &__text {
      font-size: 13px;
    }
    &__button {
      width: 20px;
      font-weight: 500;
      color: #c1b74d;
      border-color: #c1b74d;
      font-weight: bold;
      &:hover {
        color: #736c28;
      }
    }
  }
}

.welcome {
  padding: 12px 16px;

  &__text {
    text-align: left;
    font-weight: 300;
    font-size: 14px;
  }
  &__title {
    font-size: 16px;
    color: #333333;
    font-weight: 600;
    margin: 4px 0;
    line-height: 1;
  }
  &__paragraph {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin: 0;
  }
  &__profile {
    height: 56px;
    width: 56px;
    background-color: #ededed;
    border-radius: 50%;
    float: left;
    margin-right: 16px;
    text-align: center;
  }
  &__img {
    margin-top: 9px;
    margin-left: 14.5px;
    height: 56px;
    width: 56px;
  }
  &__buttons {
    margin-top: 14px;
  }
}
</style>
