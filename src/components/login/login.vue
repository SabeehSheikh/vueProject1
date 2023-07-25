
<template>
    <div class="login">
    <form v-if="isValidform">
    <h1>Login Page</h1>
    <label >Email</label>
    <input type="text" v-model="form.email">
    <label >Password</label>
    <input type="text" v-model="form.password">
   
    <button @click="printData()">Login</button>
    <button @click="navigateToSignup()">Signup</button>
   
  </form>
</div>
</template>
 
<script>
export default {
  name: 'loginPage',
 
  data() {
    return {
      isValidform:true,
     form:{
        
        email:'',
        password:'',
        

     },
     errors:{},

    };
  },
  computed: {
   

  },
  methods: {
    validateLoginForm(){
    this.errors={};
    if(!this.form.email)
    this.errors.username="please enter email address"
    },
    navigateToSignup(){
      this.$router.push('/signup');

        
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