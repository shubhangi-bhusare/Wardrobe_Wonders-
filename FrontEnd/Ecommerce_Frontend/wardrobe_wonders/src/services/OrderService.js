// //import Product from '../Product';
// import axios from 'axios';
// //var baseUrl="http://localhost:3002/products"
// var baseUrl="http://localhost:7070/orders"
// class OrderService{
    
//     constructor(){
//     }
//     getAllOrder(){
//         return axios.get(baseUrl);
//     }

//     getById(id){
//         return axios.get(baseUrl+"/"+id);
//     }
//     addOrder(order){
//         //add product at the end of the array
//         //var headers={"content-type":"application/json",Atherization:"barer+<token>"}
//         var myheader={"content-type":"application/json"}
//         return axios.post(baseUrl+"/"+order.id,order,{headers:myheader}) 
//     }
//     updateOrder(order){
//         var myheader={"content-type":"application/json"}
//        return axios.put(baseUrl+"/"+order.id,order,{headers:myheader})
       
//     }
//     deleteOrder(id){
//         return axios.delete(baseUrl+"/"+id)
//     }
// }

// export default new OrderService();