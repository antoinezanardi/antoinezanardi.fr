<template>
  <div id="app">
    <Navbar/>
    <div class="page-content">
      <Profile/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Education/>
<!--      <Contact/>-->
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default {
    name: "app",
    components: {
        Footer,
        Education,
        Experience,
        Portfolio,
        Skills,
        About,
        Profile,
        Navbar,
    },
};
</script>

<style></style>