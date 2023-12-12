<!-- sideBar -->
<template>
  <div class="flex flex-col h-full bg-gray-200">
    <div class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl font-bold">Diary Journal</h1>
    </div>

    <div class="flex-1 p-4 ">
      <div class="mt-4">
        <h2 class="text-lg font-semibold mb-2 text-blue-600">Home</h2>
        <input
          type="text"
          v-model="searchQuery"
          class="w-full p-2 border"
          placeholder="Search diary..."
        />
      </div>
    
      <nav>
        <ul class="space-y-2">
          <li class="text-blue-600 border-8 cursor-pointer ">
            <!-- <router-link :to="{name: 'mainDiary'}">New Entry</router-link> -->
          </li> 
          <li class="text-blue-600 border-8">
            <router-link :to="{name: 'diaryList'}">Add New Entry</router-link>
          </li>   
          <li class="text-blue-600 border-8">
            <router-link :to="{name: 'viewEntries'}">View All Entries</router-link>
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