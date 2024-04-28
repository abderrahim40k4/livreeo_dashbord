
<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <fournitureComponent/>
    </component>

</template>
<script setup>

import fournitureComponent from '../components/fournitureComponent.vue'

</script>
