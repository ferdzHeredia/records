<template>
  <div id="app">
    <div class= "container-fluid" >
      <div class="row bg-dark">
      </div>
   </div>
    <Table isShowEditUser = "isShowEditModal"/>
    <router-view/>
  </div>
</template>

<script>
import Table from './components/Table';
export default {
  name: 'App',
  data () {        
     return{
      isShowEditUser: false,
    };    
  },
  components:{
    Table,
  },
   props:{
     showEditModal: Boolean,
   },
   methods:{
    
   }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  text-align: center;
  margin-top: 15px;
}

</style>
