<template>
  <form class="section" @submit.prevent= "login">
      <h1 class="title">
          Login page
      </h1>
  </form>
</template>


<script>
import Session from "../services/session";
export default {
data: ()=>){
    email: null,
    password: null
    Session

}),
methods: {
    login(){
        this.Session.Login(this.email, this.password, this.Session);
    }
    }
}
</script>

<style>

</style>