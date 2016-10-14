import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);