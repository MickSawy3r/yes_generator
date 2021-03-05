import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesStates {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const statePath = YesUtils.getStatePath(this.moduleName);
        const initStatePath = YesUtils.getStateInitPath(this.moduleName);
        FileUtils.checkDirectory(statePath);
        FileUtils.checkDirectory(initStatePath);
        fs.writeFileSync(initStatePath, this.getInitStateClass());
        fs.writeFileSync(statePath, this.getStatesClass());
    }

    getStatesClass(): string {
        return `
import 'package:flutter/material.dart';
import 'package:${this.packageName}/${YesUtils.getScreenImport(this.moduleName)}';

abstract class ${this.moduleName}State {
    final ${this.moduleName}Screen screen;
    ${this.moduleName}State(this.screen);

    Widget getUI(BuildContext context);
}`;
    }

    getInitStateClass(): string {
        return `
import 'package:flutter/material.dart';
import '${this.moduleName.toLowerCase()}_state.dart';
import 'package:${this.packageName}/${YesUtils.getScreenImport(this.moduleName)}';

class ${this.moduleName}StateInit extends ${this.moduleName}State {
    final ${this.moduleName}Screen screen;
    ${this.moduleName}StateInit(this.screen): super(screen);

    Widget getUI(BuildContext context) {
        // TODO: Implement This
        return Text('Hello!');
    }
}`;
    }
}