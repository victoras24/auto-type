import { ApiRoute } from "./apiRoute";
import { inferTypesFromResponse } from "./inferTypes";
import { Request } from "./request";
export class Base {
	public static generateTypes(baseUrl: string, outFile: string) {
		const apiRoute = new ApiRoute(baseUrl);
		const httpRequest = new Request(apiRoute.endpoints);
		inferTypesFromResponse(httpRequest.response);
	}
}
