# Seedrail 用户文档 (`docs.seedrail.dev`)

本仓库存放 Seedrail 公开用户文档站点源码，基于 [Astro Starlight](https://starlight.astro.build/) 构建，通过 GitHub Actions 自动发布至 GitHub Pages（绑定域名 `https://docs.seedrail.dev`）。

## 本地预览与构建

需要 Node.js 22+ 与 `pnpm` 10+：

```bash
pnpm install
pnpm dev
```

构建生产静态产物与离线全文搜索索引（Pagefind）：

```bash
pnpm build
pnpm preview --port 4321 --host 127.0.0.1
```

## 目录结构

- `src/content/docs/index.mdx`：文档站首页与导览卡片
- `src/content/docs/getting-started/`：本地环境准备与快速启动
- `src/content/docs/concepts/`：整体组件分层与纯出站连接架构
- `src/content/docs/deployment/`：控制面服务端部署与一行命令跨主机接入被控节点
- `public/CNAME`：GitHub Pages 自定义域名声明（`docs.seedrail.dev`）
- `.github/workflows/deploy.yml`：推送 `main` 自动构建并部署到 GitHub Pages

## 贡献与反馈

每篇文档底部均提供 **编辑此页** 链接，欢迎提交 Issue 或 Pull Request 改进文档表述与部署示例。
