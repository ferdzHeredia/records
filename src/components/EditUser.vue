<template>
    <div>
        <mdb-container>
            <mdb-row>
            <mdb-col size="12" class="text-center ">
                
                <mdb-modal :show="issshowEditModal" @close="issshowEditModal = !issshowEditModal" cascade class="text-left">
                <mdb-modal-header class="primary-color white-text">
                    <h4 class="title "><fa class=" fas fa-pencil-alt" /> Update form</h4>
                </mdb-modal-header>
                <mdb-modal-body class="grey-text">
                    <mdb-input size="sm" label="Your name" v-model="fullName" icon="user" group type="text" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your email" v-model="EmailAdd" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your Phone Number" v-model="phoneNum" icon="phone-square-alt" group type="tel" validate error="wrong" success="right"/>
                </mdb-modal-body>
                <mdb-modal-footer>
                    <mdb-btn class="btn btn-outline-purple" @click.native="issshowEditModal = !issshowEditModal">Close</mdb-btn>
                    <mdb-btn outline="btn btn-outline-purple">Update User</mdb-btn>
                </mdb-modal-footer>
                </mdb-modal>
            </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>    
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput,  mdbBtn,  mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
export default {

    name: 'EditUser',
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
     props:{
     issshowEditModal: Boolean,
     phoneNum: String,
     EmailAdd: String,
     fullName: String,

   },

    data() {
    return {
         showEditModalss: false,
    }
    }
    
  }
    
</script>