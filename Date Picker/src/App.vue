<script setup lang="ts">
import DatePicker from './components/DatePicker.vue'
import MinDate from './components/MinDate.vue'
import RangePicker from './components/RangePicker.vue'
import ScrollChange from './components/ScrollChange.vue'
import YearPicker from './components/YearPicker.vue'
import MonthPicker from './components/MonthPicker.vue'
import WeekPicker from './components/WeekPicker.vue'
import TimePicker from './components/TimePicker.vue'
</script>

<template>
  <header>

  </header>

  <main>
    <div class="container">
      <div class="row" style="margin-top: 10%;">
        <div class="col-sm-6">
          <label>Year range between 2023 and 2024</label>
          <DatePicker/>
        </div>
        <div class="col-sm-6">
          <label>Minimum Date from now</label>
          <MinDate/>
        </div>
      </div>
      <div class="row" style="margin-top: 3%;">
        <div class="col-sm-6">
          <label>Range between current date to 7 days after</label>
          <RangePicker/>
        </div>
        <div class="col-sm-6">
          <label>Month change on scroll</label>
          <ScrollChange/>
        </div>
      </div>
      <div class="row" style="margin-top: 3%;">
        <div class="col-sm-3">

          <YearPicker/>
        </div>
        <div class="col-sm-3">

          <MonthPicker/>
        </div>
        <div class="col-sm-3">

          <WeekPicker/>
        </div>
        <div class="col-sm-3">

          <TimePicker/>
        </div>
      </div>
    </div>
  </main>
</template>
