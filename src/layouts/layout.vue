<template>
    <div class="h-screen flex flex-row justify-between items-start">
        <div class="w-max bg-dark-blue h-full flex flex-col items-center justify-evenly">
            <div class="w-full flex flex-row justify-normal items-center px-8">
                <div class="h-10 w-10d bg-white-color rounded-full"></div>
                <div class="mx-2 flex flex-col justify-evenly h-11 items-start font-Poppins text-white-color w-max">
                    <p clas="text-xs text-nowrap">Karim Chami</p>
                    <p class="text-xs font-light w-full">Administration</p>
                </div>
            </div>
            <div class="w-full flex flex-col justify-normal items-start pl-8 mb-14">
                <div class="w-full my-1 flex flex-row items-center font-Poppins text-xs  hover:border-r-4 border-sky-color active:text-sky-color active:border-r-4 cursor-pointer" v-for="item in menu" :key="item.id">
                    <router-link :to="item.path" class="w-full flex flex-row items-center">
                        <img :src="item.pathImg" class="stroke-dark-blue fill-dark-blue">
                        <p class="mx-4 font-light text-sm hover:text-sky-color" :class="item.isActive  ? 'text-sky-color' : 'text-white-color'" @click="item.isActive != item.isActive">{{ item.text }}</p>
                    </router-link>
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
            <div class="py-8 pr-8 h-auto">
                <img src="../assets/notification.svg" alt="" class="w-full">
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import statice from "../assets/icons/static.svg"
import prodact from "../assets/icons/prodact.svg"
import cate from "../assets/icons/cate.svg"
import list from "../assets/icons/list.svg"
import comond from "../assets/icons/comond.svg"
import city from "../assets/icons/city.svg"
import shoole from "../assets/icons/shoole.svg"
import classe from "../assets/icons/class.svg"
import lang from "../assets/icons/lang.svg"
import code from "../assets/icons/code.svg"
import stuck from "../assets/icons/stuck.svg"
const menu = [
    {
        id: 1,
        text:"Statistiques",
        pathImg:statice, 
        path:'/statics',
        isActive:false
    },
    {
        id: 2,
        text:"Produits",
        pathImg:prodact,
        path:'/prodact',
        isActive:false
    },
    {
        id: 3,
        text:"Categories",
        pathImg:cate,
        path:'/category',
        isActive:false
    },
    {
        id: 4,
        text:"Liste Scolaires",
        pathImg:list,
        path:'/',
        isActive:false
    },
    {
        id: 5,
        text:"Commandes",
        pathImg:comond,
        path:'/comonds',
        isActive:false
    },
    {
        id: 6,
        text:"Villes",
        pathImg:city,
        path:'/',
        isActive:false
    },
    {
        id: 7,
        text:"Écoles",
        pathImg:shoole,
        path:'/',
        isActive:false
    },
    {
        id: 8,
        text:"Classes",
        pathImg:classe,
        path:'/',
        isActive:false
    },
    {
        id: 9,
        text:"Langues",
        pathImg:lang,
        path:'/',
        isActive:false
    },
    {
        id: 10,
        text:"Coupon Code",
        pathImg:code,
        path:'/',
        isActive:false
    },
    {
        id: 11,
        text:"Fournitures",
        pathImg:stuck,
        path:'/fourniture',
        isActive:false
    },
]

function toggel(index){
    menu.forEach(element => {
        if(element.id == index){
            element.isActive = true
        }else{
            element.isActive = false
        }
        
    });
}
</script>