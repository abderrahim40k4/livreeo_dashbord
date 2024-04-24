<template>
  <div class="h-full p-16 w-4/5 flex justify-center items-center">
    <div class="w-full h-full pb-10">
      <p class="font-Popins text-sky-color font-medium text-2xl my-4">
        Statistiques
      </p>

      <div class="w-full px-8 mt-8 h-5/6 overflow-clip ">
        <div class="w-full ">
          <div class="w-full">

            <ul class="h-16 w-full flex flex-row justify-between items-center font-Poppins text-dark-blue font-light text-sm border-b border-dark-blue border-spacing-b-2">
              <li scope="col" class="text-start">Nº de commande</li>
              <li scope="col" class="text-center">Date</li>
              <li scope="col" class="text-center">Type de pack</li>
              <li scope="col" class="text-center">Prix</li>
              <li scope="col" class="text-center">Status</li>
              <li scope="col" class="text-center">Detail</li>
            </ul>
          </div>

          
          <div class="mt-4">
            <div class="h-11 my-1">
            <ul class="font-Poppins text-dark-blue font-thin text-xs flex flex-row justify-between items-center" >
              <li scope="col" class="h-12 text-start font-normal w-1/6">LV0001</li>
              <li scope="col" class="h-12 text-center font-normal  w-1/6">05/05/2005</li>
              <li scope="col" class="h-12 text-center font-normal  w-1/6">Pack Rentré</li>
              <li scope="col" class="h-12 text-center font-normal  w-1/6">900,00 DHS</li>
              <li scope="col" class="h-12 text-center font-normal  w-1/6">
                <select class="justify-evenly items-center px-2 py-1 border border-dark-blue rounded-full w-4/6">
                    <option>test</option>
                </select>
              </li>
              <li scope="col" class="w-1/6 flex flex-row justify-evenly p-0">
                <div><img src="../assets/icons/show.svg"></div>
                <div><img src="../assets/icons/delet.svg" ></div>
              </li>
            </ul>
          </div>
          </div>
        
        </div>
        
      </div>
      <slideChanger/>
    </div>
  </div>
</template>
<script setup>
import slideChanger from './slideChanger.vue';
</script>
