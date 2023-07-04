<template>
  <div class="w-full max-w-lg m-auto bg-white p-8 shadow-md rounded-md">
    <h1 class=" text-3xl mb-6 font-extrabold">Drug stock form</h1>
    <form v-if="formOptions.facilities.length > 0">
      <label class="block text-lg font-bold mb-2" for="">Facility name</label>
      <select name="" id="" class="mb-6">
        <option v-for="facility in formOptions.facilities" value="">{{ facility }}</option>
      </select>
      <div v-for="drug in formOptions.drugs" class="border-t border-slate-300 py-6">
        <h2 class="text-xl font-bold">{{ drug }}</h2>
        <FormBatch :batchNumber="batch" v-for="batch in formOptions.drugBatches[drug]"></FormBatch>
        <button v-if="formOptions.drugBatches[drug] < 3" @click.prevent="formOptions.drugBatches[drug] < 3 ? formOptions.drugBatches[drug] += 1 : undefined"
          class="uppercase text-xs font-medium mt-6 p-1.5 px-3 rounded-md bg-sky-800 text-white">add
          another batch</button>
        <p v-else
          class=" inline-block uppercase text-xs font-medium mt-6 p-1.5 px-3 rounded-md border border-slate-300">max batches</p>
      </div>
      <button @click.prevent="postSheetsData({ data: { value1: 1, value: 2 } })">
        submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import getSheetsData from "../utils/getSheetsData"
import postSheetsData from "../utils/postData"
import FormBatch from "../components/form/batch.vue"
import { onMounted, ref } from "vue";

const formOptions = ref<{ facilities: string[], drugs: string[], drugBatches: { [key: string]: number } }>({ facilities: [], drugs: [], drugBatches: {} })
onMounted(async () => {
  const data = await getSheetsData()
  formOptions.value.facilities = data.facilities
  formOptions.value.drugs = data.drugs
  createObjectForBatches()
})

function createObjectForBatches() {
  const object: any = {}
  formOptions.value.drugs.forEach(drug => {
    object[drug] = 1
  });
  formOptions.value.drugBatches = object;
}


</script>

<style>
input,
select {
  @apply bg-gray-100 p-3 px-4 shadow-inner rounded w-full;
}</style>
