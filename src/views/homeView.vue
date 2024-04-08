<template>
    <div class="w-full h-screen flex flex-row justify-center items-center">
        <div class="w-1/2 h-full bg-dark-blue flex">
            <img src="../assets/logo-bg.svg" alt="" width="70%">
        </div>
        <div class="w-1/2 h-full bg-white-color flex justify-center items-center">
            <div class="flex flex-col">
                <form class="flex flex-col">
                    <label class="text-dark-blue font-Poppins font-normal text-2xl">User</label>
                    <input type="text">
                    <label class="text-dark-blue font-Poppins font-normal text-2xl">Password</label>
                    <button class="flex flex-row items-center">Log in <img src="../assets/login.svg"></button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>