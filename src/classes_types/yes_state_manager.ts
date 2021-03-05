import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesStateManager {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const path = YesUtils.getServiceManagerPath(this.moduleName);
        FileUtils.checkDirectory(path);
        fs.writeFileSync(path, this.getServiceClass());
    }

    getServiceClass(): string {
        return `
import 'package:inject/inject.dart';
import 'package:${this.packageName}/${YesUtils.getServiceImport(this.moduleName)}';
import 'package:${this.packageName}/${YesUtils.getStateImport(this.moduleName)}';
import 'package:rxdart/rxdart.dart';

@provide
class ${this.moduleName}StateManager  {
    ${this.moduleName}Service _service;
    final stateStream = PublishSubject<${this.moduleName}State>();
    ${this.moduleName}StateManager(this._service);


}`;
    }
}