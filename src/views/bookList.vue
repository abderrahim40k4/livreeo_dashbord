<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <booklListComponent/>
    </component>

</template>
<script setup>
import booklListComponent from '../components/booklListComponent.vue';
</script>