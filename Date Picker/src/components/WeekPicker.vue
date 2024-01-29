<template>
  <label>Week Picker</label>
  <VueDatePicker v-model="date" week-picker />
</template>

<script setup>
import { ref } from 'vue';

const date = ref();
</script>