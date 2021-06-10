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
<button @click="fetchUserData()">Fetch User data</button>
    <!-- display records  -->
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
            <!-- <tr v-for="user in users" v-bind:key="user.id"> 
            <th scope="row">{{user.id}}</th>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
            <td>{{user.address.city}}</td>
          </tr> -->
                <tr class="text-center" v-for="user in users" v-bind:key="user._id">
                  <td>{{index}}</td>
                  <td>{{user.Name}}</td>
                  <td>{{user.Email}}</td>
                  <td>{{user.Phone}}</td>
                  <td><a href="#" class="text-succes" @click="goEditUser()"><i class="fas fa-edit">
                  </i></a></td>
                  <td><a href="#" class="text-danger" @click="goDeleteUser()"><i class="fas fa-trash">
                  </i></a></td>
                  
                </tr>
                
              </tbody>
        </table>
      </div>
      
    </div> 
  <EditUser :issshowEditModal = "editModall"/>
  <div>
     <DeleteUser :isDeleteUser = "deleteModal"/>
  </div>
 
  </div>
</template>

<script>
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
export default {
  
  name: 'Table',
   data () {        
     return{
      index: 1,
      users: null,
      errorMsg: false,  //to display error message
      successMsg: false,  //to display success message      
      isTableHeader: true,    //to display header of the table
      editModall: false,    //display edit user modal
      deleteModal: false, //display DeleteUserModal
      
    };    
  },
  components:{  //components
      EditUser,
      DeleteUser,
  },
  
  methods:{

    async fetchUserData() {

    let url = "http://localhost:3333/user_data/";

      this.loading = true;
      let response = await fetch(       
        url
      );
      
      //let jsonResponse;
      let jsonResponse = await response.json();
       let data = jsonResponse.map((userData) => {
        userData.dataa = [
          userData._id, 
          userData.Name,
          userData.Email,
          userData.Phone         
         
        ];
        this.users = jsonResponse
        console.log(userData.dataa);
       this.index = 0;
       this.index++
       console.log(this.index)
       
        //console.log(jsonResponse)
        return data
       // index is used to identify single answer
    })
    },
    
        //function goEditUser triggers EditUser components to execute
      goEditUser: function(){        
        this.deleteModal = false;  //hide delete user
        this.editModall = !this.editModall;
        if(this.editModall === false )
        {
          this.editModall = true;
        
        }
        console.log(this.editModall) 

      },
        //this function triggers Delete user modal to be displayed
      goDeleteUser: function(){
        this.editModall = false;  //hide edit user modal
        this.deleteModal = !this.deleteModal;
        if(this.deleteModal === false ) 
        {
          this.deleteModal = true;
          
          console.log(this.deleteModal)
        }

      }

    }
}
</script>

<style scoped>
.tableheader{
  background-color: #078CB4;
  color: white;
}
</style>