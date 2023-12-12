<!-- mainDiary.vue -->
<template>
  <div>
    <div class="flex flex-col gap-4 mt-2 mb-6">
      <input v-model="newEntry.heading" placeholder="Enter heading" class="p-2 mb-2" />
      <input v-model="newEntry.content" placeholder="Enter content" class="p-2" />
      <button @click="saveEntry" class="bg-blue-500 text-white p-2">Save</button>
    </div>
    <router-link :to="{ name: 'viewEntries' }">View All Entries</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newEntry: {
        heading: '',
        content: '',
      },
    };
  },
  methods: {
    async saveEntry() {
      try {
        const response = await axios.post('http://localhost:3000/entries', {
          id: Date.now(),
          heading: this.newEntry.heading,
          content: this.newEntry.content,
        });
        // Emit the new entry to the parent (App.vue)
        this.$emit('entrySaved', response.data);
        this.newEntry.heading = '';
        this.newEntry.content = '';
      } catch (error) {
        console.error('Error saving entry:', error);
      }
    },
  },
};
</script>
