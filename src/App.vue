<template>
  <div class="bg-[url(journal5.avif)] md:flex sm:fle-col" id="app">
    <div class="sm:full h-auto md:w-[500px] md:h-[600px]">
      <sideBar />
    </div>
    <div class="w-full flex md:flex-col px-4">
      <router-view :entries="entries" @entrySaved="updateEntries" />
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar.vue';

export default {
  name: 'App',
  components: {
    sideBar,
  },
  data() {
    return {
      entries: [],
    };
  },
  methods: {
    async updateEntries(entry) {
      this.entries.push(entry);
    },
  },
};
</script>