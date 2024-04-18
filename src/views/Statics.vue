<template>
        
        <component :is="$route.meta.layout">
        <router-view />
          <statistic/>
        </component>

</template>
<script setup>
import statistic from "../components/statisticComponent.vue"
</script>