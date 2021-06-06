<template>
  <div id="app">
    <div class= "container-fluid" >
      <div class="row bg-dark">
        <div class="col lg-12 text-white">
          <p text=" center text-light display-4 pt-2 ">Crud Application Using Vuejs PHP and MSQLI</p>
        </div>
      </div>
   </div>
   <!-- displays edit user -->
   <!-- <EditUser :issshowEditModal = "!isShowEditModal" /> -->
     <!-- displays child component NewUserModal        -->
    <NewUserModal style="padding-left: 40%"/>           
    <!-- displays table -->
    <Table isShowEditUser = "isShowEditModal"/>
    <router-view/>
  </div>
</template>

<script>
import Table from './components/Table';
import NewUserModal from './components/NewUserModal';
//import EditUser from './components/EditUser';
export default {
  name: 'App',
  data () {        
     return{
      isShowEditUser: false,
    };    
  },
  components:{
    NewUserModal,
    Table,
    //EditUser
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
