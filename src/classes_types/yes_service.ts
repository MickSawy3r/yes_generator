import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesService {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const path = YesUtils.getServicePath(this.moduleName);
        FileUtils.checkDirectory(path);
        fs.writeFileSync(path, this.getServiceClass());
    }
    
    getServiceClass(): string {
        return `
import 'package:inject/inject.dart';
import 'package:${this.packageName}/${YesUtils.getManagerImport(this.moduleName)}';

@provide
class ${this.moduleName}Service  {
    ${this.moduleName}Manager _manager;

    ${this.moduleName}Service(this._manager);
}`;
    }
}