<template>
  <div class="main">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

definePageMeta({
  layout: 'default',
});
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      company: [
        {
          name: '위메이드 전기아이피',
          position: 'Frontend Developer',
          period: '2022.07 - 현재',
          careers: [
            '프론트팀 팀장',
            'Vue3, Vuetify3, Vite, parcel, Javascript, Zeplin을 사용하여 웹사이트 개발 및 유지 관리',
            '기획자, 디자이너, 운영으로 구성된 여러 분야의 팀과 매일 커뮤니케이션',
          ],
        },
        {
          name: '글로벌리어',
          position: 'Frontend Developer',
          period: '2019.11 - 2022.03',
          careers: [
            '주로 React, Redux, Node.js, MongoDB, Styled-Component, JavaScript를 사용하여 사내 및 클라이언트 웹 사이트 용 코드 개발 및 유지 관리',
            '다양한 브라우저 및 모바일 장치에서 사이트를 테스트하여 브라우저 간 호환성 보장',
          ],
        },
        {
          name: '제이에스티나',
          position: 'Backend Developer',
          period: '2018.10 - 2019.05',
          careers: [
            'Java, Spring, Oracle 12c, JSP, Javascript, jQuery를 사용하여 사내 어드민 및 이커머스 프론트 개발',
            '다양한 분야의 외부 인력과 커뮤니케이션하며 프로젝트 진행',
          ],
        },
        {
          name: '지니웍스',
          position: 'Backend Developer',
          period: '2017.04 - 2018.08',
          careers: [
            ' Java, Spring, JSP, MySQL, JavaScript, jQuery, FreeMarker를 사용하여 e-commerce 개발',
          ],
        },
        {
          name: '미미박스',
          position: 'Backend Developer',
          period: '2015.06 - 2017.02',
          careers: [
            'Node.js, MySQL, JavaScript, jQuery, Jira를 사용하여 웹사이트 개발 및 유지 관리',
          ],
        },
      ],
      hover: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    clickTab(e, type) {
      const tab = document.getElementsByClassName('jobs-tab');
      const panel = document.getElementsByClassName('jobs-panel');

      for (let i = 0; i < panel.length; i++) {
        panel[i].style.display = 'none';
      }

      for (let i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(' on', '');
      }

      document.getElementById(type).style.display = 'block';
      e.currentTarget.className += ' on';
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  background: var(--bg-navy);
  .swiper {
    height: 100vh;
    .section__content--wrap {
      display: flex;
    }
    padding: 15rem 15rem 0;
    /* margin-top: calc(11.12em + 2em); */
    .section__content--title {
      font-size: 5rem;
      color: var(--bright-yellow);
      font-family: 'Black Han Sans';
    }
    .section__content--right {
      padding-left: 17rem;
      .avatar {
        width: 15rem;
      }
    }
    .section__content--sub {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 1.5rem;
      color: #ecdb6e;
    }
    .section__content--desc {
      font-size: 1rem;
      line-height: 1.8rem;
      color: #fff;
    }
    .section__content--button-wrap {
      margin-top: 2rem;

      button {
        width: 15rem;
        height: 5rem;
        border-radius: 10rem;
        background: none;
        color: var(--brightest-yellow);
        border: 1px solid var(--brightest-yellow);
        background: var(--bg-navy);
        box-shadow: none;
        cursor: pointer;

        &:hover {
          background: var(--brightest-yellow);
          color: #000;
        }

        &:first-child {
          margin-right: 2rem;
        }
      }
    }
    .section__content--about {
      margin-top: 2rem;
      display: flex;
      gap: 25px;

      .about-item-wrap {
        text-align: center;
        width: calc(33.3% - 25px);
        line-height: 1.75rem;

        svg {
          /* width: 6rem; */
          height: 7rem;
          margin: 1rem;
        }

        p {
          word-break: keep-all;
        }
      }
    }

    .section__content.jobs {
      display: flex;
      margin-top: 1rem;
      flex-wrap: wrap;
      gap: 20px;

      /* .jobs-tabs {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--pink-light-color);
  
          .jobs-tab {
            width: max-content;
            width: 18rem;
            border: none;
            background: none;
            cursor: pointer;
            height: var(--tab-height);
  
            span {
              color: var(--text-color);
              padding: 0px 20px 2px;
              text-align: left;
            }
  
            &:hover {
              transition: all 0.3s ease-in-out;
              background-color: var(--bright-yellow);
              span {
                color: #fff;
              }
            }
          }
          .jobs-tab.on {
            transition: var(--transition);
            border-left: 2px solid var(--yellow-color);
          }
        }
        .jobs-panels {
          width: 100%;
          padding: 10px 8px;
          color: var(--text-color);
  
          .job-title {
            margin-bottom: 0.5rem;
            line-height: var(--line-height);
  
            .position {
              font-size: 1.3rem;
            }
          }
          .period {
            font-size: 1.2rem;
            line-height: var(--line-height);
            margin-bottom: 1.8rem;
          }
        }
        .jobs-panel {
          display: none;
  
          .career-list {
            .career-list-item {
              margin-bottom: 0.5rem;
              line-height: 1.5rem;
  
              svg {
                width: 1rem;
              }
            }
          }
        }
        .jobs-panel.on {
          display: block;
          transition: var(--transition);
        }
  
        .jobs-card {
          background: var(--secondary-color);
          box-sizing: border-box;
          width: calc(25% - 6px);
          height: 250px;
          display: flex;
          justify-content: center;
          align-content: center;
        } */
      .card {
        width: calc(33.3% - 20px);
        border-radius: 2rem;
        /* width: 20rem; */
        background: var(--on-background-color-2);
        height: 300px;
        padding: 1.25rem;
        border: 10px double black;

        .job-title {
          color: #000;
          border-bottom: 1px solid #dcdcdc;
          padding-bottom: 1rem;
        }

        .career-list {
          padding-top: 1rem;

          .career-list-item {
            margin-bottom: 0.5rem;
            line-height: 1.5rem;
            color: #000;
          }
        }
      }
    }
    .section__content--contact {
      a {
        line-height: 1.8rem;
        color: var(--bright-yellow);
      }
    }
  }
}
</style>
