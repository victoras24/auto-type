import { describe, it, expect } from "vitest";
import { InferTypes } from "../src/inferTypes";
import { ApiRoute } from "../src/apiRoute";
import { Request } from "../src/request";

const base = new InferTypes();

const apiRoute = new ApiRoute(process.cwd());
console.log(apiRoute.endpoints);
const request = new Request(apiRoute.endpoints);
console.log(request);

describe("inferTypesFromResponse", () => {
	it("infers primitive types", () => {
		expect(base.inferTypesFromResponse("hello")).toBe("string");
		expect(base.inferTypesFromResponse(42)).toBe("number");
		expect(base.inferTypesFromResponse(true)).toBe("boolean");
	});

	it("infers objects", () => {
		expect(
			base.inferTypesFromResponse({
				bool: true,
				string: "this is something",
				objectWithStringProp: { string: "wow" },
				arrayOfStrings: ["string1", "string2"],
			})
		).toStrictEqual(["boolean", "string", "string", "string[]"]);
		expect(base.inferTypesFromResponse(null)).toBe(null);
	});
});
