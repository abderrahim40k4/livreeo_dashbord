<template class="w-4/5 h-screen">
    <div class="h-screen px-16 py-8 w-4/5">
        <div>
            <router-link to="/fourniture"><img src="../assets/icons/back.svg"></router-link>
        </div>
      <div class="w-full h-full pb-2">
        <div class="grid grid-cols-3 gap-x-20 gap-y-4 justify-between items-center mt-4">
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Sélectionner la ville</label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="Casablanca">
        </div>
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Sélectionner l’école</label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="URC">
        </div>
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Sélectionner la classe</label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="3eme">
        </div>
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Sélectionner les languges</label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="3eme">
        </div>
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Ajouter la liste format PDF</label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="3eme">
        </div>
        </div>
        <div class="w-1/3 my-8">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Ajouter les Fournitures</label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="3eme">
        </div>

        <div class="w-full flex h-[220px] flex-rows justify-between items-center ">
          <div><img src="../assets/icons/next.svg"></div>
          <div class="w-10/12 h-full grid grid-cols-6 mx-4 gap-4">
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            <div class=" bg-sky-color/25 rounded-lg inline-flex items-center justify-center"> <img src="../assets/icons/addItema.svg" alt=""></div>
            
          </div>
          <div><img src="../assets/icons/last.svg"></div>
        </div>

        <div class="mt-8 w-full flex flex-row justify-evenly">
                <button
                  type="button"
                  class="flex justify-center items-center rounded-full  font-Poppins font-light bg-green w-[227px] text-white-color py-2 "
                  @click="closeModal"
                >
                Confirmer
                </button>
                <button
                  type="button"
                  class="flex justify-center items-center rounded-full font-Poppins font-light bg-red w-[227px] text-white-color py-2 "
                  @click="closeModal"
                >
                Annuler
                </button>
              </div>

        
      </div>
    </div>

  </template>
  <script setup>
import { ref } from 'vue'
</script>
  