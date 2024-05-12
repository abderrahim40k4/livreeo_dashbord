<template class="w-4/5">
    <div class="h-full p-16 w-4/5 flex justify-center items-center">
      <div class="w-full h-full pb-10">

        <router-link to="/add-pack" class="w-full flex flex-row items-start">
        <button class="px-4 my-4 rounded-full bg-dark-blue w-[283px] py-3">
            <p class="font-Popins text-white-color font-light">
                + Ajouter un produits
            </p>
        </button>
      </router-link>



        <div class="w-full px-8 mt-8 h-5/6 overflow-clip ">
        <div class="w-full ">
          <div class="w-full">

            <ul class="h-16 w-full flex flex-row justify-between items-center font-Poppins text-dark-blue font-light text-sm border-b border-dark-blue border-spacing-b-2 ">
              <li scope="col" class="text-start w-1/7 ">Liste</li>
              <li scope="col" class="text-center w-1/7">Nº des Articles</li>
              <li scope="col" class="text-center w-1/7">Prix Total</li>
              <li scope="col" class="text-center w-1/7">École</li>
              <li scope="col" class="text-center w-1/7">Ville</li>
              <li scope="col" class="text-center w-1/7">Status</li>
              <li scope="col" class="text-center w-1/7"></li>
            </ul>
          </div>

          
          <div class="mt-8">
            <div class="h-11 my-1">
            <ul class="font-Poppins text-dark-blue font-thin text-base flex flex-row justify-between items-center" >
              <li scope="col" class="h-10 text-start font-normal w-1/6 flex flex-row items-center justify-between">
                <img src="../assets/book.svg" class="w-1/3">
                <div class="font-medium text-[12px] h-full">
                  <p>Collège ANATOLE</p>
                    <p>FRANCE  / 3ºA</p>
                </div>
              </li>
              <li scope="col" class="text-center font-normal flex justify-center items-center h-full w-1/7">10</li>
              <li scope="col" class="text-center font-normal flex justify-center items-center h-full w-1/7">900,00</li>
              <li scope="col" class="text-center font-normal flex justify-center items-center h-full w-1/7">URC</li>
              <li scope="col" class="text-center font-normal flex justify-center items-center h-full w-1/7">Casablanca</li>
              <li scope="col" class="h-full text-center font-normal flex justify-center items-center w-1/7">
                <Switch
                            v-model="enabled"
                            :class="enabled ? 'bg-[#75E562] px-1' : 'bg-[#cec8c8]'"
                            class="relative inline-flex items-center h-[23px] px-1 w-[49px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                            <span class="sr-only">Use setting</span>
                            <span
                            c
                                aria-hidden="true"
                                :class="enabled ? 'translate-x-6' : 'translate-x-0'"
                                class="pointer-events-none h-[17px] w-[17px] transform rounded-full bg-white-color shadow-lg ring-0 transition duration-200 ease-in-out"
                            />
                            </Switch>
              </li>
              <li scope="col" class="w-1/7 flex flex-row justify-end">
                <img src="../assets/icons/edit.svg" @click="openModal">
                  <img src="../assets/icons/show.svg">
              </li>
            </ul>
          </div>
          </div>
        </div>
        
      </div>
      
      <editebook :is-open="callopen" @close="closeModel"/>
      <slideChanger/>
      </div>
    </div>

    
  </template>
  <script setup>
import { callWithAsyncErrorHandling, ref } from 'vue'
import { Switch } from '@headlessui/vue'
import opendailig from './opendailig.vue';
import slideChanger from './slideChanger.vue';
import editebook from './dailog/editBook.vue'

const callopen = ref(false)
function openModal() {
  callopen.value = true
}
function closeModel() {
  callopen.value = false
}
const isOpen = ref(true)
const enabled = ref(false)

</script>
  