<template>
  <div class="main">
    <div>
      <section id="home" class="section main-section">
        <div class="section__content--wrap">
          <div class="section__content--left">
            <h2 class="section__content--sub">Hi i'm Suhyeon Maeng</h2>
            <h1 class="section__content--title">Web Developer</h1>
            <p class="section__content--desc">
              저는 뛰어난 디지털 경험을 추구하는 프론트엔드 엔지니어 입니다.
              <br />
              웹 사이트의 디테일, 디자이너와의 의사소통을 위해 최근엔 UX/UI를
              학습 중 입니다.
            </p>
            <p class="section__content--desc">
              저랑 함께 웹을 만들어가는게 기대되시나요?
            </p>
            <div class="section__content--button-wrap">
              <button>연락해보기</button>
              <button>프로젝트 구경 하기</button>
            </div>
          </div>
          <div class="section__content--right">
            <img
              class="avatar"
              src="../assets/images/Avatar.png"
              alt="avatar image"
            />
          </div>
        </div>
      </section>
      <section id="about" class="section main-section">
        <div class="section__content--about">
          <div class="about-item-wrap">
            <span>
              <font-awesome-icon icon="fa-solid fa-truck-fast" />
            </span>

            <p>
              빠른 로딩 시간과 지연 없는 인터랙션을 구현하는게 최우선
              순위입니다.
            </p>
          </div>
          <div class="about-item-wrap">
            <span>
              <font-awesome-icon icon="fa-solid fa-laptop-code" />
            </span>
            <p>크고 작은 모든 디바이스에서 아름답게 보여지도록 작업합니다.</p>
          </div>
          <div class="about-item-wrap">
            <span>
              <font-awesome-icon icon="fa-solid fa-user" />
            </span>
            <p>사용하기 쉬운 직관적인 UX/UI를 선호합니다.</p>
          </div>
        </div>
      </section>
      <section id="work" class="section job-section">
        <h1 class="section__content--title">Experience</h1>
        <!-- <p class="section__content--sub">근무 한 곳</p> -->
        <div class="section__content jobs">
          <!-- <div role="tabList" aria-label="Job tabs" class="jobs-tabs">
              <button
                v-for="(item, index) in company"
                :key="index"
                :class="index === 0 ? 'jobs-tab on' : 'jobs-tab'"
                @click="clickTab($event, item.name)"
              >
                <span>
                  {{ item.name }}
                </span>
              </button>
            </div>
            <div role="panelList" aria-label="Job panels" class="jobs-panels">
              <div
                v-for="(item, index) in company"
                :id="item.name"
                :key="index"
                :class="index === 0 ? 'jobs-panel on' : 'jobs-panel'"
                role="tabpanel"
                tabindex="index"
              >
                <h3 class="job-title">
                  <span class="position">{{ item.position }}</span
                  >&nbsp;&#64;
                  <span class="company">{{ item.name }}</span>
                </h3>
                <p class="period">{{ item.period }}</p>
                <ul class="career-list">
                  <li
                    v-for="(career, cIndex) in item.careers"
                    :key="cIndex"
                    class="career-list-item"
                  >
                    <font-awesome-icon :icon="['fas', 'check']" />
                    <span>{{ career }}</span>
                  </li>
                </ul>
              </div>
            </div> -->
          <!-- :class="hover ? 'jobs-card hover' : 'jobs-card'" -->
          <div
            v-for="(item, index) in company"
            :key="index"
            ref="card"
            :class="hover ? `active card ${index}` : ` card ${index}`"
          >
            <!-- <div v-show="false" class="card-header">
                <h2 class="name">
                  {{ item.name }}
                </h2>
              </div> -->
            <div>
              <img src="" alt="item.name" />
            </div>
            <div class="job-title">
              <h4 class="name">
                {{ item.name }}
              </h4>
              <span class="position">{{ item.position }}</span
              >&nbsp;&#64; <span class="company">{{ item.name }}</span>
              <p class="period">{{ item.period }}</p>
            </div>
            <ul class="career-list">
              <li
                v-for="(career, cIndex) in item.careers"
                :key="cIndex"
                class="career-list-item"
              >
                <!-- <font-awesome-icon :icon="['fas', 'check']" /> -->
                <p>{{ career }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" class="section career-section">
        <h1 class="section__content--title">Work</h1>
        <p class="section__content--sub">
          웹사이트를 위한 것들을 만들고 있습니다.
        </p>
        <p class="section__content--desc">
          저는 뛰어난 디지털 경험을 구축하는 프론트엔드 엔지니어 입니다. 현재
          저는 위메이드 전기아이피에 근무하며 프론트팀을 리딩하고있습니다.
        </p>
      </section>
      <section id="contact" class="section contact-section">
        <div class="section__content--contact">
          <h1 class="section__content--title">Contact me</h1>
          <p class="section__content--sub">메일함은 언제든 열려있습니다.</p>
          <p class="section__content--desc">
            업무가 바쁜 경우엔 회신이 늦어질 수 있습니다. 늦어도 이틀 내엔 연락
            드리겠습니다.
          </p>
          <a
            href="mailto:job.maengsh@gmail.com?body=안녕하세요. 포트폴리오를 보고 연락드립니다."
            class="mail hover:shadow font-bold py-3 px-8 text-xl rounded text-center"
            >Say Hello 👋</a
          >
        </div>
      </section>
    </div>
  </div>
</template>
<script>
definePageMeta({
  layout: 'default',
});
export default {
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
  .section {
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
