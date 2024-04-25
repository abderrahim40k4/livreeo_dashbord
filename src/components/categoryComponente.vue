<template class="w-4/5">
    <div class="h-full p-16 w-4/5 flex justify-center items-center">
      <div class="w-full h-full pb-10">
        <button class="px-4 py-2 my-4 rounded-full bg-dark-blue w-1/5">
            <p class="font-Popins text-white-color font-light">
                + Ajouter un produits
            </p>
        </button>



        <div class="w-full px-8 mt-8 h-5/6 overflow-clip ">
        <div class="w-full ">
          <div class="w-full">

            <ul class="h-16 w-full flex flex-row justify-between items-center font-Poppins text-dark-blue font-light text-sm border-b border-dark-blue border-spacing-b-2">
              <li scope="col" class="text-center w-3/5 flex justify-start">Nom de Produit</li>
              <li scope="col" class="text-center w-1/5">Status</li>
              <li scope="col" class="text-center w-1/5"></li>
            </ul>
          </div>

          
          <div class="mt-4">
            <div class="h-11 my-1">
            <ul class="font-Poppins text-dark-blue font-thin text-xs flex flex-row justify-between items-center" >
              <li scope="col" class="h-12 text-center font-normal flex justify-start w-3/5">cartabl</li>
              <li scope="col" class="h-12 text-center font-normal  w-1/5">
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
              </li>
              <li scope="col" class="w-1/5 flex flex-row justify-end">
                <img src="../assets/icons/edit.svg" @click="openModal">
                  <img src="../assets/icons/show.svg">
              </li>
            </ul>
          </div>
          </div>
        </div>
        
      </div>


      </div>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-dark/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-3/5 ml-64 transform overflow-hidden bg-white-color p-8 text-left align-middle shadow-xl transition-all rounded-xl"
            >
              <div class="mt-4 w-full flex flex-row justify-evenly p-8">
                <input class="w-full p-4 text-dark-blue  font-Poppins font-meduim text-xl border-2 border-dark-blue  rounded-full"  placeholder="Category">
              </div>

              <div class="mt-4 w-full flex flex-row justify-evenly">
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </template>
  <script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
const enabled = ref(false)

</script>
  