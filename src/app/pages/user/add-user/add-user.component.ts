import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  showPassword = true;
  showConfirmPassword = true;
  constructor(public router: Router) {}

  ngOnInit() {}

  getPassword() {
    this.showPassword = !this.showPassword;
  }
  getConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  goto(value) {
    this.router.navigate([`admin/user/${value}`]);
  }
}
