<template>
      <div>
    <div class="page-header top">
      <div class="container">
        <div class="row">
          <div class="page-register col-xl-6 col-lg-7 col-md-8 d-flex flex-column mx-auto">
            <div class="card card-plain mt-8">
              <div class="card-header pb-0 text-left bg-transparent">
                <h3 class="font-weight-bolder text-info text-gradient">Inscription</h3>
                <p class="mb-0">Connectez-vous avec votre adresse e-mail</p>
              </div>
              <div class="card-body">
              <form role="form text-left">
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Nom etPrénom" aria-label="Name" v-model="name" aria-describedby="email-addon">
                </div>
                <div class="mb-3">
                  <input class="form-control" type="file" id="formFile">
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Adresse e-mail" aria-label="Email" v-model="email" aria-describedby="email-addon">
                </div>
                <div class="mb-2">
                  <input type="password" class="form-control" placeholder="Mot de passe" aria-label="Password" v-model="password" aria-describedby="password-addon">
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" placeholder="Confirmer votre mot de passe"  aria-label="Password" v-model="password_confirmation" aria-describedby="password-addon">
                </div>
                <div class="form-check form-check-info text-left">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    J'ai lu et j'accepte les <a href="javascript:;" class="text-dark font-weight-bolder">Conditions Générales d'Utilisation </a>
                  </label>
                </div>
                <div class="text-center">
                  <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2">S'inscrire</button>
                </div>
                <p class="text-sm mt-3 mb-0">Vous avez déjà un compte ? <NuxtLink to="/login" class="text-dark font-weight-bolder">Connectez-vous</NuxtLink></p>
              </form>
            </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  layout: 'start-layout',

  data(){
    return{
      name:'',
      email:'',
      password: '',
      password_confirmation: '',
    }
  }
}
</script>
<style scoped>
.page-register{
  margin-top: -7rem;
}
</style>