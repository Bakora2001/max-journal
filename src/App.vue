<!-- App.vue -->
<template>
  <div class="md:flex sm:fle-col" id="app">
    <div class="sm:full h-auto md:w-[500px] md:h-[600px]">
      <sideBar/>
    </div>
    <div class="bg-[logo.png] w-full flex md:flex-col px-4">
      <mainDiary/>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import sideBar from './components/sideBar.vue';
import mainDiary from './components/mainDiary.vue'; //I have imported this from mainDIary.vue

export default {
  name: 'App',
  components: {
    mainDiary,
    sideBar
  },
};
</script>

<style>

</style>
