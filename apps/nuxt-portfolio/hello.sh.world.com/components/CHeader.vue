<template>
  <header class="header">
    <div ref="target" class="header__inner">
      <NuxtLink to="/" class="header__logo">
        <!-- TODO: 클래스명 변경 필요 이름에 띠용떼용 효과 필요 -->
        <h2 class="header__logo--sub">HELLO <span>Suhyeon's</span> WORLD!</h2>
      </NuxtLink>
      <GNB />
    </div>
  </header>
</template>
<script>
import GNB from './Gnb.vue';

export default {
  name: 'CHeader',
  components: { GNB },
  data() {
    return {};
  },
  mounted() {
    // this.scrollTop = document.documentElement.scrollTop;
    document.addEventListener('scroll', this.scroll);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.scroll);
  },
  methods: {
    scroll() {
      const headerBar = this.$refs.target;

      if (window.scrollY > this.$refs.target.offsetTop) {
        headerBar.classList.add('on');
      } else {
        headerBar.classList.remove('on');
      }
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
    padding: 2rem 5rem;

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

        span {
          position: relative;
          top: 10px;
          display: inline-block;
          animation: bounce 0.3s ease infinite alternate;
          font-family: cursive;
          text-shadow: 0 1px 0 var(--brightest-yellow);
          animation-delay: 0.1s;
        }

        @keyframes bounce {
          100% {
            top: -10px;
            text-shadow: 0 1px 0 var(--brightest-yellow),
              0 2px 0 var(--brightest-yellow);
          }
        }
      }
    }
  }
  .header__inner.on {
    background: var(--bg-navy);
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
