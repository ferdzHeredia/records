<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-lg-6 ">        
        <h3 class="text-info" >Registered Users</h3>
      </div>
      <div class="col-lg-6"> 
        <!-- displays child component NewUserModal        -->
       <NewUser/> 
            
      </div>      
    </div>
    <mdb-form-inline class="md-form">
        <mdbIcon icon="search" />
        <mdb-input type="text" placeholder="Search" aria-label="Search"/>
      </mdb-form-inline>       
    <hr class="bg-info">
    <div class="alert alert-danger" v-if="errorMsg">
      Error Message
    </div>
    <div class="alert alert-success " v-if="successMsg">
      Success Message
    </div> 
    <!-- display records  -->
    <!-- method one for fethcing data  -->
     <!-- <div class="row" v-bind="fetchUserData()" > -->
     <div class="row" >    
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
              <th>Details</th>              
          </thead>
          <tbody>
                <tr class="text-center" v-for="(user, index) in users" v-bind:key="user._id">
                  <td>{{++index}}</td>
                  <td>{{user.Name}}</td>
                  <td>{{user.Email}}</td>
                  <td>{{user.Phone}}</td>
                  <td><a href="#" class="text-succes" @click="goEditUser(user.Name, user.Email, user.Phone, user._id )"><i class="fas fa-edit">
                  </i></a></td>
                  <td><a href="#" class="text-danger" @click="goDeleteUser(user._id, user.Name)"><i class="fas fa-trash">
                  </i></a></td>
                   <td><a href="#" class="text-info" @click="details(user.Name, user.Email, user.Phone)"><i class="fas fa-info-circle"> 
                  </i></a></td>
        
                </tr>                
              </tbody>
        </table>
        
      </div>
      
    </div> 
  <EditUser :issshowEditModal = "editModall"
  :phoneNum = "phone"
  :EmailAdd = "email"
  :fullName = "name"
  />
  <div>
     <DeleteUser :isDeleteUser = "deleteModal"/>
  </div>
   <div>
     <InfoUser :isinfoModal = "infoModal"/>
  </div>
  </div>
</template>

<script>
import {mdbInput, mdbFormInline, mdbIcon} from 'mdbvue';

import EditUser from './EditUser';  
import DeleteUser from './DeleteUser';
import NewUser from './NewUserModal';
import InfoUser from './InfoUser';
import Vue from 'vue'
export default {
  
  name: 'Table',
   data () {        
     return{
      userDataa:[],
      phone:'',
      email:'',
      name:'', 
      showdata: true,
      users: null,    //used in the v-for loop to display the user's data inside the table
      errorMsg: false,  //to display error message
      successMsg: false,  //to display success message      
      isTableHeader: true,    //to display header of the table
      editModall: false,    //display edit user modal
      deleteModal: false, //display DeleteUserModal
      infoModal: false,
      
    };    
  },
  props: {
  
  },
  components:{  //components
      mdbInput,
      mdbIcon,
      mdbFormInline,
      EditUser,
      DeleteUser,
      NewUser,
      InfoUser,
  },
  
  methods:{
    
    // this function fetches data from the database through the restApi
    async fetchUserData() {

      let url = "http://localhost:3333/user_data/";
      //this.loading = true;

      try 
      {
              let response = await fetch(       
          url
      );
     
      let jsonResponse = await response.json();     //variable jsonResponse fetches the data from database through the rest Api
        
      // not used - maps all the instances of the jsonResponse         
      let data = jsonResponse.map((userData) => {
          userData.dataa = [
            userData._id, 
            userData.Name,
            userData.Email,
            userData.Phone         
          ];

          //data property the receives all the info from the jsonResponse
          this.users = jsonResponse
          
          
          return data        
      })
        
      }
      catch(e)
      {
        console.log(e)
      }

    },
    
    //function goEditUser triggers EditUser components to execute
    goEditUser: function(Name, Email, Phone, userId){ 

      this.name = Name;
      this.email = Email;
      this.phone = Phone;
      this.deleteModal = false;  //hide delete user
      this.infoModal = false;  //hide edit user modal
      this.editModall = !this.editModall;
      if(this.editModall === false )
      {
        this.editModall = true;
        
      }
      Vue.prototype.$editUser = [Name, Email, Phone, userId]

    },
    async details(Name, Email, Phone)
    {
      
      this.deleteModal = false;  //hide delete user
       this.editModall = false;  //hide edit user modal
      this.infoModal = !this.infoModal;
      if(this.infoModal === false )
      {
        this.infoModal = true;
        
      }
      Vue.prototype.$Name = Name
      Vue.prototype.$EmailInfo = Email
      Vue.prototype.$Contact = Phone

    },

    //this function triggers Delete user modal to be displayed
     async goDeleteUser(user, userName)
     {
        this.infoModal = false;  //hide delete user
        this.editModall = false;  //hide edit user modal
        this.deleteModal = !this.deleteModal;   //triggers to display and hide the delete modal form
        if(this.deleteModal === false )   //checks if boolean delete modal is set to false
        {
          this.deleteModal = true;    //assigns deletemodal to true
        }
        Vue.prototype.$recieveData = [user, userName] 
        Vue.prototype.$name = userName
    }

  },
  //method 2 for fetching data
  beforeMount()
  {
    this.fetchUserData()
  }
}
</script>

<style scoped>
.tableheader{
  background-color: #078CB4;
  color: white;
}

</style>