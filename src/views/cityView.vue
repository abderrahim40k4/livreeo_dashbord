<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <cityComponent/>
    </component>

</template>
<script setup>
import cityComponent from '../components/cityComponent.vue';
</script>