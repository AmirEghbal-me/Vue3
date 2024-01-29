<!--
<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(7).required(),
  number: yup.number().min(2000).max(3000).required(),
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [number, numberAttrs] = defineField('number');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<style scoped>
label{
  width: 100px;
}
</style>
<template>
  <form @submit="onSubmit">
    <label>Email validator</label>
    <input v-model="email" v-bind="emailAttrs" name="email" type="email" />
    <span style="color: red">{{ errors.email }}</span>
    <br>
    <label>Password validator</label>
    <input v-model="password" v-bind="passwordAttrs" name="password" type="password" />
    <span style="color: red">{{ errors.password }}</span>
    <br>
    <label>Number validator</label>
    <input v-model="number" v-bind="numberAttrs" name="number" type="number" step="0.1" />
    <span style="color: red">{{ errors.number }}</span>
    <br>
    <button>Submit</button>
  </form>
</template>-->
<script setup>
  import {useForm} from 'vee-validate';
  import * as yup from 'yup';


  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(7).required(),
    date: yup.date(),

    number: yup.number().min(2000).max(3000).test('decimal-limit', 'Number must not have more than 2 decimal places', (value) => {
      if (!value)
        return true;
      const decimals = value.toString().split('.')[1];
      return !decimals || decimals.length <= 2;
    }).required(),
  });
  const {defineField, errors, handleSubmit} = useForm({validationSchema: schema,});
  const [email, emailAttrs] = defineField('email');
  const [password, passwordAttrs] = defineField('password');
  const [number, numberAttrs] = defineField('number');
  const onSubmit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
  });
</script>
<style scoped>
label {
  width: 100px;
}
</style>
<template>
  <form @submit="onSubmit">
    <label>Email validator</label>
    <input v-model="email" v-bind="emailAttrs" name="email" type="email"/>
    <span style="color: red">{{ errors.email }}</span> <br><br><br>

    <label>Password validator</label>
    <input v-model="password" v-bind="passwordAttrs" name="password" type="password"/>
    <span style="color: red">{{ errors.password }}</span> <br><br><br>

    <label>Number validator</label>
    <input v-model="number" v-bind="numberAttrs" name="number" type="number" step="0.01"/>
    <span style="color: red">{{ errors.number }}</span> <br><br><br>

    <label>Date validator</label><br>
    <input v-model="date" v-bind="dateAttrs" name="date" type="date"/>
    <span style="color: red">{{ errors.date }}</span> <br><br><br>


    <button>Submit</button>
  </form>
</template>