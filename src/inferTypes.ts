export const inferTypesFromResponse = (data: unknown): string[] => {
	if (data == null) return [];

	switch (typeof data) {
		case "boolean":
		case "string":
		case "number":
			return [typeof data];
		case "object":
			return handleObjectType(data);
		default:
			console.warn(`Data type cannot be handled ${String(data)}`);
			return [];
	}
};

const handleObjectType = (data: object): string[] => {
	const result: string[] = [];

	for (const value of Object.values(data)) {
		if (value == null) continue;

		if (Array.isArray(value)) {
			result.push(...handleArrayType(value));
		} else if (typeof value === "object") {
			result.push(...inferTypesFromResponse(value));
		} else {
			result.push(typeof value);
		}
	}

	return result;
};

const handleArrayType = (array: unknown[]): string[] => {
	if (array.length === 0) return [];

	const first = array[0];

	if (typeof first === "string") return ["string[]"];
	if (typeof first === "number") return ["number[]"];
	if (typeof first === "boolean") return ["boolean[]"];
	if (typeof first === "object") return inferTypesFromResponse(first);

	return [];
};
