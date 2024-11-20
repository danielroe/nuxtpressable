# Nuxt + WordPress (nuxtpressable)

This is a tiny, incomplete clone of WordPress built in [Nuxt](https://nuxt.com/) for a live-coding session at [Vue Toronto](https://vuetoronto.com/).

<p align="center">
  <a href="https://nuxtpressable.netlify.app/" target="_blank">
    <img width="1090" alt="Screenshot of the nuxtpressable home page, displaying a single blog post" src="https://github.com/user-attachments/assets/919267b0-ef39-4884-8e4c-205a8ddd9f2f">
  </a>
</p>

- [✨ &nbsp;Live Demo](https://nuxtpressable.netlify.app/)
<!-- - [🔈 &nbsp;Talk](https://www.youtube.com/watch?) -->

## Features

- Built with [Nuxt](https://nuxt.com/)
- Authentication via [nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils) and GitHub OAuth
- Data stored in [Cloudflare KV](https://developers.cloudflare.com/kv/) with [unstorage](https://unstorage.unjs.io/)
- Tiptap editor via [nuxt-tiptap-editor](https://github.com/modbender/nuxt-tiptap-editor)
- Light & dark mode using [pico.css](https://picocss.com/docs/)
- Hosted on Netlify

## Try it out

### Setup

```bash
# install dependencies
pnpm install

# serve in dev mode, with hot reload at localhost:3000
pnpm dev

# build for production + preview locally
pnpm build && pnpm preview
```

## License

MIT
