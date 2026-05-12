# 在线考试系统

纯前端实现的在线考试系统，无需服务器，数据存储在浏览器 LocalStorage。

## 功能特性

- **后台管理**：用户管理、PDF导入解析题库、题库管理、试卷组卷、成绩统计
- **前台考试**：在线答题、实时计时、答题导航、自动评分、逐题解析
- **题型支持**：单选题、多选题、判断题、填空题、简答题

## Web访问地址

| 页面 | 地址 |
|------|------|
| 前台考试（入口） | https://13888285815.github.io/workbuddy-exam-system/ |
| 后台管理 | https://13888285815.github.io/workbuddy-exam-system/admin.html |

## 使用方法

1. 打开上面的前台考试地址
2. 后台管理入口：点击"后台管理"卡片（默认账号：`admin` / `admin123`）
3. 考生登录：点击"在线考试"卡片（默认账号：`student1` / `123456`）

## 本地使用

1. 克隆仓库：`git clone https://github.com/13888285815/workbuddy-exam-system.git`
2. 进入目录：`cd workbuddy-exam-system`
3. 直接打开 `index.html` 即可使用

## 数据说明

所有数据存储在浏览器 LocalStorage，切换浏览器或清空缓存会导致数据丢失。

## 部署说明

已配置 GitHub Actions 自动部署到 GitHub Pages。每次推送到 main 分支后会自动部署。

### 启用 GitHub Pages（如未启用）

1. 进入仓库 Settings → Pages
2. 在 "Build and deployment" 部分选择 "GitHub Actions"
3. 点击 Save

## 技术栈

- HTML5 + CSS3 + JavaScript（原生）
- LocalStorage 数据持久化
- GitHub Actions CI/CD
