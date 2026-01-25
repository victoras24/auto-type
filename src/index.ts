import { Base } from "./base";

export const generateTypes = Base.generateTypes(
	process.cwd(),
	"src/types/config.ts"
);
