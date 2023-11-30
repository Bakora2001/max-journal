<!-- App.vue -->
<template>
  <div class="md:flex sm:fle-col" id="app">
    <div class="sm:full h-auto md:w-[500px] md:h-[600px]">
      <sideBar/>
    </div>
    <div class=" w-full flex md:flex-col px-4">
   
      <listEntry :entries="entries"/> <!-- Pass entries as a prop to the listEntry -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar.vue';
import listEntry from './components/listEntry.vue'; // Import listEntry component         

export default {
  name: 'App',
  components: {
    listEntry,
    sideBar
  },
};
</script>

<style>
</style>
