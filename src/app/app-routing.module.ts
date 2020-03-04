import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { EditComponent} from './edit/edit.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'listing', component:ListingComponent},
  {path:'empdata', component:EmpdataComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
