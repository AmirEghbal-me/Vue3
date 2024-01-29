<template>
  <label>
    Editable input
  </label>
  <date-picker
      v-model="date"
      editable
      format="jYYYY/jMM/jDD"
      placeholder="YYYY/MM/DD"
      color="#e91e63"
      label="Editable"
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