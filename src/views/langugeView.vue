<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <langugeComponent/>
    </component>

</template>
<script setup>
import langugeComponent from '../components/langugeComponent.vue';
</script>