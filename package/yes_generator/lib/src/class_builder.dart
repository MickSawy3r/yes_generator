import 'package:build/build.dart';
import 'package:markdown/markdown.dart';

class ModuleClassBuilder extends Builder {
  final BuilderOptions options;
  final String packageName;
  final String className;

  ModuleClassBuilder(
    this.options,
    this.className,
    this.packageName,
  );

  @override
  Map<String, List<String>> get buildExtensions => {
        '.md': ['.dart']
      };

  @override
  Future<void> build(BuildStep buildStep) async {
    print(options.config);
    var config = options.config;

    // Grab the object matching our input file
    var inputId = buildStep.inputId;

    // Create a new target `AssetId`
    var copy = inputId.changeExtension('.dart');
    var contents = await buildStep.readAsString(inputId);

    // Write out the new asset
    await buildStep.writeAsString(copy, '''
import 'package:flutter/material.dart';
import 'package:inject/inject.dart';
import 'package:$packageName/abstracts/module/yes_module.dart';

@provide
class $className extends YesModule {
  $className();
  
  @override
  Map<String, WidgetBuilder> getRoutes() {
    return {
    };
  }
}
    ''');
  }
}
