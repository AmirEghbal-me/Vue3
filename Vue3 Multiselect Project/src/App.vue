<script setup lang="ts">
import MultiSelect from './components/MultiSelect.vue'
import FormValidator from './components/FormValidator.vue'
import ValidatePattern from './components/ValidatePattern.vue'


</script>
<style scoped>
.row{
  border: 5px solid black;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <MultiSelect/><br>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <FormValidator/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <ValidatePattern/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">

      </div>
    </div>
  </div>
</template>
