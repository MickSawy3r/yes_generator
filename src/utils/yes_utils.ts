export class YesUtils {
    // static toCamelCase(input: string): string {
    //     return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    //         return group1.toUpperCase();
    //     });
    // }

    static getScreenPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/ui/screen/${moduleName}_screen.dart`;
    }
    
    static getServiceManagerPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/state_manager/${moduleName}_state_manager.dart`;
    }

    static getRoutesPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/${moduleName}_routes.dart`;
    }

    static getModulePath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/${moduleName}_module.dart`;
    }

    static getRepositoryPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/repository/${moduleName}_repository.dart`;
    }

    static getManagerPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/manager/${moduleName}_manager.dart`;
    }

    static getServicePath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/service/${moduleName}_service.dart`;
    }

    static getStateManagerPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/state_manager/${moduleName}_state_manager.dart`;
    }

    static getStatePath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/ui/state/${moduleName}_state.dart`;
    }

    static getStateInitPath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/ui/state/${moduleName}_state_init.dart`;
    }

    static getInitStatePath(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/ui/state/${moduleName}_state_init.dart`;
    }

    static getScreenImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/ui/screen/${moduleName}_screen.dart`;
    }

    static getServiceManagerImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/state_manager/${moduleName}_state_manager.dart`;
    }

    static getRoutesImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `lib/module_${moduleName}/${moduleName}_routes.dart`;
    }

    static getModuleImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/${moduleName}_module.dart`;
    }

    static getRepositoryImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/repository/${moduleName}_repository.dart`;
    }

    static getManagerImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/manager/${moduleName}_manager.dart`;
    }

    static getServiceImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/service/${moduleName}_service.dart`;
    }

    static getStateManagerImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/state_manager/${moduleName}_state_manager.dart`;
    }

    static getStateImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/ui/state/${moduleName}_state.dart`;
    }

    static getInitStateImport(moduleName: string): string {
        moduleName = moduleName.toLowerCase();
        return `module_${moduleName}/ui/state/${moduleName}_state_init.dart`;
    }
}
