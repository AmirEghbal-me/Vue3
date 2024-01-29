<template>
  <label>Month Picker</label>
  <VueDatePicker v-model="month" month-picker />
</template>

<script setup>
import { ref } from 'vue';

const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});
</script>