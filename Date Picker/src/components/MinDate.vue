<template>
  <VueDatePicker v-model="date" :min-date="new Date()" />
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script>