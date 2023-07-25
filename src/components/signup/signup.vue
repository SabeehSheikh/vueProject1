<template>
  
    <div class="signup">
      <h1>Signup Page</h1>
      <form action="">
    <label >Username</label>
    <input type="text" v-model="form.username">
    <label >Email</label>
    <input type="text" v-model="form.email">
    <label >Password</label>
    <input type="text" v-model="form.password">
    <label >Confirm Passwword</label>
    <input type="text" v-model="form.confirm_password">
    <button @click="printData()">Signup</button>
   
  </form>
</div>
</template>
 
<script>
export default {
  name: 'signupPage',
 
  data() {
    return {
     form:{
        username:'',
        email:'',
        password:'',
        confirm_password:'',

     }

    }
  },
  computed: {
   

  },
  methods: {

    printData(){
        console.log(this.form);
    }
  },
  created() {

  },
  mounted(){
   
  },
  updated() {
    
  },
  unmounted() {
    
  },
}
</script>