<template>
    <div id="app">
        <NavBar/>
        <div class="page-content">
            <MyProfile/>
            <AboutMe/>
            <MySkills/>
            <MyPortfolio/>
            <MyExperience/>
            <MyEducation/>
        </div>
        <PageFooter/>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Tooltip } from "bootstrap";
import NavBar from "./components/NavBar";
import MyProfile from "./components/MyProfile";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyPortfolio from "./components/MyPortfolio";
import MyExperience from "./components/MyExperience";
import MyEducation from "./components/MyEducation";
import PageFooter from "./components/PageFooter";

onMounted(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]"));
    tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});
</script>