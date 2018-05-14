<template>
  <body id="top">
  <navbar></navbar>
  <div class="page-content">
    <div>
      <profile></profile>
      <about></about>
      <skills></skills>
      <portfolio></portfolio>
      <experience></experience>
      <education></education>
      <!--<references></references>-->
      <contact></contact>
    </div>
  </div>
  <footer></footer>
  </body>
</template>

<script>
  import Footer from "./Footer";
  import Contact from "./Contact";
  import Education from "./Education";
  import Experience from "./Experience";
  import Portfolio from "./Portfolio";
  import Skills from "./Skills";
  import About from "./About";
  import References from "./References";
  import Navbar from "./Navbar";
  import Profile from "./Profile";

  export default {
    name: 'Main',
    components: {
      Profile,
      Navbar,
      References,
      About,
      Skills,
      Portfolio,
      Experience,
      Education,
      Contact,
      Footer,
    },
    data() {
      return {}
    }
  }
</script>

<style>
</style>
