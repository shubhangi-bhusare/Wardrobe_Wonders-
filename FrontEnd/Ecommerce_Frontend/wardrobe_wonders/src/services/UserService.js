import httpClient from '../http_common';
    const addUser=(data) => {
        return httpClient.post('users/addUser',data)
    };
    const deleteUser = (id) => {
        return httpClient.delete(`users/deleteUser/${id}`);
    };
    const getallusers=()=>{
        return httpClient.get('users/getUsers');
    }
export default {addUser,deleteUser,getallusers};