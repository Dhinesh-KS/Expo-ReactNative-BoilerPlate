import Client from './AxiosClient';
import * as Endpoint from './APIendpoints';

const HttpClient = {
	getUsers: () => {
		return Client.get(Endpoint.getUsers);
	},
	postUser: (data = {}) => {
		return Client.post(Endpoint.postUsers, data);
	},
	editUser: (id, data = {}) => {
		return Client.put(Endpoint.editUser + id, data);
	}
};

export { HttpClient };
