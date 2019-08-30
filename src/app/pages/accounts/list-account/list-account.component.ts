import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-account",
  templateUrl: "./list-account.component.html",
  styleUrls: ["./list-account.component.css"],
})
export class ListAccountComponent implements OnInit {
  public tableContents = [
    {
      header: [
        /* "ID.", "Email", "First Name", "Last Name", "Active", "Date Created", "Action" */
      ],
      rows: [
        // {
        //   id: "60721dc9c05952c56b1301dcfa977c00",
        //   contents: ["cjayuu2212@gmail.com", "Cjay", "Sotto", "Active", "2019-08-28"],
        //   actions: {
        //     type: "icon",
        //     list: [{ fa: "fas fa-file-alt", event: "file" }],
        //   },
        // },
        // {
        //   id: "60721dc9c05952c56b1301dcfa977c00",
        //   contents: ["cjayuu2212@gmail.com", "Cjay", "Sotto", "Active", "2019-08-28"],
        //   actions: {
        //     type: "icon",
        //     list: [{ fa: "fas fa-file-alt", event: "file" }],
        //   },
        // },
        // {
        //   id: "60721dc9c05952c56b1301dcfa977c00",
        //   contents: ["cjayuu2212@gmail.com", "Cjay", "Sotto", "Active", "2019-08-28"],
        //   actions: {
        //     type: "icon",
        //     list: [{ fa: "fas fa-file-alt", event: "file" }],
        //   },
        // },
        // {
        //   id: "60721dc9c05952c56b1301dcfa977c00",
        //   contents: ["cjayuu2212@gmail.com", "Cjay", "Sotto", "Active", "2019-08-28"],
        //   actions: {
        //     type: "icon",
        //     list: [{ fa: "fas fa-file-alt", event: "file" }],
        //   },
        // },
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
