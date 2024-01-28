<script setup>
import { ref } from 'vue'
import ChildComp from './components/ChildComp.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp></ChildComp>
  <br>
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>