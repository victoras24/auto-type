import path from "node:path";
import fs from "node:fs";

export class ApiRoute {
	public endpoints: string[] = [];
	private currentDirectory: string;

	constructor(currentDirectory: string) {
		this.currentDirectory = currentDirectory;
		this.getEndpoints();
	}

	public getEndpoints() {
		const srcDir = path.join(`${this.currentDirectory}/src`);
		this.scanDirectory(srcDir);
	}

	private scanDirectory(directoryPath: string) {
		const directoryChilds = fs.readdirSync(directoryPath, {
			withFileTypes: true,
		});
		for (const child of directoryChilds) {
			const childPath = path.join(directoryPath, child.name);
			if (child.isDirectory()) {
				this.scanDirectory(childPath);
			} else if (child.isFile()) {
				if (child.name === "route.ts") {
					this.endpoints.push(child.parentPath.split("/src")[1]);
				}
			}
		}
	}
}
