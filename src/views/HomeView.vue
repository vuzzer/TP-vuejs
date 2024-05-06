<script setup>
import { popularMovie } from '@/data/movie';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<script>
export default {
  data(){
    return {
      products: null
    };
  },
  created(){
    popularMovie();
  }
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

