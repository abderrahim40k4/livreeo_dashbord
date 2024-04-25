<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <categoryComponente/>
    </component>

</template>
<script setup>
import comondsComponents from '../components/comondsComponents.vue';
import categoryComponente from '../components/categoryComponente.vue';
</script>