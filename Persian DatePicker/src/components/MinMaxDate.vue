<template>
  <label>
    Limit datetime picker minimum and maximum( min="1396/08/08" max="1396/09/09" )
  </label>
  <date-picker
      v-model="date"
      min="1396/08/08"
      max="1396/09/09"
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