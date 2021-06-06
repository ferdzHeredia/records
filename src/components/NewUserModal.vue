<template>
    <div>
        <mdb-container>
            <mdb-row>
            <mdb-col size="12" class="text-center ">
                <mdb-btn @click.native="showModal = true" color="info" icon="user">Add New User</mdb-btn>
                <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
                <mdb-modal-header class="primary-color white-text">
                    <h4 class="title "><fa class=" fas fa-pencil-alt" /> Add User Form</h4>
                </mdb-modal-header>
                <mdb-modal-body class="grey-text">
                    <mdb-input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your Phone Number" icon="phone-square-alt" group type="tel" validate error="wrong" success="right"/>
                </mdb-modal-body>
                <mdb-modal-footer>
                    <mdb-btn class="btn btn-outline-purple" @click.native="showModal = false">Close</mdb-btn>
                    <mdb-btn outline="btn btn-outline-purple">Add User</mdb-btn>
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
    name: 'NewUserModal',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbInput,
     // mdbTextarea,
      mdbBtn,      
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter
    },

    data() {
    return {
         showModal: false,
    }
    }
}
</script>