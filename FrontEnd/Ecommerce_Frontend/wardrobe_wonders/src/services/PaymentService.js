import httpClient from '../http_common';
const makePayment=(data) => {
    return httpClient.post('payments/createPayment',data)
};

export default {makePayment};