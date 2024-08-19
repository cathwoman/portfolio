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
      //{ text: '', link: '/' }//
    ],

    sidebar: [
      {
        text: 'Formations',
        link: '/formations/',
        items: [
          { text: 'Concepteur designer UI', link: '/formations/concepteur_designer_ui'},
          { text: 'SNIR', link: '/formations/snir'},
          { text: 'STL', link: '/formations/stl'},
        ],
  
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cathwoman' }
        ]
  }
})
