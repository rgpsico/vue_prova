<template>

  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form method="POST" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="dado.email">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model='dado.password'>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
            
            
           
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src


import auth from "../services/auth.service";
import Cookie from 'js-cookie'
import router from '@/router/index.js'
import { reactive } from "vue";
// import router from "@/router/index.js";
export default {
  name: "login",
  setup() {

    const dado = reactive({
      email:'' ,
      password: '',
    });

    const login = () => {
     Cookie.remove('token')
      auth.login({ ...dado })
        .then((res)=>{       
             Cookie.set('token',res.data.token)
             router.push({name:'todos.index'})
        })
        .finally(() => (dado.loading = false));
    };

    return {
      login,
      dado,
    };
  },
};

</script>



<style scoped>
body {
    background: #007bff;
    background: linear-gradient(to right, #0062E6, #33AEFF);
  }
  
  .btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
  }
  
  .btn-google {
    color: white !important;
    background-color: #ea4335;
  }
  
  .btn-facebook {
    color: white !important;
    background-color: #3b5998;
  }
</style>
