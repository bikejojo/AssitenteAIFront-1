/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Deshabilitar el CORS
const xhr = new XMLHttpRequest();
xhr.open('GET', '/', true);
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
xhr.send();
