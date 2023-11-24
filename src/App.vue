<template>
  <div id="app">
    <div>
      <mainDiary/>
    </div>
  </div>
</template>

<script>

import mainDiary from './components/mainDiary.vue'; //I have imported this from mainDIary.vue

export default {
  name: 'App',
  components: {
    mainDiary
  },
};
</script>

<style>

</style>
