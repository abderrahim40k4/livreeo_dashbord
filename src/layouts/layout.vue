<template>
    <div class="h-screen flex flex-row justify-between items-start">
        <div class="w-[250px] bg-dark-blue h-full flex flex-col items-center justify-evenly">
            <div class="w-full flex flex-row justify-normal items-center px-8">
                <div class="h-11 w-11 bg-white-color rounded-full"></div>
                <div class="mx-2 flex flex-col justify-evenly h-11 items-start font-Poppins text-white-color">
                    <p clas="text-sm">Karim Chami</p>
                    <p class="text-xs font-light">Administration</p>
                </div>
            </div>
            <div class="w-full flex flex-col justify-normal items-start pl-8 mb-14">
                <div class="w-full my-1 flex flex-row items-center text-white-color font-Poppins text-xs font-light hover:text-sky-color hover:border-r-4 border-sky-color active:text-sky-color active:border-r-4 cursor-pointer" v-for="item in menu" :key="item.id">
                    <img :src="item.pathImg">
                    <p class="mx-2">{{ item.text }}</p>
                </div>
            </div>

            <div class="w-full flex flex-col justify-normal items-start pl-8 bottom-0">
                <div class="w-full my-1 fill-white-color flex flex-row items-center text-white-color font-Poppins text-ms font-meduim hover:text-sky-color hover:border-r-4 border-sky-color active:text-sky-color active:border-r-4 cursor-pointer hover:fill-sky-color ">
                    <img src="../assets/icons/seting.svg" class="stroke-sky-color fill-sky-color">
                    <p class="mx-2">Parametres</p>
                </div>
                <div class="w-full my-1 fill-white-color flex flex-row items-center text-white-color font-Poppins text-ms font-meduim hover:text-sky-color hover:border-r-4 border-sky-color active:text-sky-color active:border-r-4 cursor-pointer hover:fill-sky-color ">
                    <img src="../assets/icons/logout.svg" class="stroke-sky-color fill-sky-color">
                    <p class="mx-2">Logout</p>
                </div>
            </div>
        </div>
        <slot />
        
        <div >
            <div class="p-8">
                <img src="../assets/notification.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
const menu = [
    {
        id: 1,
        text:"Statistiques",
        pathImg:"../assets/icons/static.svg",
    },
    {
        id: 2,
        text:"Produits",
        pathImg:'../assets/icons/prodact.svg',
    },
    {
        id: 3,
        text:"Categories",
        pathImg:'../assets/icons/cate.svg',
    },
    {
        id: 4,
        text:"Liste Scolaires",
        pathImg:'../assets/icons/list.svg',
    },
    {
        id: 5,
        text:"Commandes",
        pathImg:'../assets/icons/comond.svg',
    },
    {
        id: 6,
        text:"Villes",
        pathImg:'../assets/icons/city.svg',
    },
    {
        id: 7,
        text:"Écoles",
        pathImg:'../assets/icons/shoole.svg',
    },
    {
        id: 8,
        text:"Classes",
        pathImg:'../assets/icons/class.svg',
    },
    {
        id: 9,
        text:"Langues",
        pathImg:'../assets/icons/lang.svg',
    },
    {
        id: 10,
        text:"Coupon Code",
        pathImg:'../assets/icons/code.svg',
    },
    {
        id: 11,
        text:"Fournitures",
        pathImg:'../assets/icons/stuck.svg',
    },
]
</script>