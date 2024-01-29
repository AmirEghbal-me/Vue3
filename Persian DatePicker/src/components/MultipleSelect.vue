<template>
  <label>
    Multiple Select
  </label>
  <date-picker
      v-model="dates"
      multiple
      clearable
      format="YYYY-MM-DD"
      display-format="jMMMM jD"
  />
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