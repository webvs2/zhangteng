<<<<<<< HEAD
# 张腾 - 专业简历网站

一个现代、简约、专业的单页简历网站，采用深灰+科技蓝配色，支持桌面端左右分栏和移动端响应式布局。

## 🌐 在线预览

直接在浏览器中打开 `index.html` 即可查看，或部署到 GitHub Pages。

## ✨ 特性

### 设计风格
- **配色方案**：深灰 (#0a2b3e, #1a4a6e) + 科技蓝 (#2c7da0, #00b4d8)
- **字体**：Inter (Google Fonts) + 系统无衬线字体
- **卡片风格**：圆角 (16-24px)、柔和阴影、悬停上浮效果

### 动画效果
1. **页面加载动画**：整体淡入上浮
2. **滚动入场动画**：使用 Intersection Observer API，各区块进入视口时渐显+上移
3. **卡片悬停效果**：轻微上浮 + 阴影增强
4. **技能标签悬停**：变色 + 上移 + 阴影
5. **返回顶部按钮**：滚动超过400px显示，平滑返回

### 响应式布局
- **桌面端 (≥1024px)**：左侧边栏 380px（个人信息+技能+证书），右侧主内容区
- **平板/移动端 (<1024px)**：单列布局，侧边栏置于顶部

## 📱 页面结构

```
┌─────────────────────────────────────────────┐
│  左侧边栏 (Sticky)        │  右侧主内容区    │
│  ─────────────────        │  ─────────────  │
│  · 头像                    │  · 工作经历      │
│  · 姓名/职位               │    (时间线样式)  │
│  · 联系方式                │                 │
│  · 技能标签                │  · 项目经验      │
│  · PMP证书                 │    (卡片样式)    │
│                            │                 │
│                            │  · 核心能力      │
│                            │    (网格布局)    │
│                            │                 │
│                            │  · AI说明        │
│                            │  · 页脚          │
└─────────────────────────────────────────────┘
```

## 🛠 技术栈

- **纯 HTML5 / CSS3**：无构建工具，单文件运行
- **CSS 变量**：统一配色和样式管理
- **CSS Grid + Flexbox**：现代布局方案
- **Intersection Observer API**：滚动动画触发
- **Google Fonts**：Inter 字体
- **Font Awesome 6**：图标

## 📂 文件结构

```
dtjianli/
├── index.html      # 完整简历页面（单文件，~1080行）
├── README.md       # 项目说明
├── .nojekyll       # GitHub Pages 配置
└── src/            # Vue组件源码（历史备份）
    └── ...
```

## 🚀 本地使用

```bash
# 直接打开
open index.html

# 或使用本地服务器
npx serve .

# 或 Python
python -m http.server 8080
```

## 📤 部署到 GitHub Pages

```bash
# 1. 创建 GitHub 仓库（例如 zhangteng-resume）

# 2. 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/zhangteng-resume.git

# 3. 推送到 GitHub
git push -u origin main

# 4. 在 GitHub 仓库页面：
#    Settings -> Pages -> Source -> Deploy from a branch
#    Branch: main, Folder: / (root)

# 5. 访问 https://YOUR_USERNAME.github.io/zhangteng-resume
```

## 📝 内容概览

| 区块 | 内容 |
|------|------|
| **基本信息** | 张腾，33岁，河北农业大学物联网工程本科，8年经验 |
| **联系方式** | 电话、邮箱、学历、年龄 |
| **技能标签** | SpringBoot, Vue2/Vue3, MySQL, Redis, RabbitMQ, Docker, Jenkins 等 |
| **证书** | PMP 项目管理认证 |
| **工作经历** | 知行有数、航信云享、国美电器、东方国信（4段经历） |
| **项目经验** | 供应链电子合同平台、财智存发票平台、人力资源系统 |
| **核心能力** | 后端架构、跨系统集成、团队管理、紧急交付、数据库优化、高可用架构 |

## 🤖 AI 集成说明

- **模型选型**：Kimi K2.5（通过 Trae IDE 集成）
- **开发方式**：AI 辅助代码生成 + 人工审查调优
- **Prompt 策略**：结构化描述，明确视觉规范、动画要求、响应式断点

---

**作者**：张腾  
**职位**：Java开发工程师 / 全栈开发  
**联系**：15733225960 | zhangteng931006@163.com
=======
# resume



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

* [Create](https://docs.gitlab.com/user/project/repository/web_editor/#create-a-file) or [upload](https://docs.gitlab.com/user/project/repository/web_editor/#upload-a-file) files
* [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://jihulab.com/zhangteng-1006-group/resume.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

* [Set up project integrations](https://jihulab.com/zhangteng-1006-group/resume/-/settings/integrations)

## Collaborate with your team

* [Invite team members and collaborators](https://docs.gitlab.com/user/project/members/)
* [Create a new merge request](https://docs.gitlab.com/user/project/merge_requests/creating_merge_requests/)
* [Automatically close issues from merge requests](https://docs.gitlab.com/user/project/issues/managing_issues/#closing-issues-automatically)
* [Enable merge request approvals](https://docs.gitlab.com/user/project/merge_requests/approvals/)
* [Set auto-merge](https://docs.gitlab.com/user/project/merge_requests/auto_merge/)

## Test and Deploy

Use the built-in continuous integration in GitLab.

* [Get started with GitLab CI/CD](https://docs.gitlab.com/ci/quick_start/)
* [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/user/application_security/sast/)
* [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/topics/autodevops/requirements/)
* [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/user/clusters/agent/)
* [Set up protected environments](https://docs.gitlab.com/ci/environments/protected_environments/)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
>>>>>>> 0e31e85db29349ef2ed88fcdd8550c51c0940c02
