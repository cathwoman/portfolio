---
# https://vitepress.dev/reference/default-theme-home-page
layout: home 

hero:
  name: "Catherine VU"
  text: Prépare une alternance en Mastère Direction artistique UX UI
  tagline: Créer des expériences digitales inoubliables 
  image1:
    src: /Acceuil_PORTFOLIOS.png
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
      link: /projets/

#  definir le besoin du recruteur 
# présentation
# Dire que je suis la personne idéal formation et expériences et savoir etre donc comment je repond à leur besoin

---

![alt text](/Accueil_mariee_sauvage_coupe.png)

<div class="container-project">
  <div class="container-the" >
        <VPButton
          tag="button"
          size="medium"
          theme="brand"
          alin-items="center"
          text="Plonger dans mon univers créatif"
          href="https://www.behance.net/catherinevu1"
        />
    
  </div>
</div>

<script setup lang="ts">

import { VPButton } from 'vitepress/theme';

</script>

<style>
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

.container, .container-the, .container-project{
  display: flex;
  justify-content: center;

}
</style>
