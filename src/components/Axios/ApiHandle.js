import CustomAxios from './Axios';

export default class ApiHandle {
    static getUser() {
        return CustomAxios.get();
    }

}