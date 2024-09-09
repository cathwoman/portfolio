---
# https://vitepress.dev/reference/default-theme-home-page
layout: home 

hero:
  name: "Catherine VU"
  text: Prépare une alternance en Mastère Direction artistique UX UI
  tagline: Créer des expériences digitales inoubliables 
  image1:
    src: /Accueil_the.png
    alt: project_thé
  image2:
    src: /landing_page_desktop_peluche.jpg
    alt: project_peluche
  
  
  actions:
    - theme: brand
      text: Mes formations
      link: /formations/
    - theme: alt
      text: Mes projets
      link: /#mes-projets

---

<div class="m-0 md!pb-10 px-5 lg:px-5 pb-5" >
 
## Mes projets

<br/>
<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 content-center justify-center">
  <ProjectCard
    title="Les thés du mondes"
    href="https://www.behance.net/gallery/153322811/Maquette-site-vitrine-fictifs-Ths-du-Monde"
    image="/Accueil_the.png"
    description="Maquette de site vitrine pour une marque de thé bio"
   />

  <ProjectCard
    title="Mariée Sauvage"
    href="https://www.figma.com/proto/VNwXG9a8Bi28nGVvRSekyA/Mari%C3%A9e-Sauvage?page-id=60%3A38&node-id=337-228&viewport=231%2C171%2C0.03&t=G3Cc01n2qlgEXg0R-1&scaling=scale-down&content-scaling=z"
    image="/Accueil_mariee_sauvage_coupe.webp"
    description="Maquette de site pour une marque de robe de mariée"
  />

  <ProjectCard
    title="Sizodor"
    href="https://www.figma.com/proto/nMsZgDg1NYrGEVm3zODKfm/Sizodor?page-id=69%3A1261&node-id=67-443&viewport=1848%2C878%2C0.06&t=rGdaUooJefCVKPsx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A443"
    image="/Accueil_sizodor.png"
    description="Maquette de site pour un centre de coiffure"
  />
  <ProjectCard
    title="Cathcookiz"
    href="/portfolio/cathcookiz"
    image="/facebook_Profile_cathcookiz.png"
    description= "Templates Web de réseaux sociaux pour une marque de cookie"
  />
  <ProjectCard
    title="Rhône l'elixir du père pascale"
    href="https://www.behance.net/gallery/145658149/Affiche-et-banniere-de-vignoble"
    image="/Affiche_vin_bio.jpg"
    description="Affiche et bannière web afin de promouvoir la nouvelle bouteille du père Pascal"
  />
  <!-- <ProjectCard
    title="Sizodor"
    href="https://www.figma.com/proto/nMsZgDg1NYrGEVm3zODKfm/Sizodor?page-id=69%3A1261&node-id=67-443&viewport=1848%2C878%2C0.06&t=rGdaUooJefCVKPsx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A443"
    image="/Accueil_sizodor.png"
    description="Maquette de site pour un centre de coiffure"
  /> -->

</div>
  <div class="flex justify-center items-center"> 
</div>

<br/>
<br/>

### Pour en savoir un peu plus sur moi... 
<!-- https://tailwindflex.com/@steven-kuhn/about-me-section -->
<section class="overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-xl dark:shadow-none rounded-xl">
  <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
      <div class="grid items-center grid-cols-1">
        <h3 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">À propos de moi</h3>
          <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
            Passionnée par la création d'expériences digitales intuitives et esthétiques, je suis actuellement en alternance pour un Mastère en Direction Artistique UX/UI. Mes compétences en design graphique, UX design et UI design me permettent de concevoir des interfaces utilisateur à la fois fonctionnelles et visuellement attrayantes.
          </p>
          <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
            <span class="relative inline-block">
              <span class="absolute inline-block w-full bottom-0.5 h-2 bg-fuchsia-300 dark:bg-gray-800"></span>
              <span class="relative"> Mon profil vous intéresse ? </span>
            </span>
            <br class="block sm:hidden" />
            Contactez moi sur <a href="https://www.linkedin.com/in/catherinevu436-78/" title=""
              class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Linkedin</a>
          </p>
          <VPButton
            tag="button"
            size="medium"
            theme="brand"
            text="Plongez dans mon univers créatif"
            href="https://www.behance.net/catherinevu1"
            class=" hover:animate-bounce bg-brand-hover hover:bg-brand-hover mx-auto sm:mb-5"
            style="text-decoration: none;"
          />
      </div>
      <div class="relative">
        <VPImage image="/photo_identite.jpeg" alt="Me" class="relative rounded-xl h-full object-contain" />
      </div>
    </div>
  </div>
</section>
</div>


<script setup lang="ts">

import { VPButton, VPImage } from 'vitepress/theme'

import ProjectCard from './components/ProjectCard.vue'

</script>

<style scoped>

  /* .vp-doc {
    background-color: #d63ad8;
  } */
  
  h2 {
    align-items: center;
    text-align: center;
  }

  body {
    background-color: #f9f9f9;
  }

  .VPHero .main .name ,.VPHero .main .clip{
    font-size: 48px;
  }

  .VPHero .main .name { 
  /* ... other styles ... */
  animation: showup 3s infinite; /* Apply the animation */
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0); 
}

/* @keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
} */

  
  .VPHero .main .text{
    font-size: 36px;
  }
</style>
