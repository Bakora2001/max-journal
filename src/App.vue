<template>
  <div class="md:flex sm:fle-col" id="app">
    <div class="sm:full h-auto md:w-[500px] md:h-[600px]">
      <sideBar @entry-saved="navigateToEntries"/>
    </div>
    <div class="w-full px-4">
      <mainDiary @entry-saved="navigateToEntries"/>
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
  methods: {
    navigateToEntries() {
      this.$router.push('/mainDiaryVue');
    }
  }
};
</script>

<style>

</style>
