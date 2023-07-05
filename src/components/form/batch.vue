<template>
    <p class="text-lg mt-3">Batch {{ batchNumber }}</p>
    <div class="flex gap-6">
        <div class="w-1/2">
            <slot name="stock"></slot>
            <label class="block text-sm text-neutral-500" for="">Stock on hand</label>
        </div>
        <div class="w-1/2">
            <slot name="expiry"></slot>
            <label class="block text-sm text-neutral-500" for="">Expiry date</label>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{ 'batchNumber': number }>();
</script>

