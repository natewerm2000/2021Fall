<template>
  <div class="section">
      <h1 class="title">
          Feed Page
        



      </h1>
        <div class="columns">
            <div class="column is-one-third is-offset-one-third">

              <div class="post" v-for="p in posts" :key="p.src"> 
<post :post= "p"/>
  
              </div>
            </div>
            <div class = "post">

              </div>

            cichwiudjbhajwabd
          </div>
  </div>
</template>

<script>
import session from "../servics/posts";
import { GetWall } from "../services/session";
import post from './post.vue';

export default {
  components: { post },
data: ()=> ({
  posts: GetWall(session.user.handle)
})
}
</script>

<style>

</style>