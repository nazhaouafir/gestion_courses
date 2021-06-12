
import webpack from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
  
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {
        src : "https://kit.fontawesome.com/42d5adcbca.js",
        
      },
     
      {
        src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        },
      {
       
      src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
      },
      
    ]
  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
    "~/assets/css/nucleo-icons.css",
    "~/assets/css/nucleo-svg.css",
    "~/assets/css/soft-design-system.css",
    "~/node_modules/remixicon/fonts/remixicon.css",
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: "~/plugins/aos", mode: "client" },

     ],

     purgeCSS: {
      whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration","data-aos-anchor-placement", "fade-right","fade-up", "zoom-in", "zoom-out"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
target: "server",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-purgecss',
    '@nuxtjs/composition-api/module'

    
  ],
 googleFonts: {
    /* module options */
    families: {
      Roboto: true,
      'Nunito': true,
      // 'Josefin+Sans': true,
      // 'Noto+Sans+JP':true,
      'Open Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'dropzone-nuxt',
    "vue-toastification/nuxt",
  ],
  toast: {
  
      },
 
  loading: true,

  axios: {
    
    baseURL: 'http://localhost:8000/api', // Used as fallback if no runtime config is provided
    
    common: {
      'Accept': 'application/json, text/plain, */*'
    },
   
 
  },
  auth: {
        token: {
          type: 'Bearer',
                prefix: '_token.'
    },
    localStorage: {
      prefix: 'auth.'
    },
    // redirect: {
    //   login: "/login",
    //   logout: "/login",
    //   callback: "/login",
    //   home: '/'
    // },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/'
      }
    },
    scopeKey: 'role_id',

    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url : 'http://127.0.0.1:8000',

        endpoints : {
          login: { url : '/api/auth/login', method: 'post' },
          logout :{ url : '/api/auth/logout', method: 'post'},
          refresh:{ url : '/api/auth/refresh', method: 'post'},
          user : { url : '/api/auth/user-profile', method:'get'}
        },
        token:{
          property: 'access_token',
          maxAge: 60*60
        },
        refreshToken:{
          maxAge: 20160 * 60
        },
      },
    }
  },
mode: "universal",

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  
  }
}
