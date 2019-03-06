// Import Angular router module
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import components
import { PostsComponent} from './components/posts/posts.component';


// Routes array
const appRoutes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostsComponent
  },
  // {
  //   path: 'http-requests',
  //   component: HttpRequestsComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  {
    path: '**',  // Not found view
    component: PostsComponent
  }
];

// Export router module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


