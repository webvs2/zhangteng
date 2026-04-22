<template>
  <div id="app" class="resume-container">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
    </div>
    
    <div class="resume-layout">
      <!-- 左侧固定区域 -->
      <aside class="left-sidebar" v-scroll-reveal>
        <div class="sidebar-content">
          <div class="avatar-wrapper">
            <div class="avatar">
              <span class="avatar-text">张</span>
            </div>
          </div>
          <h1 class="name">张腾</h1>
          <div class="title-wrapper">
            <TypeWriter :texts="jobTitles" :speed="100" :pause="2000" />
          </div>
          <div class="contact-info">
            <div class="contact-item" v-for="(item, index) in contactList" :key="index">
              <i :class="item.icon"></i>
              <span>{{ item.value }}</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- 右侧主内容区域 -->
      <main class="right-content">
        <!-- 技能雷达图 -->
        <section class="section radar-section" v-scroll-reveal>
          <div class="section-header">
            <span class="section-number">01</span>
            <h2 class="section-title">技能雷达</h2>
          </div>
          <div class="radar-wrapper">
            <SkillRadar />
          </div>
        </section>

        <!-- 专业技能 -->
        <section class="section skills-section" v-scroll-reveal>
          <div class="section-header">
            <span class="section-number">02</span>
            <h2 class="section-title">专业技能</h2>
          </div>
          <div class="skill-categories">
            <div class="skill-category" v-for="(category, index) in skillCategories" :key="index">
              <h3 class="category-title">
                <i :class="category.icon"></i>
                {{ category.title }}
              </h3>
              <div class="skill-tags">
                <span class="skill-tag" v-for="(skill, sIndex) in category.skills" :key="sIndex" :style="{ animationDelay: `${sIndex * 0.1}s` }">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- 工作经历 -->
        <section class="section" v-scroll-reveal>
          <div class="section-header">
            <span class="section-number">03</span>
            <h2 class="section-title">工作经历</h2>
          </div>
          <div class="timeline">
            <div class="timeline-item" v-for="(job, index) in workExperience" :key="index">
              <div class="timeline-marker">
                <div class="timeline-dot"></div>
                <div class="timeline-line" v-if="index < workExperience.length - 1"></div>
              </div>
              <div class="timeline-content">
                <div class="timeline-period">{{ job.period }}</div>
                <h3 class="timeline-title">{{ job.company }}</h3>
                <div class="timeline-position">{{ job.department }} | {{ job.position }}</div>
                <p class="timeline-desc">{{ job.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 项目经验 -->
        <section class="section" v-scroll-reveal>
          <div class="section-header">
            <span class="section-number">04</span>
            <h2 class="section-title">项目经验</h2>
          </div>
          <div class="projects-grid">
            <div class="project-card" v-for="(project, index) in projects" :key="index">
              <div class="project-header">
                <span class="project-number">0{{ index + 1 }}</span>
                <h3 class="project-name">{{ project.name }}</h3>
              </div>
              <div class="project-meta">
                <span class="project-period"><i class="fas fa-calendar"></i> {{ project.period }}</span>
                <span class="project-scale"><i class="fas fa-users"></i> {{ project.scale }}</span>
              </div>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-achievements">
                <div class="achievement-title">工作业绩：</div>
                <ul>
                  <li v-for="(achievement, aIndex) in project.achievements" :key="aIndex">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- 页脚 -->
        <footer class="footer" v-scroll-reveal>
          <div class="footer-content">
            <div class="footer-text">感谢您花时间阅读我的简历</div>
            <div class="contact-links">
              <a :href="'tel:' + phone" class="contact-link">
                <i class="fas fa-phone"></i>
              </a>
              <a :href="'mailto:' + email" class="contact-link">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
            <div class="copyright">© 2025 张腾 | Java开发工程师</div>
          </div>
        </footer>
      </main>
    </div>

    <!-- 返回顶部 -->
    <transition name="fade">
      <div class="back-to-top" v-show="showBackToTop" @click="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import TypeWriter from './components/TypeWriter.vue'
import SkillRadar from './components/SkillRadar.vue'

export default {
  name: 'App',
  components: {
    TypeWriter,
    SkillRadar
  },
  data() {
    return {
      jobTitles: ['全栈开发工程师', '技术团队负责人', 'AI工程师'],
      phone: '15733225960',
      email: 'zhangteng931006@163.com',
      contactList: [
        { icon: 'fas fa-phone', value: '15733225960' },
        { icon: 'fas fa-envelope', value: 'zhangteng931006@163.com' },
        { icon: 'fas fa-user', value: '男 / 33岁' },
        { icon: 'fas fa-graduation-cap', value: '河北农业大学 / 本科' }
      ],
      skillCategories: [
        {
          title: '开发工具',
          icon: 'fas fa-tools',
          skills: ['IntelliJ IDEA', 'WebStorm', 'Navicat', 'Postman', 'GitLab', 'Jenkins', 'AI编程']
        },
        {
          title: '数据库与中间件',
          icon: 'fas fa-database',
          skills: ['MySQL', 'MongoDB', 'Redis', 'RabbitMQ']
        },
        {
          title: '技术栈',
          icon: 'fas fa-code',
          skills: ['SpringBoot', 'MyBatis', 'Vue2', 'Maven', 'Nginx', '若依框架']
        },
        {
          title: '项目管理',
          icon: 'fas fa-project-diagram',
          skills: ['PMP证书', '团队管理', '敏捷开发', '代码规范']
        }
      ],
      workExperience: [
        {
          period: '2025.07 - 2025.12',
          company: '北京知行有数有限公司',
          department: '人力资源研发部',
          position: 'Java开发',
          description: '参与企业人力资源管理系统核心开发，基于 SpringBoot+Vue2 技术栈完成后端接口与管理页面的定制化开发，适配企业面试、入职、离职等全人力资源生命周期业务流程。'
        },
        {
          period: '2022.06 - 2025.02',
          company: '河北航信云享科技有限公司',
          department: '费控研发部',
          position: 'Java开发',
          description: '作为核心开发人员参与数电发票相关重点项目财智存的全生命周期开发。制定团队前后端交互、Git代码管理等标准化规范，提升团队协作效率30%以上；带领团队保障近7万线上用户的发票管理业务稳定运行。'
        },
        {
          period: '2018.11 - 2022.05',
          company: '国美电器有限公司',
          department: '供应链平台',
          position: 'Java开发',
          description: '深度参与国美供应链核心板块电子合同平台的从零到一建设，负责技术选型、核心模块开发与跨系统对接工作，打通国美与供应商、OA、SAP等多系统的业务链路。'
        },
        {
          period: '2017.07 - 2018.11',
          company: '北京东方国信科技股份有限公司',
          department: '研发中心',
          position: 'Java开发',
          description: '参与大数据相关研发项目的后端模块开发，熟练掌握企业级项目开发流程与技术落地规范，积累了高并发、高可用系统的开发与优化经验。'
        }
      ],
      projects: [
        {
          name: '供应链电子合同管理平台',
          period: '2018.11 - 2022.05',
          scale: '国美全国供应链体系',
          description: '从零开始搭建电子合同全生命周期管理平台，包含与供应商平台（ECP）交互、合同填报、OA系统对接、PDF合同生成盖章、合同号生成等核心模块。',
          achievements: [
            '参与项目前期技术选型与架构设计，结合供应链业务特点制定合理的技术方案',
            '负责合同信息增删改查核心模块开发，实现与前端的高效数据交互',
            '参与跨系统对接开发，实现合同平台与ECP、OA、SAP等系统的无缝对接',
            '平台落地后大幅减少供应链合同业务的线下操作，提升业务协同效率超50%'
          ]
        },
        {
          name: '财智存',
          period: '2022.06 - 2025.02',
          scale: '服务近7万线上企业用户',
          description: '航信云享重点战略项目，深度适配国家数电发票政策，为企业提供电子发票识别、采集、查验、归档全流程数字化服务。',
          achievements: [
            '项目后端全流程开发与技术把控，从立项到迭代的全生命周期管理',
            '制定团队前后端交互与Git代码管理规范，降低代码冲突与维护成本',
            '带领后端团队处理多项数电发票政策更新、用户需求迭代等紧急任务',
            '运用Redis做热点发票数据缓存、RabbitMQ实现发票异步处理，支撑近7万用户的高并发访问'
          ]
        },
        {
          name: '人力资源管理系统',
          period: '2025.07 - 2025.12',
          scale: '企业内部核心管理系统',
          description: '企业内部数字化管理核心项目，采用前后端分离架构，覆盖员工面试、入职、离职、转正、请假等人力资源全生命周期流程。',
          achievements: [
            '基于若依框架进行二次开发，独立完成人力资源平台核心后端接口的开发与自测',
            '配合前端完成管理页面的功能开发与联调，实现业务功能与页面的完美适配',
            '参与系统性能优化，解决系统高频操作下的响应慢问题'
          ]
        }
      ],
      showBackToTop: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.initScrollReveal()
    this.initTimelineObserver()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.pageYOffset > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    initScrollReveal() {
      // 动画已禁用，确保所有元素可见
      this.$nextTick(() => {
        const elements = document.querySelectorAll('[v-scroll-reveal]')
        elements.forEach(el => {
          el.classList.remove('scroll-hidden')
          el.classList.add('revealed')
        })
      })
    },
    initTimelineObserver() {
      // 为工作时间添加滚动入场动画
      this.$nextTick(() => {
        const timelinePeriods = document.querySelectorAll('.timeline-period')
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('period-visible')
            } else {
              entry.target.classList.remove('period-visible')
            }
          })
        }, {
          threshold: 0.3,
          rootMargin: '0px 0px -20px 0px'
        })

        timelinePeriods.forEach(el => observer.observe(el))
      })
    }
  },
  directives: {
    'scroll-reveal': {
      inserted(el) {
        el.classList.add('scroll-reveal', 'revealed')
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #64748b;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-secondary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

.resume-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* 背景装饰 */
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.circle-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: 20%;
  left: -100px;
  animation-delay: -5s;
}

.circle-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  bottom: -100px;
  right: 10%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -50px) scale(1.1); }
  50% { transform: translate(-30px, 30px) scale(0.95); }
  75% { transform: translate(30px, 50px) scale(1.05); }
}

/* 简历布局 */
.resume-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;
  padding: 40px;
  position: relative;
  z-index: 2;
  min-height: 100vh;
}

/* 左侧边栏 */
.left-sidebar {
  position: sticky;
  top: 40px;
  height: fit-content;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 40px 30px;
  text-align: center;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrapper {
  margin-bottom: 25px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--bg-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
  50% { box-shadow: 0 0 0 15px rgba(102, 126, 234, 0); }
}

.avatar-text {
  font-size: 40px;
  font-weight: 700;
  color: white;
}

.name {
  font-size: 28px;
  font-weight: 700;
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.title-wrapper {
  min-height: 36px;
  margin-bottom: 25px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  font-size: 13px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(37, 99, 235, 0.1);
  transform: translateX(5px);
}

.contact-item i {
  color: var(--primary-color);
  width: 16px;
}

/* 右侧内容区 */
.right-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 通用区块样式 */
.section {
  background: white;
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-sm);
}

.radar-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.radar-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.section-number {
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-color);
  padding: 5px 12px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  position: relative;
}

/* 技能区域 */
.skills-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%);
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.skill-category {
  background: white;
  padding: 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.category-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-title i {
  color: var(--primary-color);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 12px;
  background: var(--bg-secondary);
  border-radius: 50px;
  font-size: 13px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease backwards;
}

.skill-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 时间线 */
.timeline {
  position: relative;
  padding-left: 35px;
}

.timeline-item {
  position: relative;
  padding-bottom: 35px;
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: -35px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-gradient);
  border: 3px solid white;
  box-shadow: var(--shadow-md);
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, var(--primary-color), transparent);
  margin-top: 8px;
  min-height: 50px;
}

.timeline-content {
  background: var(--bg-secondary);
  padding: 25px;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(5px);
}

.timeline-period {
  font-size: 13px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 10px;
  display: inline-block;
  padding: 4px 12px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 20px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-period.period-visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-item:nth-child(1) .timeline-period { transition-delay: 0s; }
.timeline-item:nth-child(2) .timeline-period { transition-delay: 0.1s; }
.timeline-item:nth-child(3) .timeline-period { transition-delay: 0.2s; }
.timeline-item:nth-child(4) .timeline-period { transition-delay: 0.3s; }

.timeline-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.timeline-position {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.timeline-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 项目卡片 */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.project-card {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  border-left: 4px solid var(--primary-color);
}

.project-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.project-number {
  font-size: 12px;
  font-weight: 700;
  color: var(--primary-color);
  padding: 4px 10px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 15px;
}

.project-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.project-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.project-meta span {
  font-size: 13px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
}

.project-meta i {
  color: var(--primary-color);
}

.project-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 15px;
}

.project-achievements {
  background: white;
  padding: 18px;
  border-radius: var(--radius-sm);
}

.achievement-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.project-achievements ul {
  list-style: none;
  padding: 0;
}

.project-achievements li {
  font-size: 13px;
  color: var(--text-secondary);
  padding: 6px 0;
  padding-left: 18px;
  position: relative;
  line-height: 1.6;
}

.project-achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

/* 页脚 */
.footer {
  background: var(--text-primary);
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: var(--radius-md);
  margin-top: 10px;
}

.footer-text {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.contact-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-link:hover {
  background: var(--primary-color);
  transform: translateY(-3px);
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

/* 返回顶部 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--bg-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 滚动显示动画 - 默认可见，无需动画 */
.scroll-reveal {
  opacity: 1;
  transform: translateY(0);
}

.scroll-reveal.scroll-hidden {
  opacity: 1;
  transform: translateY(0);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .resume-layout {
    grid-template-columns: 280px 1fr;
    gap: 30px;
    padding: 30px;
  }
  
  .left-sidebar {
    padding: 30px 20px;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
  }
  
  .avatar-text {
    font-size: 32px;
  }
  
  .name {
    font-size: 22px;
  }
  
  .skill-categories {
    grid-template-columns: 1fr;
  }
  
  .section {
    padding: 30px;
  }
}

/* 响应式设计 - 移动端 */
@media (max-width: 768px) {
  .resume-layout {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 20px;
  }
  
  .left-sidebar {
    position: relative;
    top: 0;
    padding: 30px 25px;
  }
  
  .avatar {
    width: 90px;
    height: 90px;
  }
  
  .avatar-text {
    font-size: 36px;
  }
  
  .name {
    font-size: 26px;
  }
  
  .title-wrapper {
    min-height: 32px;
  }
  
  .contact-info {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .contact-item {
    width: calc(50% - 6px);
    justify-content: center;
    padding: 10px 12px;
  }
  
  .section {
    padding: 25px 20px;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .skill-categories {
    grid-template-columns: 1fr;
  }
  
  .timeline {
    padding-left: 30px;
  }
  
  .timeline-marker {
    left: -30px;
  }
  
  .timeline-content {
    padding: 20px;
  }
  
  .timeline-title {
    font-size: 16px;
  }
  
  .timeline-desc {
    font-size: 13px;
  }
  
  .project-card {
    padding: 20px;
  }
  
  .project-name {
    font-size: 17px;
  }
  
  .project-achievements li {
    font-size: 12px;
  }
  
  .footer {
    padding: 30px 20px;
  }
}

/* 响应式设计 - 小屏手机 */
@media (max-width: 480px) {
  .resume-layout {
    padding: 15px;
    gap: 20px;
  }
  
  .left-sidebar {
    padding: 25px 20px;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
  }
  
  .avatar-text {
    font-size: 32px;
  }
  
  .name {
    font-size: 22px;
  }
  
  .contact-info {
    flex-direction: column;
  }
  
  .contact-item {
    width: 100%;
  }
  
  .section {
    padding: 20px 15px;
  }
  
  .timeline {
    padding-left: 25px;
  }
  
  .timeline-marker {
    left: -25px;
  }
  
  .timeline-dot {
    width: 12px;
    height: 12px;
  }
  
  .timeline-content {
    padding: 18px;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .project-meta {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
