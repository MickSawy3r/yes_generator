import * as fs from 'fs';
import jsyaml from 'js-yaml';
import { YesManager } from './classes_types/yes_manager';
import { YesModule } from './classes_types/yes_module';
import { YesRepository } from './classes_types/yes_repository';
import { YesRoutes } from './classes_types/yes_routes';
import { YesScreen } from './classes_types/yes_screen';
import { YesService } from './classes_types/yes_service';
import { YesStates } from './classes_types/yes_states';
import { YesStateManager } from './classes_types/yes_state_manager';

function createFullModule(packageName: string) {
    const moduleName = process.argv[3];
    if (!moduleName) {
        throw 'Unknown module name';
    }
    new YesModule(packageName, moduleName);
    new YesRoutes(packageName, moduleName);
    new YesRepository(packageName, moduleName);
    new YesManager(packageName, moduleName);
    new YesService(packageName, moduleName);
    new YesStateManager(packageName, moduleName);
    new YesScreen(packageName, moduleName);
    new YesStates(packageName, moduleName);
}

function getPackageName(): string {
    const spec = jsyaml.load(fs.readFileSync('pubspec.yaml', 'utf-8'));
    if (spec == null) {
        throw 'Error Finding pubspec.yaml'
    }

    const s: any = spec;
    return s['name'];
}

function main() {
    const packageName = getPackageName();

    switch (process.argv[2]) {
        case 'g':
            createFullModule(packageName);
            break;
        default:
            console.log('Unknown command. ' + process.argv[2]);
            console.log('Please use g to generate modules');
    }
}