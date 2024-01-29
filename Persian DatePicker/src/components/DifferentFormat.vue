<template>
  <label>
    Different Format ( value is 2017-05-10 )
  </label>
  <date-picker
      value="2017-05-10"
      input-format="YYYY-MM-DD"
      format="jYYYY/jMM/jDD"
      @input="date=$event"
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