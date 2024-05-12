<template>
    <TransitionRoot appear :show="props.isOpen" as="template">
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
    
    const props = defineProps({
      isOpen : Boolean
    })
    </script>