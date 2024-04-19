<template>
    <div class="h-full p-16 w-4/5 flex justify-center items-center">
      <div class="w-full h-full pb-10">
        <button class="px-4 py-2 my-4 rounded-full bg-dark-blue w-1/5">
            <p class="font-Popins text-white-color font-light">
                + Ajouter un produits
            </p>
        </button>
  
        <div class="w-full px-8 mt-8">
          <table class="w-full table-fixed h-5/6">
            <thead class="w-full">
              <tr class="h-16 font-Poppins text-dark-blue font-light text-sm border-b border-dark-blue border-spacing-b-2">
                <th scope="col" class="text-start">Image</th>
                <th scope="col" class="text-center">Nom de Produit</th>
                <th scope="col" class="text-center">Status</th>
                <th scope="col" class="text-center">Prix</th>
                <th scope="col" class="text-center"></th>
              </tr>
            </thead>
  
            <tbody class="">
              <tr class="h-16 font-Poppins text-dark-blue font-thin text-sm">
                <th scope="col" class="text-start font-light">
                    <img src="../assets/prodact.png" class="w-1/2">
                </th>
                <th scope="col" class="text-center font-light">cartabl</th>
                <th scope="col" class="text-center font-light">
                    <Switch
                            v-model="enabled"
                            :class="enabled ? 'bg-[#75E562] border-white-color' : 'bg-[#cec8c8] border-2 border-transparent'"
                            class="relative inline-flex h-[23px] w-[49px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                            <span class="sr-only">Use setting</span>
                            <span
                            c
                                aria-hidden="true"
                                :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                                class="pointer-events-none inline-block h-[19px] w-[19px] transform rounded-full bg-white-color shadow-lg ring-0 transition duration-200 ease-in-out"
                            />
                            </Switch>
                </th>
                <th scope="col" class="text-center font-light">10000</th>
                <th scope="col" class="text-center w-full flex flex-row items-center justify-evenly h-full py-5">
                  <img src="../assets/icons/edit.svg">
                  <img src="../assets/icons/show.svg">
                </th>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  </template>
  <script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
</script>
  