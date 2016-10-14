import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from './main.ngfactory';

enableProdMode();

const platform = platformBrowser();
platform.bootstrapModuleFactory(MainModuleNgFactory);
