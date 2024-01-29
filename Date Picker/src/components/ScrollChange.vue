<template>
  <VueDatePicker v-model="date" :clearable="false" />
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script>