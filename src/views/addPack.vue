<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <addList/>
    </component>

</template>
<script setup>
import addList from "../components/addListsch.vue"
</script>