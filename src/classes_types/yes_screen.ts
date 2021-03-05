import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesScreen {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const path = YesUtils.getScreenPath(this.moduleName);
        FileUtils.checkDirectory(path);
        fs.writeFileSync(path, this.getScreenClass());
    }

    getScreenClass(): string {
        return `import 'dart:async';

import 'package:inject/inject.dart';
import 'package:flutter/material.dart';
import 'package:${this.packageName}/${YesUtils.getStateManagerImport(this.moduleName)}';
import 'package:${this.packageName}/${YesUtils.getStateImport(this.moduleName)}';
import 'package:${this.packageName}/${YesUtils.getInitStateImport(this.moduleName)}';

@provide
class ${this.moduleName}Screen extends StatefulWidget {
    ${this.moduleName}StateManager _stateManager;
    ${this.moduleName}Screen(this._stateManager);

    @override
    _${this.moduleName}ScreenState createState() => _${this.moduleName}ScreenState();
}

class _${this.moduleName}ScreenState extends State<${this.moduleName}Screen> {
    ${this.moduleName}State _currentState;
    StreamSubscription _stateSubscription;

    @override
    void initState() {
        super.initState();
        _stateSubscription = widget._stateManager.stateStream.listen((event) {
            if (mounted) setState(() { _currentState = event; });
        });
    }

    @override
    Widget build(BuildContext context) {
        _currentState ??= ${this.moduleName}StateInit(widget);
        return Scaffold(
            appBar: AppBar(title: Text('${this.moduleName}'),),
            body: _currentState.getUI(context),
        );
    }

    @override
    void dispose() {
        if (_stateSubscription != null) {
            _stateSubscription.cancel();
        }
        super.dispose();
    }
}
`;
    }
}