 const serverURL='http://106.14.92.171:21059';

 export default {
     doLogin: serverURL+'/users/v1/session',
     getUserList: serverURL+'/users/v1',
     
     addUser: serverURL+'/person/add',
     deleteUser: serverURL+'/person/delete',
     editUser: serverURL+'/person/update',
 }