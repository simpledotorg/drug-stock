<template>
    <p class="text-lg mt-3">Batch {{ batchNumber }}</p>
    <div class="flex gap-6">
        <div class="w-1/2">
            <label class="block my-2" for="">Stock on hand</label>
            <input type="number">
        </div>
        <div class="w-1/2">
            <label class="block my-2" for="">Expiry date</label>
            <input type="date">
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{ 'batchNumber': number }>();
</script>

