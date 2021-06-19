<template>
    <div>
        <mdb-container>
            <mdb-row>
            <mdb-col size="12" class="text-center ">
                <mdb-btn @click.native="showModal = true" color="info" icon="user">Add New User</mdb-btn>
                <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
                <mdb-modal-header class="primary-color white-text">
                    <h4 class="title fas fa-pencil-alt">Add User Form</h4>
                </mdb-modal-header>
                <mdb-modal-body class="grey-text">
                    <mdb-input size="sm" label="Your name" v-model="newUser.Name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your email" v-model="newUser.Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your Phone Number" v-model="newUser.Phone" icon="phone-square-alt" group type="tel" validate error="wrong" success="right"/>
                </mdb-modal-body>
                <mdb-modal-footer>
                    <mdb-btn class="btn btn-outline-purple" @click.native="showModal = false">Close</mdb-btn>
                    <mdb-btn outline="btn btn-outline-purple" @click="addNewUser(newUser.newFullName, newUser.newEmailAdd, newUser.newPhoneNum), showModal = false">Add User</mdb-btn>
                </mdb-modal-footer>
                </mdb-modal>
            </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>    
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { mdbContainer, mdbRow, mdbCol, mdbInput,  mdbBtn,  mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';

export default {
    name: 'NewUserModal',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbInput,
      mdbBtn,      
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter
    },

    data() {
    return {
        showModal: false,
        newUser:{
            Name: '',
            Email: '',
            Phone: '',
            errors:[],
        }
        
    }
    },
     props:{     
     newUserInfoData: Array,
   },
   methods: {
       addNewUser: function(fname, email, phone){  
            console.log("BEFORE",this.errors)
           
           this.ValidateEmail()
           console.log(this.errors)
           let test = (this.errors.length)
           console.log(!test)
           
           if(!test)
           {
                 //exception handling (try catch)
           try {
            
            //newUser recieves user's data
            this.newUser.name = fname
            this.newUser.email = email
            this.newUser.phone = phone

           
          

            this.axios.post("http://localhost:3333/user_data/", this.newUser) //will post the User's data inside the database user_data
            .then((result) =>{
                console.log(result)
                console.log(this.newUser)
                })
                alert('Successfully added new user')
                window.location.reload() //reloads window 
           } 
           catch (error) {
              console.log(error) //throws error on console
           }
         

        

           }
           else{
               var errors = ''
              for (let index = 0; index < this.errors.length; index++) {
                  errors = errors + this.errors[index];
                  if(!((index + 1) == this.errors.length))
                  errors = errors + '\n'
              }
                    alert(errors)
                
              }

                this.resetData()
               
           
                   
       },
        resetData: function()
        {
            this.newUser.Name = '';
            this.newUser.Email = '';
            this.newUser.Phone = '';
            this.errors = []
        },

         async ValidateEmail()
        {
                this.errors = [];
                this.email(this.newUser.Email);
                this.phonenumber(this.newUser.Phone);
                if(!this.newUser.Name) this.errors.push("Name required.");
                console.log(this.errors)
                return this.errors
               
         
                
    
        },
        email: function(emailval)  
        {  
        var x=emailval;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        let currentErrors = ("Please enter a valid e-mail address");  
         this.errors.push(currentErrors)  
         console.log("true",this.errors)
       
        }  

        },

        
         phonenumber: function(inputtxt)
            {
                var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                console.log(inputtxt,phoneno)
                if(!(inputtxt.match(phoneno)))
                    {
                  this.errors.push("Enter a Valid Phone Number")
                    }
            },
                            
   },

   beforeMount()
   {
       this.resetData()
   }
   
}
</script>