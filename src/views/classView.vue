<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <classComponent/>
    </component>

</template>
<script setup>
import classComponent from '../components/classComponent.vue';
</script>