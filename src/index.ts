import { Base } from "./base";

const mockupData = {
	isSaved: true,
	what: "this is something",
	lets: ["string", "sssss"],
};

const base = new Base();
base.inferTypesFromResponse(mockupData);
