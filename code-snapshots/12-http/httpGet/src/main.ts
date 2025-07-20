import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { GitHubService } from './app/github.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

platformBrowserDynamic([
  { provide : GitHubService, useClass : GitHubService}
]).bootstrapModule(AppModule)
  .catch((err) => console.error(err));
