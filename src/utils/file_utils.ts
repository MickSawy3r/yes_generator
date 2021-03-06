import * as fs from 'fs';

export class FileUtils {
    static checkDirectory(dir: string): void {
        if (dir.length < 1) {
            return;
        }

        const pathParts = dir.split('/');
        if (pathParts.length < 1) {
            return;
        }
        
        console.log('Checking Path: ' + pathParts.toString());

        let currentPath = pathParts[0];
        for (let i = 0; i < pathParts.length - 1; i++) {
            if (!fs.existsSync(currentPath)) {
                fs.mkdirSync(currentPath);
            }
            currentPath += '/' + pathParts[i+1];
        }
    }
}