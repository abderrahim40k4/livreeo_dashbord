<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <coponCodeComponent/>
    </component>

</template>
<script setup>
import coponCodeComponent from '../components/coponCodeComponent.vue'
</script>