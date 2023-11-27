<template>
  <div class="flex flex-col h-full bg-gray-200">
    <div class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl font-bold">Diary Journal</h1>
    </div>

    <div class="flex-1 p-4 ">
      <div class="mt-4">
        <h2 class="text-lg font-semibold mb-2">Search</h2>
        <input
          type="text"
          v-model="searchQuery"
          class="w-full p-2 border rounded"
          placeholder="Search diary..."
        />
      </div>
    
      <nav>
        <ul class="space-y-2">
          <li class="text-black-500 ">
            Home
          </li>
          <li class="text-black-500">
            <router-link to="/../components/mainDiary">Entries</router-link>
          </li>
          <li class="text-black-500 ">
            New Entry
          </li>
          
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>


<style></style>