<template>
  <label>
    Shamsi gregorian
  </label>
  <date-picker locale="en,fa" format="YYYY/M/D" simple />
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