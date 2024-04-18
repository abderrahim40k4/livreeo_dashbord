<template>
  <div class="h-full p-16 w-4/5 flex justify-center items-center">
    <div class="w-full h-full pb-10">
      <p class="font-Popins text-sky-color font-medium text-2xl my-4">
        Statistiques
      </p>

      <div class="w-full px-8 mt-8">
        <table class="w-full table-fixed h-5/6">
          <thead class="w-full">
            <tr class="h-16 font-Poppins text-dark-blue font-light text-sm border-b border-dark-blue border-spacing-b-2">
              <th scope="col" class="text-start">Nº de commande</th>
              <th scope="col" class="text-center">Date</th>
              <th scope="col" class="text-center">Type de pack</th>
              <th scope="col" class="text-center">Prix</th>
              <th scope="col" class="text-center">Status</th>
              <th scope="col" class="text-center">Detail</th>
            </tr>
          </thead>

          <tbody class="">
            <tr class="h-16 font-Poppins text-dark-blue font-thin text-xs">
              <th scope="col" class="text-start font-light">Nº de commande</th>
              <th scope="col" class="text-center font-light">Date</th>
              <th scope="col" class="text-center font-light">Type de pack</th>
              <th scope="col" class="text-center font-light">Status</th>
              <th scope="col" class="text-center font-light">
                <select class="w-5/6 justify-evenly items-center p-2 border border-dark-blue rounded-full">
                    <option>test</option>
                </select>
              </th>
              <th scope="col" class="text-center w-full flex flex-row items-center justify-evenly h-full py-5">
                <img src="../assets/icons/show.svg">
                <img src="../assets/icons/delet.svg">
              </th>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</template>
<script setup></script>
