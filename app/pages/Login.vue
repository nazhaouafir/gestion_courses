<template>
      <section>
    <div class="section-height-30">
      <div class="container">
        <div class="row">
          <div class="page-login col-xl-6 col-lg-7 col-md-8 d-flex flex-column mx-auto">
            <div class="card card-plain mt-8">
              <div class="card-header pb-0 text-left bg-transparent">
                <h3 class="font-weight-bolder text-info text-gradient">Connexion</h3>
                <p class="mb-0 ">Connectez-vous avec votre adresse e-mail</p>
              </div>
              <div class="card-body">
                <form @submit.prevent="userLogin" role="form text-left">
                
                 <label>E-mail</label>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder="E-mail" v-model="login.email" aria-label="E-mail" aria-describedby="email-addon">
                  </div>
                  <label>Mot de passe</label>
                  <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Mot de passe" v-model="login.password" aria-label="Password" aria-describedby="password-addon">
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked="">
                    <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">SE CONNECTER</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  Vous n'avez pas encore de compte ?
                  <NuxtLink to="/register" class="text-info text-gradient font-weight-bold"> Inscrivez-vous</NuxtLink>
                </p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </section>
</template>
      <script>
      export default {
        layout: "start-layout",
        middleware: 'auth',
   
        data(){
          return  {
              login :{
                email: null,
                password: null
              }
          }
        },
        methods: {
          async userLogin(){
            try{
                   let response = this.$auth.loginWith('laravelJWT', {
                    data: {
                      email: this.login.email,
                      password: this.login.password
                    }
                  }).then(()=>        this.$toast.success(`Welcome Back ${this.$auth.user.name}`, {
                                      position: "bottom-left",
                                      timeout: 5000,
                                      closeOnClick: true,
                                      pauseOnFocusLoss: false,
                                      pauseOnHover: true,
                                      draggable: true,
                                      draggablePercent: 0.88,
                                      showCloseButtonOnHover: false,
                                      hideProgressBar: false,
                                      closeButton: "button",
                                      icon: true,
                                      rtl: false
                                    })
                               ).catch(()=>this.$toast.error("Error in Logged In", {
                                              position: "bottom-left",
                                              timeout: 5000,
                                              closeOnClick: true,
                                              pauseOnFocusLoss: false,
                                              pauseOnHover: true,
                                              draggable: true,
                                              draggablePercent: 0.88,
                                              showCloseButtonOnHover: false,
                                              hideProgressBar: false,
                                              closeButton: "button",
                                              icon: true,
                                              rtl: false
                                            })
                                        )
              console.log(response)
             
         
            }catch(err){
              console.error(err)
            }
         
          }
        }
      }
  </script>
<style scoped>

.page-login{
  margin-top:-6rem !important;
}
</style>