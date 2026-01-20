import { ApiRoute } from "./apiRoute";
import { Request } from "./request";
export class Base {
	public static generateTypes() {
		const apiRoute = new ApiRoute(process.cwd());
		const request = new Request(apiRoute.endpoints);
		console.log(request);
	}
}
