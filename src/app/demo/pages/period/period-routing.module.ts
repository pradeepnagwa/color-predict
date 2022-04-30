import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeriodComponent } from "./period/period.component";
const routes: Routes = [{
    path: '',
    component:PeriodComponent
    // children: [{
    //     path: 'list',
    //     component: ListPeriodComponent
    // },
    // {
    //     path: 'add',
    //     component: AddPeriodComponent
    // }]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeriodRoutingModule { }