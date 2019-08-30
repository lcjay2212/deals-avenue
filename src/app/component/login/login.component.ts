import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ValidateService } from "src/app/services/validate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  account = {
    email: "",
    password: "",
  };
  submitLoading = false;

  constructor(private router: Router, private validate: ValidateService) {}

  ngOnInit() {}

  createForm(): void {
    this.form = new FormGroup({
      email: new FormControl(this.account.email, [Validators.required, this.validate.email]),
      password: new FormControl(this.account.password, [Validators.required]),
    });
  }

  get email(): AbstractControl {
    return this.form.get("email");
  }

  get password(): AbstractControl {
    return this.form.get("password");
  }

  goto() {
    this.router.navigate(["admin/home"]);
  }
}
