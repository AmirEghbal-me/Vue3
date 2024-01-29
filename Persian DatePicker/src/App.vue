<script setup>
import DatePicker from './components/DatePicker.vue'
import MinMaxDate from './components/MinMaxDate.vue'
import DifferentFormat from './components/DifferentFormat.vue'
import Year from './components/Year.vue'
import Month from './components/Month.vue'
import Day from './components/Day.vue'
import Time from './components/Time.vue'
import LocalPicker from './components/LocalPicker.vue'
import MultipleSelect from './components/MultipleSelect.vue'
import EditableInput from './components/EditableInput.vue'
import Localization from './components/Localization.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <DatePicker />
        </div>
        <div class="col-sm-6">
          <MinMaxDate/>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <DifferentFormat />
        </div>
        <div class="col-sm-6">
          <LocalPicker/>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-3">
          <Year/>
        </div>
        <div class="col-sm-3">
          <Month/>
        </div>
        <div class="col-sm-3">
          <Day/>
        </div>
        <div class="col-sm-3">
          <Time/>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-sm-6">
          <MultipleSelect/>
        </div>
        <div class="col-sm-6">
          <EditableInput/>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <Localization/>
        </div>
        <div class="col-sm-6">

        </div>
      </div>
    </div>

  </main>
</template>

