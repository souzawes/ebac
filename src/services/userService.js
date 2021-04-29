import HttpRequest from '../infrastructure/httpRequest';

class UserService {
    constructor() {
        this.api = HttpRequest('https://api.github.com/');
    }

    async getUserProfile(userLogin) {
        const result = await this.api.get(`users/${userLogin}`);

        return result.data;
    }
}

export default UserService;