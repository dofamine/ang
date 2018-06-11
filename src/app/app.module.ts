import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {PhoneFormComponent} from './phone-form/phone-form.component';
import {MoreComponent} from './more/more.component';
import {ListComponent} from './list/list.component';
import { TestComponent } from './test/test.component';


@NgModule({
    declarations: [
        AppComponent,
        PhoneFormComponent,
        MoreComponent,
        ListComponent,
        TestComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
