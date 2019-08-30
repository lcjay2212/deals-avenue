import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-promo-list",
  templateUrl: "./promo-list.component.html",
  styleUrls: ["./promo-list.component.css"],
})
export class PromoListComponent implements OnInit {
  public tableContents = [
    {
      header: ["ID.", "Image", "Product Name", "Product Reference", "Storne Name", "Status", "Active", "Action"],
      rows: [
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: [
            "https://gilc11.sg-host.com/contents/uploads/products/23/img/thumbnail/WIGDVir39rY6w4Mr.png",
            "Suunto 9 Baro Black Titanium",
            "dacp-z16tueoo",
            "TimeDepot",
            "Approved",
            "Inactive",
          ],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-search", event: "preview" }],
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
    console.log(value);
  }
}
