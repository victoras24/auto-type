import path from "node:path";
import fs from "node:fs";

export class ApiRoute {
	getEndpoints() {
		const dir = process.cwd();
		const srcDir = path.join(`${dir}/src`);
		this.scanDirectory(srcDir);
	}

	scanDirectory(directoryPath: string) {
		const directoryChilds = fs.readdirSync(directoryPath, {
			withFileTypes: true,
		});
		for (const child of directoryChilds) {
			const childPath = path.join(directoryPath, child.name);
			if (child.isDirectory()) {
				this.scanDirectory(childPath);
			} else if (child.isFile()) {
				if (child.name === "route.ts") {
					return child.parentPath.split("/src")[1];
				}
			}
		}
	}
}
