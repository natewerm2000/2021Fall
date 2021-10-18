<template>
  <div class="container">
    <div class="column">
      <div class="column">

      <Nav/>
      <Messages/>
        <router-view/>
      </div>
    </div>
    
    
  </div>
</template>

<style lang="scss">

</style>

<script> 
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
    Messages
  }
} 
</script>