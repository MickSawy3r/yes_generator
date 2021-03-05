import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesModule {
  readonly packageName: string;
  readonly moduleName: string;

  constructor(packagename: string, module: string) {
    this.packageName = packagename;
    this.moduleName = module;

    this.writeFile();
  }

  writeFile(): void {
    const path = YesUtils.getModulePath(this.moduleName);
    FileUtils.checkDirectory(path);
    fs.writeFileSync(path, this.getModuleClass());
  }

  getModuleClass(): string {
    return `
import 'package:flutter/cupertino.dart';
import 'package:inject/inject.dart';

import 'package:${this.packageName}/${YesUtils.getRoutesImport(this.moduleName)}';

@provide 
class ${this.moduleName}Module extends YesModule {

  ${this.moduleName}Module();

  @override
  Map<String, WidgetBuilder> getRoutes() {
    return {
    };
  }
}
    `;
  }


}