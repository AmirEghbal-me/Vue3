<template>
  <label>Year Picker</label>
  <VueDatePicker v-model="year" year-picker />
</template>

<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>