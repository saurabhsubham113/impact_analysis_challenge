import _axios from 'axios';

export default class CustomAxios {
    static axios = _axios.create({
        baseURL: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
    });

    static async get() {
        try {
            const response = await this.axios.get();

            if (response) return response.data;

        } catch (error) {
            this.handleErrors(error);
            return Promise.reject(error);
        }
    }

    //Handling errors of the axios
    static handleErrors(error) {

        if (error.response) {
            const message = error.response.data.message;
            const errorMessage = message ? message : 'something went wrong.'
            console.log(errorMessage);
        } else {
            console.log('something went wrong');
        }
    }
}