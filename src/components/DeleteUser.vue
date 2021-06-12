<template>
  <div>
    
    <!-- Central Modal Medium Success -->
    <mdb-modal  :show="isDeleteUser " :v-model="UserName()"  @close="isDeleteUser = !isDeleteUser" danger>
      <!--Header-->
      <mdb-modal-header>
        <mdb-modal-title><mdb-icon class="text-white" icon="trash"/> Delete User</mdb-modal-title>
      </mdb-modal-header>
      <!--Body-->
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3" class="text-center"><mdb-icon icon="trash" size="4x"/></mdb-col>
          <mdb-col col="9">
            <h5><strong> Are you Sure you want to Delete This User?</strong></h5>
            <h6><strong> You Are Deleting "{{ Name }}"</strong></h6>
            
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <!--Footer-->
      <mdb-modal-footer center>
        <mdb-btn color="danger" @click.native="[danger = false, deleteUser() ]">Delete <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        <mdb-btn outline="danger" @click.native="isDeleteUser = !isDeleteUser">Cancel</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)
  import { mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbRow, mdbCol, mdbModalFooter } from 'mdbvue';
  export default {
    name:'DeleteUser',
    components: {
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbRow,
      mdbCol,
      mdbModalFooter,
    },
     props:{
     isDeleteUser: Boolean,
   },
    data() {
      return {
        danger: false,
        id: '',
        Name: '',
      };
    },
    methods: {
      deleteUser: function(){
        
        const _id = this.$recieveData[0];
        const url = "http://localhost:3333/user_data/"
        //exception handling (try and catch)
        try{
          this.axios.delete( url + _id ).then((result) =>{
               console.log(result)
               console.log(this.newUser)
           })
           
        }
        catch(e)  //catch error
        {
          console.log(e)  //displays error on console
        }
        
        window.location.reload() //reload page

    },
      UserName: function(){
      this.Name = this.$name

    },
    },
  }
</script>