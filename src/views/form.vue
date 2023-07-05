<template>
  <div class="w-full max-w-lg m-auto bg-white p-8 md:shadow-md md:rounded-md">
    <h1 class=" text-3xl mb-6 font-extrabold">Drug stock form</h1>
    <form v-if="formOptions.facilities.length > 0">
      <label class="block text-xl font-medium mb-2" for="">Facility name</label>
      <select name="" id="" class="uppercase" v-model="rawFormFieldsData.facility">
        <option value="" disabled selected>Select facility</option>
        <option v-for="facility in formOptions.facilities" :value="facility">{{ facility }}</option>
      </select>
      <label class="block text-xl font-medium mb-2" for="">For end of month</label>
      <select name="" id="" class="uppercase" v-model="rawFormFieldsData.monthyear">
        <option v-for="(monthyear, index) in monthyearArray()" :key="index" :value="monthyear">{{ monthyear }}</option>
      </select>

      <div v-for="drug in formOptions.drugs" class="border-t border-slate-100 py-6">
        <h2 class="text-xl font-bold">{{ drug }}</h2>
        <FormBatch :batchNumber="batch" v-for="(batch, index) in formOptions.drugBatches[drug]">
          <template v-slot:stock>
            <input type="number" class="mt-2 mb-1" v-model="rawFormFieldsData[drug + ' b' + (index+1) + ' stock']">
          </template>
          <template v-slot:expiry>
            <input type="date" class="mt-2 mb-1" v-model="rawFormFieldsData[drug + ' b' + (index+1) + ' expiry']">
          </template>
        </FormBatch>
        <button v-if="formOptions.drugBatches[drug] < 3"
          @click.prevent="formOptions.drugBatches[drug] < 3 ? formOptions.drugBatches[drug] += 1 : undefined"
          class="uppercase text-sm font-medium mt-3 py-2 rounded-md text-[#0075EB]">
          + add batch
        </button>
        <div v-else>
          <p class="uppercase text-sm font-medium mt-3 py-2 text-neutral-600">
            max three batches per medicine</p>
          <p class="text-sm text-neutral-500 mt-2">If you have more than 3 batches then add any additional batch stocks to
            batch 3 using the same date</p>
        </div>
      </div>
      <!-- <div class="bg-[#F3F9FF] w-full p-8"> -->
      <button
        class="w-full p-3 shadow-lg border-b-2 border-blue-800 bg-blue-500 rounded-md text-lg uppercase text-white tracking-wider"
        @click.prevent="postData()">
        submit drug stock
      </button>
      <!-- </div> -->
    </form>
    <div v-else class="py-10">
      <Loading></Loading>
      <p class="text-center uppercase text-sm text-slate-400 font-bold mt-5">loading</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import getSheetsData from "../utils/getSheetsData"
import postSheetsData from "../utils/postData"

import FormBatch from "../components/form/batch.vue"
import Loading from "../components/loading.vue"

interface drugBatch {
  stock: number;
  expiry: Date;
}

interface drugBatches {
  1: drugBatch;
  2: drugBatch;
  3: drugBatch;
}

interface drugFormObj {
  [key: string]: drugBatches;
}

interface formOptions {
  facility: string;
  monthyear: string;
  drugs: drugFormObj;
}

const formOptions = ref<{ facilities: string[], drugs: string[], drugBatches: { [key: string]: number } }>({ facilities: [], drugs: [], drugBatches: {} })
onMounted(async () => {
  const data = await getSheetsData()
  formOptions.value.facilities = data.facilities
  formOptions.value.drugs = data.drugs
  createObjectForBatches()
  console.log(data);

  //build rawfields object
  rawFormFieldsData.value = convertArrayToObject(data.rawFormFields)
  rawFormFieldsData.value.monthyear = monthyearArray()[0]
})

function createObjectForBatches() {
  const object: any = {}
  formOptions.value.drugs.forEach(drug => {
    object[drug] = 1
  });
  formOptions.value.drugBatches = object;
}

const rawFormFieldsData = ref<{}>({})
function convertArrayToObject(arr) {
  return arr.reduce(function (obj, item) {
    obj[item] = '';
    return obj;
  }, {});
}
function monthyearArray() {
  var months = [];
  var currentDate = new Date();

  for (var i = 0; i < 12; i++) {
    var month = currentDate.toLocaleString('default', { month: 'short' }).toLowerCase();
    var year = currentDate.getFullYear();
    var formattedDate = month + '-' + year;
    months.push(formattedDate);

    currentDate.setMonth(currentDate.getMonth() - 1); // Move to the previous month
  }

  return months;
}

function postData() {
  console.log(new Date);
  console.log(rawFormFieldsData.value.facility);
  
  if (rawFormFieldsData.value.facility === '') {
    console.log('no facility selected');
    return
  }
  // rawFormFieldsData.timestamp.value = Date
  const postData = { rowData: convertObjectValuesToArray(rawFormFieldsData.value) };
  console.log(postData);
  
  // return
  postSheetsData(postData)
}

function convertObjectValuesToArray(obj) {
  return Object.values(obj);
}
</script>

<style>
input {
  @apply bg-gray-100/75 p-4 px-5 shadow-inner rounded w-full;
}

select {
  @apply rounded w-full mb-6 p-4 text-[#0075EB] bg-[#E0F0FF] border-b-[3px] border-blue-200 shadow-sm tracking-wider;
}
</style>
