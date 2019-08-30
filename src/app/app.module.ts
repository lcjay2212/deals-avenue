import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

//component
import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { HomeComponent } from "./component/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { AdminComponent } from "./component/admin/admin.component";
import { UserComponent } from "./pages/user/user.component";
import { AddUserComponent } from "./pages/user/add-user/add-user.component";
import { AddAccountComponent } from "./pages/accounts/add-account/add-account.component";
import { EditAccountComponent } from "./pages/accounts/edit-account/edit-account.component";
import { ListAccountComponent } from "./pages/accounts/list-account/list-account.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AccountsComponent } from "./pages/accounts/accounts.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { TableComponent } from "./utilities/table/table.component";
import { SignUpComponent } from "./component/login/sign-up/sign-up.component";

//ngx-bootstrap
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ListUserComponent } from "./pages/user/list-user/list-user.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { PromoApprovalComponent } from "./pages/promo/promo-approval/promo-approval.component";
import { PromoListComponent } from "./pages/promo/promo-list/promo-list.component";
import { MerchantListComponent } from "./pages/merchant/merchant-list/merchant-list.component";
import { AddMerchantComponent } from "./pages/merchant/add-merchant/add-merchant.component";
import { TagsComponent } from "./pages/tags/tags.component";
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AccountsComponent,
    ReportsComponent,
    TableComponent,
    AdminComponent,
    UserComponent,
    AddUserComponent,
    AddAccountComponent,
    EditAccountComponent,
    ListAccountComponent,
    SignUpComponent,
    ListUserComponent,
    PromoApprovalComponent,
    PromoListComponent,
    MerchantListComponent,
    AddMerchantComponent,
    TagsComponent,
    CategoriesComponent,
  ],
  // tslint:disable-next-line: max-line-length
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
