<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-lg-6 ">        
        <h3 class="text-info" >Registered Users</h3>
      </div>
      <div class="col-lg-6"> 
        <!-- displays child component NewUserModal        -->
       <new-user-modal/>
      </div>
    </div>
    <hr class="bg-info">
    <div class="alert alert-danger" v-if="errorMsg">
      Error Message
    </div>
    <div class="alert alert-success " v-if="successMsg">
      Success Message
    </div> 

    <!-- display records    -->
     <div class="row">
      <div class="col-lg-12">
        <table class="table table-bordered table-striped">
          <thead v-bind:class="isTableHeader && 'tableheader'">
            <tr class="text-center bg-info text-light"></tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>              
          </thead>
          <tbody>
                <tr class="text-center">
                  <td>1</td>
                  <td>Wolfamania</td>
                  <td>wolfmanai@gmail.com</td>
                  <td>6084440</td>
                  <td><a href="#" class="text-succes" @click="goEditUser()"><i class="fas fa-edit">
                  </i></a></td>
                  <td><a href="#" class="text-danger"><i class="fas fa-trash">
                  </i></a></td>
                </tr>
                <tr class="text-center">
                  <td>1</td>
                  <td>Wolfamania</td>
                  <td>wolfmanai@gmail.com</td>
                  <td>6084440</td>
                  <td><a href="#" class="text-succes" @click="goEditUser()"><i icon="user" class="fas fa-edit">
                  </i></a></td>
                  <td><a href="#" class="text-danger"><i class="fas fa-trash">
                  </i></a></td>
                </tr>
                <tr class="text-center">
                  <td>1</td>
                  <td>Wolfamania</td>
                  <td>wolfmanai@gmail.com</td>
                  <td>6084440</td>
                  <td><a href="#" class="text-succes" @click="goEditUser()"><i class="fas fa-edit">
                  </i></a></td>
                  <td><a href="#" class="text-danger"><i class="fas fa-trash">
                  </i></a></td>
                </tr>
              </tbody>
        </table>
      </div>
      
    </div> 
  <EditUser :issshowEditModal = "editModall"/>
  </div>
</template>

<script>
import EditUser from './EditUser';
export default {
  
  name: 'Table',
   data () {        
     return{
      errorMsg: false,  //to display error message
      successMsg: false,  //to display success message      
      isTableHeader: true,    //to display header of the table
      editModall: false,    //display edit user modal
      
    };    
  },
  components:{
      EditUser
  },
  
  methods:{
      goEditUser: function(){        
       
        this.editModall = !this.editModall;
        if(this.editModall === false )
        {
          this.editModall = true;
        }
        console.log(this.editModall) 

      },

    }
}
</script>

<style scoped>
.tableheader{
  background-color: #078CB4;
  color: white;
}
</style>