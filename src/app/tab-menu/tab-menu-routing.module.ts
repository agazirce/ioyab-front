import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from '../group/group-list/group-list.component';

import { TabMenuPage } from './tab-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TabMenuPage
  },
  {
    path: 'group/group-list',
    component: GroupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMenuPageRoutingModule {}
