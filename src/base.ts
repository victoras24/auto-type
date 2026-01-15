type PrimitiveTypes = boolean | string | number;

export class Base {
	constructor() {}

	inferTypesFromResponse = (data: any) => {
		if (data == null) return null;

		switch (typeof data) {
			case "boolean":
			case "string":
			case "number":
				return typeof data;
			case "object":
				return this.handleObjectType(data);
			default:
				break;
		}
	};

	handleObjectType = (data: object): string[] => {
		let typeArray: string[] = [];

		if (Object.entries(data).length > 0) {
			Object.values(data).map((d) => {
				return typeArray.push(typeof d);
			});
		}

		return typeArray;
	};

	handleArrayType = (data: any[]): string => {
		return typeof data[0];
	};
}
