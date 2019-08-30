import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-merchant",
  templateUrl: "./add-merchant.component.html",
  styleUrls: ["./add-merchant.component.css"],
})
export class AddMerchantComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goto(value: string) {
    this.router.navigate([`admin/merchant/${value}`]);
  }
}
