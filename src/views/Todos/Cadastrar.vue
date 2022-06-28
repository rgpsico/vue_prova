<template>

  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Cadastrar Usuário</h5>
            <form method="POST" @submit.prevent="createUser">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="name" placeholder="name" v-model="dado.name">
                <label for="floatingInput">Name </label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="dado.email">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model='dado.password'>
                <label for="floatingPassword">Password</label>
              </div>

                <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password-confirme" placeholder="Password" v-model='dado.password_confirme'>
                <label for="floatingPassword">Confirme Password</label>
              </div>

          
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Enviar</button>
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


 import auth from "@/services/auth.service";
import email from "@/services/email.service";
import { reactive } from "vue";
// import router from "@/router/index.js";
export default {
  name: "Cadastrar",
  setup() {
    const dado = reactive({
      name:'',
      email:'' ,
      password: '',
      password_confirme: '',
    });

    

     const createUser = () => {    
        auth.createUser({ ...dado })
        .then()
        .finally(() => (dado.loading = false));       
        email.send( {name:dado.name,email:dado.email })
     };

    return {
      createUser,
      dado 
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
