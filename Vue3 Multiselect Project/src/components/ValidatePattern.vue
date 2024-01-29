<template>
  <div>
    <label>Password validator with pattern</label>
    <input type="text" v-model="value" />
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import * as yup from 'yup';

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : 'Must be a valid email';
}

const { value, errorMessage } = useField('email', isEmail);
</script>
