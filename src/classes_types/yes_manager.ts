import { FileUtils } from "../utils/file_utils";
import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';

export class YesManager {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const path = YesUtils.getManagerPath(this.moduleName);
        FileUtils.checkDirectory(path);
        fs.writeFileSync(path, this.getManagerClass());
    }

    getManagerClass(): string {
        return `
import 'package:inject/inject.dart';
import 'package:${this.packageName}/${YesUtils.getRepositoryImport(this.moduleName)}';

@provide
class ${this.moduleName}Manager  {
    ${this.moduleName}Repository _repository;

    ${this.moduleName}Manager(this._repository);
}`;
    }
}