<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <addToFourniture/>
    </component>

</template>
<script setup>
import addToFourniture from '../components/addToFourniture.vue'
</script>