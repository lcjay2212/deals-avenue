import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Component
import { LoginComponent } from "./component/login/login.component";
import { AdminComponent } from "./component/admin/admin.component";

//pages
import { AccountsComponent } from "./pages/accounts/accounts.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { HomeComponent } from "./component/home/home.component";
import { AddUserComponent } from "./pages/user/add-user/add-user.component";
import { SignUpComponent } from "./component/login/sign-up/sign-up.component";
import { ListUserComponent } from "./pages/user/list-user/list-user.component";
import { PromoApprovalComponent } from "./pages/promo/promo-approval/promo-approval.component";
import { PromoListComponent } from "./pages/promo/promo-list/promo-list.component";
import { AddMerchantComponent } from "./pages/merchant/add-merchant/add-merchant.component";
import { MerchantListComponent } from "./pages/merchant/merchant-list/merchant-list.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "profile", component: AccountsComponent },
      {
        path: "user",
        children: [{ path: "list", component: ListUserComponent }, { path: "add", component: AddUserComponent }],
      },
      {
        path: "merchant",
        children: [{ path: "add", component: AddMerchantComponent }, { path: "list", component: MerchantListComponent }],
      },

      { path: "report", component: ReportsComponent },
      { path: "promo-approval", component: PromoApprovalComponent },
      { path: "promos", component: PromoListComponent },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
