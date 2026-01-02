# 稻田蛙声官网

稻田集团旗下的技术传播品牌官方网站，采用极简学术风格设计。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4.0
- **字体**: Newsreader (衬线) + Inter (无衬线)

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
src/
├── app/                    # 页面路由
│   ├── page.tsx           # 首页
│   ├── services/          # 服务页
│   ├── academy/           # 培训基地
│   ├── blog/              # 文章列表 & 详情
│   └── about/             # 关于 & 联系
├── components/
│   ├── layout/            # Header, Footer
│   └── ui/                # Container, Section, Tag, ThemeToggle
└── data/
    └── siteConfig.ts      # 全站配置与内容
```

## 设计系统

### 配色方案

| 模式 | 背景色 | 前景色 |
|------|--------|--------|
| 浅色 | `#F2F1EC` (米白) | `#1a1a1a` (深灰) |
| 深色 | `rgb(5, 8, 27)` (深蓝黑) | `#f2f1ec` (米白) |

### 核心特性

- **液态玻璃卡片**: `backdrop-filter: blur(12px)` + 半透明背景
- **昼夜模式**: 实心圆点切换，偏好保存至 localStorage
- **响应式**: 移动端汉堡菜单，自适应网格布局

---

## 配图规格指南

### Logo

| 文件名 | 尺寸 | 格式 | 说明 |
|--------|------|------|------|
| `logo.png` | 180×48 px | PNG/SVG | 浅色模式导航栏 |
| `logo_dark.png` | 180×48 px | PNG/SVG | 深色模式导航栏 |

### 页面配图

| 位置 | 推荐尺寸 | 比例 | 格式 |
|------|----------|------|------|
| Hero 图片 | 800×600 px | 4:3 | WebP/PNG |
| 服务配图 | 640×360 px | 16:9 | WebP/PNG |
| 文章封面 | 640×360 px | 16:9 | WebP/PNG |
| 培训主视觉 | 800×600 px | 4:3 | WebP/PNG |
| 培训环境图 | 400×400 px | 1:1 | WebP/PNG |
| 品牌展示图 | 1400×400 px | 21:9 | WebP/PNG |
| 服务详情图 | 600×450 px | 4:3 | WebP/PNG |
| 课程封面 | 320×180 px | 16:9 | WebP/PNG |

### 图片优化建议

- 优先使用 **WebP** 格式（文件更小）
- 提供 **2x 分辨率** 版本用于 Retina 屏幕
- 单张图片压缩后不超过 **200KB**
- 放置于 `public/images/` 目录

---

## 内容配置

所有文案内容集中在 `src/data/siteConfig.ts`：

- `siteConfig.name` - 品牌名称
- `siteConfig.description` - 网站描述
- `siteConfig.mission` / `vision` / `values` - MVV
- `siteConfig.nav` - 导航菜单
- `siteConfig.contact` - 联系信息
- `siteConfig.disclaimer` - 医疗免责声明
- `services` - 服务列表
- `academyInfo` - 培训基地信息
- `blogPosts` - 文章数据

---

## 部署到 Ubuntu 宝塔面板

### 1. 服务器环境准备

```bash
# 安装 Node.js 20+ (通过宝塔面板 -> 软件商店 -> Node.js版本管理器)
# 或手动安装
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证
node -v  # v20.x.x
npm -v
```

### 2. 克隆项目

```bash
cd /www/wwwroot
git clone https://github.com/chrands/dauteenvoice_guanwang.git
cd dauteenvoice_guanwang
```

### 3. 安装依赖并构建

```bash
npm install
npm run build
```

### 4. 使用 PM2 运行

```bash
# 安装 PM2
npm install -g pm2

# 启动项目
pm2 start npm --name "dauteenvoice" -- start

# 设置开机自启
pm2 save
pm2 startup
```

### 5. 宝塔 Nginx 反向代理配置

在宝塔面板中创建网站，配置反向代理：

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### 6. 配置 SSL (可选)

通过宝塔面板 -> 网站 -> SSL -> Let's Encrypt 申请免费证书

### 7. 更新部署

```bash
cd /www/wwwroot/dauteenvoice_guanwang
git pull
npm install
npm run build
pm2 restart dauteenvoice
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 生产构建 |
| `npm start` | 启动生产服务 |
| `pm2 logs dauteenvoice` | 查看日志 |
| `pm2 restart dauteenvoice` | 重启服务 |
