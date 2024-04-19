<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <prodactsCpmponent/>
    </component>

</template>
<script setup>
import prodactsCpmponent from "../components/prodactsComponent.vue"
</script>