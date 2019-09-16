<template>
  <div class="section" id="contact">
    <div class="cc-contact-information" :style="{'background-image': `url(${mapBackground})`}">
      <div class="container">
        <div class="cc-contact">
          <div class="row">
            <div class="col-md-9">
              <div class="card mb-0" data-aos="zoom-in">
                <div class="h4 text-center title">Me contacter</div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card-body">
                      <form action="https://formspree.io/antoine.zanardi@epitech.eu" method="POST">
                        <div class="p pb-3">N'hésitez pas à me contacter pour me faire part d'une idée de projet!
                        </div>
                        <div class="row mb-3">
                          <div class="col">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="fa fa-user-circle"></i>
                              </span>
                              <input class="form-control" type="text" name="name" placeholder="Votre nom"
                                     required="required"/>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="fa fa-lightbulb"></i>
                              </span>
                              <input class="form-control" type="text" name="Subject" placeholder="Sujet"
                                     required="required"/>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col">
                            <div class="input-group"><span class="input-group-addon"><i
                              class="fa fa-envelope"></i></span>
                              <input class="form-control" type="email" name="_replyto"
                                     placeholder="Votre email" required="required"/>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col">
                            <div class="form-group">
                              <textarea class="form-control" name="message"
                                                                          placeholder="Votre message ici"
                                                                          required="required"></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <button class="btn btn-primary" type="submit">Envoyer</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="mb-0"><strong>Adresse </strong></p>
                      <p class="pb-2">13 rue du Chevalier La Barre, Friville-Escarbotin, France</p>
                      <p class="mb-0"><strong>Téléphone</strong></p>
                      <p class="pb-2">06 48 92 08 23</p>
                      <p class="mb-0"><strong>Email</strong></p>
                      <p>antoine.zanardi@epitech.eu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapBackground from "@/assets/images/staticmap.png";
export default {
    name: "Contact",
    data: function() {
        return {
            mapBackground,
        };
    },
};
</script>

<style scoped>

</style>