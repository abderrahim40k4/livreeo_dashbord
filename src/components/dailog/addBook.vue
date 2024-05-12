<template>
    <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="closeModel" class="relative z-10">
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
                
                  <div class="w-2/5 border border-dark-blue p-4 " :class="active ? 'rounded-lg' :'rounded-full'">
                    <Listbox v-model="selectedPerson" as="div" @click="handdelling" >
                    <ListboxButton>{{ selectedPerson.name }}</ListboxButton>
                    <ListboxOptions>
                      <ListboxOption
                        v-for="person in people"
                        :key="person.id"
                        :value="person"
                        :disabled="person.unavailable"
                      >
                        {{ person.name }}
                      </ListboxOption>
                    </ListboxOptions>
                  </Listbox>
                  </div>

                  <div class="w-2/5">
                    <button class="w-full inline-flex justify-center items-center p-3 bg-dark-blue rounded-full" @click="$emit('newbook')">
                      <img src="../../assets/icons/add-new.svg" alt="">
                    </button>

                  </div>
                
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
    import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  const selectedPerson = ref(people[0])
    const props = defineProps({
      isOpen : Boolean
    })

    const active = ref(true)

    function handdelling(){
      active.value != active.value
    }
    </script>