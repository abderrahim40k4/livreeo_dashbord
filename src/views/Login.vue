<template>
    <div class="w-full h-screen flex flex-row justify-center items-center">
        <div class="w-1/2 h-full bg-dark-blue flex">
            <img src="../assets/logo-bg.svg" alt="" width="70%">
        </div>
        <div class="w-1/2 h-full bg-white-color flex justify-center items-center">
            <div class="w-2/3 flex flex-col">
                <form class="flex flex-col">
                    <label class="px-4 text-dark-blue font-Poppins font-normal text-2xl">User</label>
                    <input type="text"  class="my-4 p-3 border border-dark-blue rounded-full w-full placeholder-white-blue" placeholder="Nom d’utilisateur ou adresse e-mail" v-model="data.email">
                    <label class="px-4 text-dark-blue font-Poppins font-normal text-2xl ">Password</label>
                    <input type="text"  class="my-4 p-3 border border-dark-blue rounded-full w-full placeholder-white-blue" placeholder="password"  v-model="data.password">
                    <RouterLink to='/statics'><button class="my-4 grid grid-cols-2 w-full bg-sky-color rounded-full items-center justify-items-end px-12 font-Poppins font-medium text-xl text-white-color" @click="store.adminExistence(admin)">Log in <img src="../assets/login.svg"></button></RouterLink>
                    <p class="text-center mt-20 text-[#CCCCCC] hover:text-sky-color text-[18px] font-Poppins font-normal">Mot de passe oublier ? {{ test }}</p>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthForom } from '../stors/authStep'
import {ref} from 'vue'
const store = useAuthForom()
const data = ref(
    {
        email:'',
        password:''
    }
)
const admin = useAuthForom.admin
</script>