import httpClient from '../http_common';
const getAllOrderS=()=>{
    return httpClient.get('orders/getOrders');
}
export default {getAllOrderS};