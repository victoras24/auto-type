import { describe, it, expect } from "vitest";
import { inferTypesFromResponse } from "../src/index";

describe("inferTypesFromResponse", () => {
	it("infers primitive types", () => {
		expect(inferTypesFromResponse("hello")).toBe("string");
		expect(inferTypesFromResponse(42)).toBe("number");
		expect(inferTypesFromResponse(true)).toBe("boolean");
	});

	it("infers objects", () => {
		expect(
			inferTypesFromResponse({
				isSaved: true,
				what: "this is something",
				lets: ["string", "sssss"],
			})
		).toStrictEqual(["boolean", "string", "object"]);
		expect(inferTypesFromResponse(null)).toBe(null);
	});
});
