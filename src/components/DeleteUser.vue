<template>
  <div>
    
    <!-- Central Modal Medium Success -->
    <mdb-modal :show="isDeleteUser" @close="isDeleteUser = !isDeleteUser" danger>
      <!--Header-->
      <mdb-modal-header>
        <mdb-modal-title>Delete User</mdb-modal-title>
      </mdb-modal-header>
      <!--Body-->
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3" class="text-center"><mdb-icon icon="trash" size="4x"/></mdb-col>
          <mdb-col col="9">
            <h6><strong> Are you Sure you want to Delete This User?</strong></h6>
            <h7><strong> You Are Deleting 'Wolfamania'</strong></h7>
            
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <!--Footer-->
      <mdb-modal-footer center>
        <mdb-btn color="danger" @click.native="danger = false">Delete <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        <mdb-btn outline="danger" @click.native="isDeleteUser = !isDeleteUser">Cancel</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>
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
        danger: false
      };
    }
  }
</script>