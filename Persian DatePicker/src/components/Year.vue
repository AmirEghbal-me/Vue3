<template>
  <label>
    Year
  </label>
  <date-picker v-model="date" view="year" />
</template>

<script>
import DatePicker from 'vue3-persian-datetime-picker'
export default {
  data(){
    return {
      date: ''
    }
  },
  components: { DatePicker }
}
</script>