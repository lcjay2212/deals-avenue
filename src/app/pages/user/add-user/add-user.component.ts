import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  showConfirmPassword = false;
  constructor() {}

  ngOnInit() {}

  showPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
