<!-- mainDiary.vue -->
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
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      entries: [],
      newEntry: {
        heading: "",
        content: "",
      },
    };
  },
  created() {
    this.fetchEntries();
  },
  methods: {
    async fetchEntries() {
      try {
        const response = await axios.get("http://localhost:3000/entries");
        this.entries = response.data;
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    },
    async saveEntry() {
      try {
        const response = await axios.post("http://localhost:3000/entries", {
          id: Date.now(),
          heading: this.newEntry.heading,
          content: this.newEntry.content,
        });
        this.entries = response.data;
        this.newEntry.heading = "";
        this.newEntry.content = "";
        // After saving, it fetch the new list of entries after saving a new one
        this.fetchEntries();
      } catch (error) {
        console.error("Error saving entry:", error);
      }
    },
    async editEntry(entryToEdit) {
      try {
        const response = await axios.put(
          `http://localhost:3000/entries/${entryToEdit.id}`,
          entryToEdit
        );
        const index = this.entries.findIndex((entry) => entry.id === response.data.id);
        this.$set(this.entries, index, response.data);
      } catch (error) {
        console.error("Error editing entry:", error);
      }
    },
    
    async deleteEntry(entryToDelete) {
      try {
        await axios.delete(`http://localhost:3000/entries/${entryToDelete.id}`);
        this.entries = this.entries.filter((entry) => entry.id !== entryToDelete.id);
      } catch (error) {
        console.error("deleting entry error:", error);
      }
    },
  },
};
</script>
