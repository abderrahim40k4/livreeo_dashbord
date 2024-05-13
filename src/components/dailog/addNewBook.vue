<template>
    <TransitionRoot appear :show="props.isOpen" as="template">
        <Dialog as="div" @close="close" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-dark/25" ></div>
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
                  class="w-3/5 ml-64 transform overflow-hidden bg-white-color p-8 text-left align-middle shadow-xl transition-all"
                >
                  <div class="w-3/4">
                    <div class="w-full">
                      <p class="text-dark-blue font-Poppins text-sm font-light">Image de Produit</p>
                      <div class="w-[100px] h-[100px] border border-dark-blue rounded-2xl mt-3"></div>
                    </div>
                    <div class="w-full mt-6 flex flex-row justify-between items-center">
                      <div class="w-2/5 flex flex-col">
                        <label class="text-dark-blue font-Poppins text-sm font-light">Nom de Produit</label>
                        <input type="text" value="" placeholder="livre" class="mt-3 p-3 border border-dark-blue rounded-full  text-sm text-dark-blue/25 font-Poppins font-light">
                      </div>
                      <div class="w-2/5 flex flex-col">
                        <label class="text-dark-blue font-Poppins text-sm font-light">Catégorie</label>
                        <select class="mt-3 p-3 border border-dark-blue rounded-full text-sm text-dark-blue/25 font-Poppins font-light">
                          <option>one</option>
                          <option>tow</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-full mt-6 flex flex-row justify-between items-center">
                      <div class="w-2/5 flex flex-col">
                        <label class="text-dark-blue font-Poppins text-sm font-light">Prix de Produit</label>
                        <input type="text" value="" placeholder="livre" class="mt-3 p-3 border border-dark-blue rounded-full  text-sm text-dark-blue/25 font-Poppins font-light">
                      </div>
                      <div class="w-2/5 flex flex-col">
                        <label class="text-dark-blue font-Poppins text-sm font-light">Couleur</label>
                        <select class="mt-3 p-3 border border-dark-blue rounded-full text-sm text-dark-blue/25 font-Poppins font-light">
                          <option>one</option>
                          <option>tow</option>
                        </select>
                      </div>
                    </div>
    
                    <div class="w-full mt-6">
                      <p class="text-dark-blue font-Poppins text-sm font-light">Image de Produit</p>
                      <div class="w-full h-[100px] border border-dark-blue rounded-2xl mt-3"></div>
                    </div>
                  </div>
    
                  <div class="mt-4 w-full flex flex-row justify-evenly">
                    <button
                      type="button"
                      class="flex justify-center items-center rounded-full  font-Poppins font-light bg-green w-[227px] text-white-color py-2 "
                      @click="$emit('close')"
                    >
                    Confirmer
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center rounded-full font-Poppins font-light bg-red w-[227px] text-white-color py-2 "
                      @click="$emit('close')"
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
    
    const props = defineProps({
      isOpen : Boolean
    })
    </script>