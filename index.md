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

#  definir le besoin du recruteur 
# présentation
# Dire que je suis la personne idéal formation et expériences et savoir etre donc comment je repond à leur besoin

---

## Mes projets
<!-- <div>Dans cette partie, vous pourrez observer les projet que j'ai pu créer lors de mon année en formation de design. vous les retrouverez ci-dessous:</div>
<br> -->
<br>
<div class="grid grid-cols-2 gap-10 content-center">
  <ProjectCard
    title="Les thés du mondes"
    href="https://www.behance.net/gallery/153322811/Maquette-site-vitrine-fictifs-Ths-du-Monde"
    image="/Accueil_the.png"
    description="Maquette de site vitrine fictif pour une marque de thé"
  />

  <ProjectCard
    title="Mariée Sauvage"
    href="https://www.figma.com/proto/VNwXG9a8Bi28nGVvRSekyA/Mari%C3%A9e-Sauvage?page-id=60%3A38&node-id=337-228&viewport=231%2C171%2C0.03&t=G3Cc01n2qlgEXg0R-1&scaling=scale-down&content-scaling=z"
    image="/Accueil_mariee_sauvage_coupe.webp"
    description="Maquette de site e-commerce pour une marque de robe de mariée"
  />

  <ProjectCard
    title="Sizodor"
    href="https://www.figma.com/proto/nMsZgDg1NYrGEVm3zODKfm/Sizodor?page-id=69%3A1261&node-id=67-443&viewport=1848%2C878%2C0.06&t=rGdaUooJefCVKPsx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A443"
    image="/Accueil_sizodor.png"
    description="Maquette de site e-commerce pour une marque de peluche"
  />

</div>
<div class="flex justify-center items-center">
  <VPButton
    tag="button"
    size="medium"
    theme="brand"
    alin-items="center"
    text="Plongez dans mon univers créatif"
    href="https://www.behance.net/catherinevu1"
    class="mt-10 hover:bg-brand-hover"
  />
</div>


## A propos de moi
<br>
<!-- <div class="grid grid-cols-2 gap-10 content-center"> -->
  <div>
   Passionnée par la création d'expériences digitales intuitives et esthétiques, je suis actuellement en alternance pour un Mastère en Direction Artistique UX/UI. Mes compétences en design graphique, UX design et UI design me permettent de concevoir des interfaces utilisateur à la fois fonctionnelles et visuellement attrayantes.
  </div>
  <img href="/photo_identite.jpeg"  />

<!-- </div> -->



<script setup lang="ts">

import { VPButton } from 'vitepress/theme'

import ProjectCard from './components/ProjectCard.vue'

</script>

<style>
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

  .VPHero .main .text{
    font-size: 36px;
  }

  .VPHero .VPImage {
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: right;
    margin-bottom: 20px;
    position: absolute, top, left;
    
  }

 

  .VPImage1{
    filter: drop-shadow(5px 5px 5px gray);
    background-size: 500px;
    z-index: -2;
    position: absolute;
    left: 40px;
    width: 500px; /* Set a width for the image */
    height: auto;  
  }

  .VPImage2{
    filter: drop-shadow(10px 10px 5px gray);
    background-size: 500px;
    z-index: -1;
    left: 190px;
    top: 120px;
    position: absolute;
    width: 400px; /* Set a width for the image */
    height: auto;
  }

.VPHome .VPButton {
  text-decoration: none;
}

  .container-card{
  display: flex;
  flex-direction: column;

  }

  .VPHome .VPButton {
    text-decoration: none;
  }

  .container-card{
    display: flex;
    flex-direction: column;

  }

  .column {
    float: left;
    width: 90%;
    padding: 0 10px;
  }

  .row {margin: 0 -5px;}

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;}

  * {
    box-sizing: border-box;
  }

</style>
