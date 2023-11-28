
<template>
    <div>
      <div class="flex flex-col gap-4 mt-2 mb-6">
        <input v-model="newEntry.heading" placeholder="Enter heading" class="p-2 mb-2" />
        <input v-model="newEntry.content" placeholder="Enter content" class="p-2">
        <button @click="saveEntry" class="bg-blue-500 text-white p-2">Save</button>
      </div>
  
      <!-- Rendering the diary entry from the vue component I created (diaryEntry.vue) -->
      <diary-entry
        v-for="entry in entries"
        :key="entry.id"
        :entry="entry"
        @edit="editEntry"
        @delete="deleteEntry"
      ></diary-entry>
    </div>
  </template>
  
  <script>
  import diaryEntry from '../components/diaryEntry.vue';
  
  export default {
    components: {
      diaryEntry
    },
    data() {
      return {
        entries: [],
        newEntry: {
          heading: '',
          content: '',
        },
      };
    },
    methods: {
      saveEntry() {
        this.entries.push({
          id: Date.now(),
          heading: this.newEntry.heading,
          content: this.newEntry.content,
        });
        this.newEntry.heading = '';
        this.newEntry.content = '';
      },
      editEntry(entryToEdit) {
        const index = this.entries.findIndex(entry => entry.id === entryToEdit.id);
        this.entries[index] = { ...entryToEdit };
      },
      deleteEntry(entryToDelete) {
        this.entries = this.entries.filter(entry => entry.id !== entryToDelete.id);
      },
    },
  };
  </script>