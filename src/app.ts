import * as fs from 'fs';
import { YesManager } from './classes_types/yes_manager';
import { YesModule } from './classes_types/yes_module';
import { YesRepository } from './classes_types/yes_repository';
import { YesRoutes } from './classes_types/yes_routes';
import { YesScreen } from './classes_types/yes_screen';
import { YesService } from './classes_types/yes_service';
import { YesStates } from './classes_types/yes_states';
import { YesStateManager } from './classes_types/yes_state_manager';

function main() {
    new YesModule('barter', 'Barter');
    new YesRoutes('barter', 'Barter');
    new YesRepository('barter', 'Barter');
    new YesManager('barter', 'Barter');
    new YesService('barter', 'Barter');
    new YesStateManager('barter', 'Barter');
    new YesScreen('barter', 'Barter');
    new YesStates('barter', 'Barter');
}

main();
