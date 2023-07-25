<template>
  
    <div class="todos">
      <ul>
        <li v-for="x in todo" :key="x">
            {{ x }}
        </li>
      </ul>
   
   
  
</div>
</template>
 
<script>
export default {
  name: 'ShowTodospage',
  props:{
    todo:Array
  },
 
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