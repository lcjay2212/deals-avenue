import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUserComponent implements OnInit {
  public tableContents = [
    {
      header: ["ID.", "Email", "First Name", "Last Name", "Active", "Date Created", "Action"],
      rows: [
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["cjayuu2212@gmail.com", "Cjay", "Sotto", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["benemon19@gmail.com", "Marchael", "Mendiola", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["marchael21@gmail.com", "Marchael", "Mendiola", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["marchael_21@yahoo.com", "Marchael", "Mendiola", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["nicole.angluben@gmail.com", "nicole", "angluben", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["garciaryanalbert@gmail.com", "Albert", "Garcia", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: ["nicole.angluben123@gmail.com", "cheska", "angluben", "Active", "2019-07-16 12:05:00 PM"],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-file-alt", event: "file" }],
          },
        },
      ],
    },
  ];

  constructor(private router: Router) {}

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
