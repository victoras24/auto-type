import { describe, it, expect } from "vitest";
import { Base } from "../src/base";
import { ApiRoute } from "../src/apiRoute";

const base = new Base();

const apiRoute = new ApiRoute();
apiRoute.getEndpoints();

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
