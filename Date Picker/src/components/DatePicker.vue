<template>
  <VueDatePicker v-model="date" :year-range="[2023, 2024]" />
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script>