<!-- listEntries.vue
<template>
  <div>
    <diary-entry
      v-for="entry in filteredEntries"
      :key="entry.id"
      :entry="entry"
      @edit="editEntry"
      @delete="deleteEntry"
    ></diary-entry>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['entries', 'searchQuery'],
  computed: {
    filteredEntries() {
      return this.entries.filter((entry) =>
        entry.heading.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
    methods: {
      async editEntry(entryToEdit) {
        try {
          await axios.put(
            `http://localhost:3000/entries/${entryToEdit.id}`,
            entryToEdit
          );
          // Handle edit logic if needed
        } catch (error) {
          console.error("Error editing entry:", error);
        }
      },
      
      async deleteEntry(entryToDelete) {
        try {
          await axios.delete(`http://localhost:3000/entries/${entryToDelete.id}`);
          // Handle delete logic if needed
        } catch (error) {
          console.error("deleting entry error:", error);
        }
      },
    },
  };
  </script>
   -->