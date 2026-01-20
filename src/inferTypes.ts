type PrimitiveTypes = boolean | string | number;

export class InferTypes {
	private typeArray: string[] = [];
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
				console.warn(`Data type cannot be handled ${data}`);
				break;
		}
	};

	handleObjectType = (data: object): string[] => {
		if (Object.entries(data).length > 0) {
			Object.values(data).map((d) => {
				if (typeof d != "object") {
					this.typeArray.push(typeof d);
				} else {
					const val = JSON.stringify(d);
					if (val[0] == "[") {
						this.handleArrayType(d);
					} else if (val[0] == "{") {
						this.inferTypesFromResponse(d);
					}
				}
			});
		}

		return this.typeArray;
	};

	handleArrayType = (array: object) => {
		if (Array.isArray(array)) {
			switch (typeof array[0]) {
				case "string":
					this.typeArray.push("string[]");
					break;
				case "boolean":
					this.typeArray.push("boolean[]");
					break;
				case "number":
					this.typeArray.push("number[]");
					break;
				case "object":
					this.handleObjectType(array);
					break;
			}
		}
	};
}
