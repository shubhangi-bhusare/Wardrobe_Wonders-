import httpClient from '../http_common';
    const addUser=(data) => {
        return httpClient.post('users/addUser',data)
    };
    const deleteUser = (id) => {
        return httpClient.delete(`users/deleteUser/${id}`);
    };
export default {addUser,deleteUser};