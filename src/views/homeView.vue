<template>
    <div class="w-full h-screen flex flex-row justify-center items-center">
        <div class="w-1/2 h-full bg-dark-blue flex">
            <img src="../assets/logo-bg.svg" alt="" width="70%">
        </div>
        <div class="w-1/2 h-full bg-white-color flex justify-center items-center">
            <div class="w-2/3 flex flex-col">
                <form class="flex flex-col">
                    <label class="px-4 text-dark-blue font-Poppins font-normal text-2xl">User</label>
                    <input type="text"  class="my-4 p-3 border border-dark-blue rounded-full w-full placeholder-white-blue" placeholder="Nom d’utilisateur ou adresse e-mail">
                    <label class="px-4 text-dark-blue font-Poppins font-normal text-2xl ">Password</label>
                    <input type="text"  class="my-4 p-3 border border-dark-blue rounded-full w-full placeholder-white-blue" placeholder="password">
                    <!-- <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_694_3595)">
                                <path d="M14.584 17.5C14.584 18.2735 14.8913 19.0154 15.4383 19.5624C15.9852 20.1094 16.7271 20.4166 17.5007 20.4166C18.2742 20.4166 19.0161 20.1094 19.563 19.5624C20.11 19.0154 20.4173 18.2735 20.4173 17.5C20.4173 16.7264 20.11 15.9846 19.563 15.4376C19.0161 14.8906 18.2742 14.5833 17.5007 14.5833C16.7271 14.5833 15.9852 14.8906 15.4383 15.4376C14.8913 15.9846 14.584 16.7264 14.584 17.5Z" stroke="#00B8D0" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M30.625 17.5C27.125 23.3333 22.75 26.25 17.5 26.25C12.25 26.25 7.875 23.3333 4.375 17.5C7.875 11.6667 12.25 8.75 17.5 8.75C22.75 8.75 27.125 11.6667 30.625 17.5Z" stroke="#00B8D0" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                                <defs>
                                <clipPath id="clip0_694_3595">
                                <rect width="35" height="35" fill="white"/>
                                </clipPath>
                                </defs>
                        </svg>
                        </div> -->
                    <button class="my-4 grid grid-cols-2 w-full bg-sky-color rounded-full items-center justify-items-end px-12 font-Poppins font-medium text-xl text-white-color">Log in <img src="../assets/login.svg"></button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>