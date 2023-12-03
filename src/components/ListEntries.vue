<!-- ListEntries.vue -->
<template>
  <div>
    <div v-if="filteredEntries && filteredEntries.length > 0">
      <diary-entry
        v-for="entry in filteredEntries"
        :key="entry.id"
        :entry="entry"
        @edit="editEntry"
        @delete="deleteEntry"
      ></diary-entry>
    </div>
    <!-- <div v-else>
      <p>No entries available.</p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['entries', 'searchQuery'],
  computed: {
    filteredEntries() {
      if (!this.entries || !this.searchQuery) {
        return null;
      }
      return this.entries;
    },
  },
  methods: {
    async editEntry(entryToEdit) {
      try {
        await axios.put(`http://localhost:3000/entries/${entryToEdit.id}`, entryToEdit);
      }
       catch (error) {
        console.error('Error editing entry:', error);
      }
    },

    async deleteEntry(entryToDelete) {
      try {
        await axios.delete(`http://localhost:3000/entries/${entryToDelete.id}`);
      }
       catch (error) {
        console.error('deleting entry error:', error);
      }
    },
  },
};
</script>
