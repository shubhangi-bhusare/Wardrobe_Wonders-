import httpClient from '../http_common';

const addProduct=(data) => {
    return httpClient.post('products/addProduct',data)
};
const deleteProduct = (id) => {
    return httpClient.delete(`products/deleteProduct/${id}`);
};
const updateProduct=(data)=>{
    return httpClient.put('products/updateProduct',data);
}
const getAllproducts=()=>{
    return httpClient.get('products/getProducts')
}
export default {addProduct,deleteProduct,updateProduct,getAllproducts};