import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesRoutes {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const path = YesUtils.getRoutesPath(this.moduleName);
        FileUtils.checkDirectory(path);
        fs.writeFileSync(path, this.getRoutesClass());
    }
    
    getRoutesClass(): string {
        return `
class ${this.moduleName}Routes {

}`;
    }
}