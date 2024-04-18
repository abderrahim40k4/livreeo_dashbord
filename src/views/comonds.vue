<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <comondsComponents/>
    </component>

</template>
<script setup>
import comondsComponents from '../components/comondsComponents.vue';
</script>