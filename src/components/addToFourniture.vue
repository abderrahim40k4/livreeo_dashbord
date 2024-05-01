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
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium focus:border-sky-color focus:ring-sky-color active:ring-sky-color active:border-sky-color " placeholder="URC">
        </div>
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Sélectionner la classe </label>
            <input class="w-full p-3 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium" placeholder="3eme">
        </div>
        <div class="">
            <label class="font-Poppins font-medium text-sm text-[#6D6D6D]">Sélectionner les languges</label>
            
            <div class="w-full p-2 rounded-full border border-sky-color mt-4 text-sm font-Poppins font-medium flex flex-row justify-end  items-center">
              <div class="w-11/12 font-Poppins font-medium text-sm text-[#6D6D6D] grid grid-cols-3 gap-2">

                <div class="rounded-full bg-dark-blue text-white-color h-full text-[12px] inline-flex items-center justify-evenly p-1" v-for="lang in longs">

                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"  class="cursor-pointer" @click="removelang(lang)">
                    <g clip-path="url(#clip0_2797_2697)">
                    <path d="M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.66602 6.66679L9.33268 9.33346M9.33268 6.66679L6.66602 9.33346" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2797_2697">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span>{{ lang }}</span>
                </div>
              </div>
              <div class="w-1/12 inline-flex items-center justify-center">
                <select class="w-full h-full">
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1jjhghdgahjdg</option>
                </select>
                              </div>

            </div>
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

const longs =  ["arabe", "francie" , "englaise"]


const removelang = (item)=>{
  let index = longs.indexOf(item)
  longs.splice(index)
  console.log(longs)
  return longs
}


</script>
  