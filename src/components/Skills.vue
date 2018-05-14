<template>
  <div class="section" id="skill">
    <div class="container">
      <div class="h4 text-center mb-4 title">Compétences informatiques</div>
      <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span class="progress-badge"
                                                                     id="badge-html"><i
                class="fab fa-html5"></i> <span>HTML</span></span>
                <div class="progress">
                  <div id="progress-html" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                       style="width: 90%;"></div>
                  <span class="progress-value">90%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-css"
                                                                     class="progress-badge"><i
                class="fab fa-css3-alt"></i> <span>CSS</span></span>
                <div class="progress">
                  <div id="progress-css" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                       style="width: 70%;"></div>
                  <span class="progress-value">70%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-js"
                                                                     class="progress-badge"><i
                class="fab fa-js"></i> <span>JavaScript</span></span>
                <div class="progress">
                  <div id="progress-js" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                       style="width: 85%;"></div>
                  <span class="progress-value">85%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-vuejs"
                                                                     class="progress-badge"><i
                class="fab fa-vuejs"></i> <span>VueJS <i>{framework js}</i></span></span>
                <div class="progress">
                  <div id="progress-vuejs" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                       style="width: 75%;"></div>
                  <span class="progress-value">75%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-php"
                                                                     class="progress-badge"><i
                class="fab fa-php"></i> <span>PHP</span></span>
                <div class="progress">
                  <div id="progress-php" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                       style="width: 95%;"></div>
                  <span class="progress-value">95%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-codeigniter"
                                                                     class="progress-badge"><i
                class="fas fa-fire"></i> <span>CodeIgniter <i>{framework php}</i></span></span>
                <div class="progress">
                  <div id="progress-codeigniter" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                       style="width: 90%;"></div>
                  <span class="progress-value">90%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-mysql"
                                                                     class="progress-badge"><i
                class="fas fa-database"></i> <span>MySQL</span></span>
                <div class="progress">
                  <div id="progress-mysql" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                       style="width: 85%;"></div>
                  <span class="progress-value">85%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="progress-container progress-primary"><span id="badge-mongodb"
                                                                     class="progress-badge"><i
                class="fas fa-leaf"></i> <span>MongoDB</span></span>
                <div class="progress">
                  <div id="progress-mongodb" class="progress-bar progress-bar-primary"
                       data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                       role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                       style="width: 75%;"></div>
                  <span class="progress-value">75%</span>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-md-12 text-center">
              <h5>Mes outils</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <i id="tool-linux" class="my-tool fab fa-linux fa-3x" data-toggle="tooltip"
                 title="Je travaille et déploie mes travaux web sur Linux, considéré comme le meilleur système d'exploitation pour le web"></i>
              <i id="tool-git" class="my-tool fab fa-git fa-3x" data-toggle="tooltip"
                 title="J'utilise Git pour le versioning de mes projets"></i>
              <i id="tool-node" class="my-tool fab fa-node-js fa-3x" data-toggle="tooltip"
                 title="NodeJS est un atout indispensable pour tous mes projets en Javascript"></i>
              <i id="tool-css" class="my-tool fab fa-css3-alt fa-3x" data-toggle="tooltip"
                 title="J'ai énormément d'outil de design à ma disposition comme Bootstrap, MaterializeCSS ou encore Font Awesome"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped>

</style>
