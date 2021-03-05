import { YesUtils } from "../utils/yes_utils";
import * as fs from 'fs';
import { FileUtils } from "../utils/file_utils";

export class YesRepository {
    readonly packageName: string;
    readonly moduleName: string;

    constructor(packagename: string, module: string) {
        this.packageName = packagename;
        this.moduleName = module;

        this.writeFile();
    }

    writeFile(): void {
        const path = YesUtils.getRepositoryPath(this.moduleName);
        FileUtils.checkDirectory(path);
        fs.writeFileSync(path, this.getRepositoryClass());
    }
    
    getRepositoryClass(): string {
        return `
import 'package:inject/inject.dart';
import 'package:${this.packageName}/module_network/http_client/http_client.dart';
import 'package:${this.packageName}/utils/logger/logger.dart';

@provide
class ${this.moduleName}Repository  {
    final ApiClient _apiClient = new ApiClient(Logger());
}`;
    }
}