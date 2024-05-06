<script setup>
import { popularMovie, getUrlImage } from '@/data/movie';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<script>
export default {
  data(){
    return {
      products: null,
      image: null
    };
  },
  async created(){
    this.products = await popularMovie();
    this.image = getUrlImage('tMefBSflR6PGQLv7WvFPpKLZkyk.jpg');
  }
};
</script>

<template>
  <main>
    <img :src="image" alt="" srcset="">
    {{products}}
  </main>
</template>

