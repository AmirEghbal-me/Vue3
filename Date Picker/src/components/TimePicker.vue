<template>
  <label>Time Picker</label>
  <VueDatePicker v-model="time" time-picker />
</template>

<script setup>
import { ref } from 'vue';

const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});
</script>