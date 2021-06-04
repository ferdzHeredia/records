import Vue from 'vue';
import Router from 'vue-router';
import Table from '@/components/Table';
import NewUserModal from '@/components/NewUserModal';
import EditUser from '@/components/EditUser';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/NewUserModal',
      name: 'NewUserModal',
      component: NewUserModal
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      component: EditUser
    },

  ]
});
