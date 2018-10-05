<template>
  <div class="profile-page">
    <div class="wrapper">
      <div class="page-header page-header-small" data-fiter-color="green">
        <div class="page-header-image" data-parallax="true" :style="{'background-image': `url(${profileBackground})`}"></div>
        <div class="container">
          <div class="content-center">
            <div class="cc-profile-image"><a href="#"><img :src="profilePic" alt="Image"/></a>
            </div>
            <div class="h2 title">Antoine Zanardi</div>
            <p class="category text-white">Développeur Web Full-Stack</p>
            <a class="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
               data-aos-anchor="data-aos-anchor" v-smooth-scroll="{duration: 1000}">Me contacter</a>
            <!--<a class="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Mon CV</a>-->
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="button-container">
              <a class="btn btn-info btn-round btn-lg btn-icon" target="_blank"
                 href="https://www.linkedin.com/in/antoinezanardi/" data-toggle="tooltip"
                 title="Rejoignez mon réseau"><i class="fab fa-linkedin-in fa-2x fa-btn"></i></a>
              <a class="btn btn-primary btn-round btn-lg btn-icon"
                 href="https://github.com/antoinezanardi" target="_blank" data-toggle="tooltip"
                 title="Découvrez mes projets"><i class="fab fa-github fa-2x fa-btn"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import profileBackground from "@/assets/images/cc-bg-1.jpg";
  import profilePic from "@/assets/images/antoine.JPG";
  export default {
    name: "Profile",
    data: function() {
      return {
        profileBackground,
        profilePic
      }
    }
  }
</script>

<style scoped>

</style>
