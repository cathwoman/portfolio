import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/portfolio/favicon.ico' }]],
  title: "Catherine VU - Designer UX UI",
  description: "Un site pour mes projets de design",
  base: '/portfolio/',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Formations',
        link: '/formations/',

      },
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/catherinevu436-78/' },
      { icon: 'github', link: 'https://github.com/cathwoman' },
    ]
  }
})
