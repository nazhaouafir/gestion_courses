<template>
     <div  class="dropdown" >
             <button v-if="!$auth.loggedIn" class="btn bg-gradient-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
               Connexion
             </button>
              <button v-else class="btn bg-gradient-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
               {{ $auth.user.name }}
             </button>
            <ul class="dropdown-menu px-2 py-3"  aria-labelledby="dropdownMenuButton">
      
              <li><NuxtLink  v-if="!$auth.loggedIn" to="/login" class="dropdown-item border-radius-md " >Se connecter</NuxtLink></li>
              <li><NuxtLink v-if="$auth.loggedIn" to="/dashboard"  class="dropdown-item border-radius-md" ><i class="fas fa-home"></i><span class="ps-3"> Tableau de bord</span ></NuxtLink></li>
               <li><NuxtLink  v-if="$auth.loggedIn && $auth.hasScope('teacher')" to="/mycourses" class="dropdown-item border-radius-md " ><i class="fas fa-newspaper"></i> <span class="ps-3">Mes Cours</span> </NuxtLink></li>
              <li><a v-if="$auth.loggedIn" @click="$auth.logout()" class="dropdown-item border-radius-md"><i class="fas fa-power-off"></i><span class="ps-3">Deconnexion</span></a></li>
            </ul>
          </div>
</template>