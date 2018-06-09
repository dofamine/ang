import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {PhoneFormComponent} from './phone-form/phone-form.component';
import {MoreComponent} from './more/more.component';
import {ListComponent} from './list/list.component';
import {RouterModule} from '@angular/router';

const ROUTES = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'list', component: ListComponent},
    {path: 'main', component: PhoneFormComponent},
    {path: 'details/:id', component: MoreComponent},
    {path: '**', redirectTo: '/main'}
];

@NgModule({
    declarations: [
        AppComponent,
        PhoneFormComponent,
        MoreComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
