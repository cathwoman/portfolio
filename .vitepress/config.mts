import { defineConfig, postcssIsolateStyles } from 'vitepress'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/portfolio/favicon.ico' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }
    ],
  ],
  title: "Catherine VU - Designer UX UI",
  description: "Un site pour mes projets de design",
  base: '/portfolio/',
  // appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
    ],

    sidebar: [
      {
        text: 'Formations',
        link: '/formations/',

      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>'
        },
        link: 'https://www.behance.net/catherinevu1'
      },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/catherinevu436-78/' },
      { icon: 'github', link: 'https://github.com/cathwoman' },
    ]
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/] // defaults to /base\.css/
          }),
          tailwindcss,
          autoprefixer,
        ],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../"),
        "@server": path.resolve(__dirname, "../server/src"),
      },
    },
  },
})
