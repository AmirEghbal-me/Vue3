<template>
  <label>
    Time
  </label>
  <date-picker v-model="date" type="time" simple />
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