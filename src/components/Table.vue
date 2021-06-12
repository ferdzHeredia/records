<template>
  <div class="container">
    <div class="text-center">        
        <h3 class="text-info mt-4" >Registered Users</h3>
      </div>
    <div class="row ml-5">

      <div class="col-lg-6 pl-5">
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
        <span slot="tip">You can change the category to search by individual fields</span>
       
        <mdb-form-inline slot="reference" >
          <mdbIcon icon="search" class="pr-2" /> 
          <mdb-input type="text" v-model="search" placeholder="Search Keyword" aria-label="Search" v-on:change="filterUsers"/> 
        <mdb-dropdown class="pl-5" >
            <mdb-dropdown-toggle slot="toggle" color="info">{{category}}</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item @click="change(categories[0])">{{categories[0]}}</mdb-dropdown-item>
              <mdb-dropdown-item @click="change(categories[1])">{{categories[1]}}</mdb-dropdown-item>
              <mdb-dropdown-item @click="change(categories[2])">{{categories[2]}}</mdb-dropdown-item>
            </mdb-dropdown-menu>
        </mdb-dropdown>
        </mdb-form-inline> 
         </mdb-tooltip>
      </div> 
      <div class="col-lg-6 mt-4 pl-5"> 
        <!-- displays child component NewUserModal        -->
       <NewUser/> 
      </div>  
    </div>
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
           
                <tr class="text-center" v-for="(user, index) in pageOfItems" v-bind:key="user._id">
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
            <jw-pagination :pageSize=2 :items="users" @changePage="onChangePage" >     </jw-pagination>       
   
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
import {mdbInput, mdbFormInline, mdbIcon, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbTooltip } from 'mdbvue';       

import EditUser from './EditUser';  
import DeleteUser from './DeleteUser';
import NewUser from './NewUserModal';
import InfoUser from './InfoUser';
import Vue from 'vue'

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

export default {
  
  name: 'Table',
   data () {        
     return{
      items: '',
      pageOfItems: [],
      category: 'categories',
      categories: ['Name', 'Email','Phone Number'],
      search:'',
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
      filteringInfo: false,
      
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
      mdbDropdown, 
      mdbDropdownItem, 
      mdbDropdownMenu, 
      mdbDropdownToggle,
      mdbTooltip
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
      // let data = jsonResponse.map((userData) => {
      //     userData.dataa = [
      //       userData._id, 
      //       userData.Name,
      //       userData.Email,
      //       userData.Phone         
      //     ];

          //data property the receives all the info from the jsonResponse
          this.users = jsonResponse
          
          
          return  this.users        
      //})
        
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
    },
    change: function(index)
    {
      this.category = index
    },
         onChangePage: function(pageOfItems){
      try {

      this.pageOfItems = pageOfItems

    
      if (this.search === '')
          this.filteringInfo = false
        else
          this.filteringInfo = true



      
      if(this.filteringInfo === true)
      {
        this.pageSize = 2
        this.pageOfItems = this.filterUsers
       
      }

        console.log(this.pageOfItems)

     window.location.reload
      } catch (error) {
        console.log(error)
        return false;
      }
      
    },

    //  checkExist(event){

        

    //    } 
  
  },
  computed:
  {
   filterUsers: function()
  {


      try { 
          let data = ''
          switch(this.category) {
            case 'Name':
              {
              data =  this.users.filter(user => user.Name.toLowerCase().includes(this.search.toLowerCase()))
              console.log("finding searches")
              //this.onChangePage()
              return data
              }
            case 'Email':
                data =  this.users.filter(user => user.Email.toLowerCase().includes(this.search.toLowerCase()))
             return data
            case 'Phone Number':
              data =  this.users.filter(user => user.Phone.toLowerCase().includes(this.search.toLowerCase()))
              return data
            default:
             data = this.users.filter(user => user.Name.toLowerCase().includes(this.search.toLowerCase()))
           //  console.log(data)
              return data

          }
     
      } catch (error) {
        console.log(error)
        return false
      }
  },
 

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