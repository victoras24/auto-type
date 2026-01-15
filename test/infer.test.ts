import { describe, it, expect } from "vitest";
import { Base } from "../src/base";

const base = new Base();

describe("inferTypesFromResponse", () => {
	it("infers primitive types", () => {
		expect(base.inferTypesFromResponse("hello")).toBe("string");
		expect(base.inferTypesFromResponse(42)).toBe("number");
		expect(base.inferTypesFromResponse(true)).toBe("boolean");
	});

	it("infers objects", () => {
		expect(
			base.inferTypesFromResponse({
				isSaved: true,
				what: "this is something",
				lets: ["string", "sssss"],
			})
		).toStrictEqual(["boolean", "string", "object"]);
		expect(base.inferTypesFromResponse(null)).toBe(null);
	});
});
