import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';

var routes:Routes = [
    {
        path: '',
        component: PaymentComponent
    }
]

@NgModule({
    imports: [ 
        //BrowserModule 
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ PaymentComponent ],
    exports:[PaymentComponent]
})
export class PaymentModule { }