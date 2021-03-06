import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { DynamicLoader } from './app/dynamic.loader';

import { environment } from './environments/environment';

import LiferayParams from './types/LiferayParams'


// if (environment.production) {
//   enableProdMode();

//   platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// }

  /**
   * This is the actual method that initializes the portlet. It is invoked by the
   * "bootstrap" module.
   *
   * @param  {LiferayParams} params an object with values of interest to the
   * 									portlet
   */
export default function(params: LiferayParams) {
  console.log(params);

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then((injector: any) => {
        // Load the bootstrap component dinamically so that we can attach it
        // to the portlet's DOM, which is different for each portlet
        // instance and, thus, cannot be determined until the page is
        // rendered (during runtime).
        const dynamicLoader = new DynamicLoader(injector);

        dynamicLoader.loadComponent(AppComponent, params);
      });

  }
