<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <div class="my-4 mx-8">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
//components
import NavBar from '@/components/navigation/NavBar.vue'

</script>
