<template>
        
    <component :is="$route.meta.layout">
    <router-view />
      <shooleComponent/>
    </component>

</template>
<script setup>
import shooleComponent from '../components/shooleComponent.vue';
</script>