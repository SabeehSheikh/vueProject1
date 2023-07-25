
<template>
    <div class="Todos">
   
    <h1>Todos</h1>
    
    <label >Input</label>
    <input  type="text" v-model="inputData" >
   
   
    <button @click="pushArray()">Show Todos</button>
    <button @click="OnlypushArray()">Add Todos</button>
    
    <todospage :todo="arr"/>
  
</div>
</template>

<script>
import todospage from'@/components/showTodosList.vue';


export default {
  name: 'todosPage',
 components:{
todospage
 } , 
  data() {
    return {
      arr:[],
     inputData:''
    };
  },
  computed: {
   

  },
  methods: {
    
    pushArray(){
     this.arr.push(this.inputData);

     console.log(this.arr);    
    },
    OnlypushArray(){
     this.arr.push(this.inputData);

     console.log(this.arr);    
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