<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink to="/" class="header__logo">
        <img
          class="header__logo--img"
          src="../assets/images/Avatar.png"
          alt="avatar image"
        />
        <h2 class="header__logo--sub">MSH</h2>
      </NuxtLink>
      <GNB />
    </div>
  </header>
</template>
<script>
import GNB from './GNB.vue';
export default {
  name: 'CHeader',
  components: { GNB },
  data() {
    return {
      isShowNav: false,
    };
  },
  methods: {
    handleToggleClick() {
      this.isShowNav = true;
    },
    isClosingNav(data) {
      this.isShowNav = !data;
    },
    bodyClickEvent() {
      document.body.onclick = function (e) {
        const event = e || window.event;

        document.body.innerHTML = '';
      };
    },
  },
};
</script>
<style lang="scss" scope>
.header {
  position: fixed;
  width: 100%;
  /* background: #24292f; */
  z-index: 100;

  .header__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;

    .header__logo {
      display: flex;
      align-items: center;

      .header__logo--img {
        width: 5rem;
        height: 5rem;
      }

      .header__logo--sub {
        color: #ffd700;
        font-size: 2rem;
      }
    }
  }
  .nav {
    .nav__list {
      display: flex;
      gap: 1.3rem;
      align-items: center;

      .nav__item {
        font-size: 1.5rem;
        cursor: pointer;

        .nav__link {
          color: #fff;
        }
      }
    }
  }
}
</style>
