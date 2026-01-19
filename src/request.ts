import axios from "axios";

export class Request {
	private endpoints: string[] = [];
	public response: any[] = [];

	constructor(endpoints: string[]) {
		this.endpoints = endpoints;
	}

	public async fetch() {
		for (const endpoint of this.endpoints) {
			const res = await axios.get(endpoint);
			this.response.push(res);
		}
	}
}
