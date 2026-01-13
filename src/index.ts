const mockupData = {
	isSaved: true,
	what: "this is something",
	lets: ["string", "sssss"],
};

type PrimitiveTypes = boolean | string | number;

export const inferTypesFromResponse = (data: any) => {
	if (data == null) return null;

	switch (typeof data) {
		case "boolean":
		case "string":
		case "number":
			return typeof data;
		case "object":
			return handleObjectType(data);
		default:
			break;
	}
};

const handleObjectType = (data: object): string[] => {
	let typeArray: string[] = [];

	if (Object.entries(data).length > 0) {
		Object.values(data).map((d) => {
			return typeArray.push(typeof d);
		});
	}

	return typeArray;
};

const handleArrayType = (data: any[]): string => {
	return typeof data[0];
};

inferTypesFromResponse(mockupData);
