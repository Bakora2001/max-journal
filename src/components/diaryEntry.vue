<!-- diaryEntry -->
<template>
    <div class="p-4 border mb-4">
        <h3 class="text-xl font-semibold mb-4" >{{ entry.heading }}</h3>
        <p class="mb-4">{{ entry.content  }}</p>

        <div class="flex justify-end">
            <button @click="editEntry" class="text-blue-500 mr-2">Edit</button>
            <button @click="deleteEntry" class="text-red-500">  Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        entry: Object,
    },
    methods: {
        editEntry() {
            this.$emit('edit', this.entry);
        },
        deleteEntry() {
            this.$emit('delete', this.entry);
        },
    },
};
</script>

<style scoped>

</style>