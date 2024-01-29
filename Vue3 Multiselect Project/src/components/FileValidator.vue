<template>
  <ValidationProvider rules="ext:jpg,png" v-slot="{ errors, validate }">
    <input type="file" @change="validate">
    <span>{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationProvider
  },
  methods: {
    validate() {
      // Add your custom validation logic here
    }
  }
};
</script>