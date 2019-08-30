import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-merchant-list",
  templateUrl: "./merchant-list.component.html",
  styleUrls: ["./merchant-list.component.css"],
})
export class MerchantListComponent implements OnInit {
  public tableContents = [
    {
      header: ["ID.", "First Name", "Last Name", "Email", "Role", "Status", "Username", "Action"],
      rows: [
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["Cjay", "Sotto", "cjayuu2212@gmail.com", "Admin", "Active", "admin"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c01",
          contents: ["Juan", "Dela Cruz", "benemon19@gmail.com", "Merchant", "Active", "juan"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c02",
          contents: ["Marchael", "Mendiola", "marchael_21@yahoo.com", "Merchant", "Active", "marchael21"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c03",
          contents: ["albert", "garcia", "albert@techcellar.com", "Merchant", "Active", "ryanngarciaa"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c04",
          contents: ["Christian", "Dela Pena", "angelo@techcellar.com", "Merchant", "Active", "caedp"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c05",
          contents: ["Cheska", "Angluben", "anglubenfranccesca@gmail.com	", "Merchant", "Active", "Chesangluben"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c06",
          contents: ["timmy", "chan", "chantimmy721@gmail.com", "Merchant", "Active", "chantimmy124"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "edit-user" }, { fa: "fas fa-search", event: "view-user" }],
          },
        },
      ],
    },
  ];
  constructor(public router: Router) {}

  ngOnInit() {}

  getAction(event: { id: string; action: string }) {
    if (event.action === "edit") {
      this.goto(event.action);
    }
  }

  goto(value: string) {
    this.router.navigate([`home`]);
  }
}
