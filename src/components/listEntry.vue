<!-- listEntry.vue -->
<template>
    <div>
      <!-- I rendered the diary entry from the vue component I created (diaryEntry.vue) -->
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
  import axios from "axios";
  import diaryEntry from "./diaryEntry.vue"; 
  export default {
    components: {
      diaryEntry,
    },
    props: {
      entries: Array, // This is theProp to receive entries from the parent component
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
  