---
# https://vitepress.dev/reference/default-theme-home-page
layout: home 

hero:
  name: "Mon Porte-folio"
  text: "Vous trouverez ici mes projet en design web"
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
  
  


features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup lang="ts">
</script>

<style>
.VPHero .main .name ,.VPHero .main .clip ,.VPHero .main .text{
  font-size: 48px;
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
</style>
