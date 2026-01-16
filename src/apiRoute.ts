import path from "node:path";
import fs from "node:fs";

export class ApiRoute {
	getPath() {
		const dir = process.cwd();
		const srcDir = path.join(`${dir}/src`);
		const srcFiles = fs.readdirSync(srcDir, { withFileTypes: true });

		for (const file of srcFiles) {
			const fullPath = path.join(dir, file.name);
			console.log(fullPath);
		}
	}
}
