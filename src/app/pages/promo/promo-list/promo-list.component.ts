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
            { name: "https://gilc11.sg-host.com/contents/uploads/products/23/img/thumbnail/WIGDVir39rY6w4Mr.png", type: "image" },
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
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: [
            { name: "https://gilc11.sg-host.com/contents/uploads/products/22/img/thumbnail/OZrcHHxArOmPspM0.png", type: "image" },
            "Suunto 9 White",
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
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: [
            { name: "https://gilc11.sg-host.com/contents/uploads/products/14/img/thumbnail/5aeLSrJCVBETOXwV.png", type: "image" },
            "Starbucks",
            "dacp-z16tueoo",
            "TimeDepot",
            "Approved",
            "Active",
          ],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-search", event: "preview" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: [
            { name: "http://gilc11.sg-host.com/contents/uploads/products/19/img/thumbnail/flRE3Px64v89vfxd.png", type: "image" },
            "Test 1234 Lorem Ipsum Imet",
            "dacp-z16tueoo",
            "TimeDepot",
            "Pending For Approval",
            "Active",
          ],
          actions: {
            type: "icon",
            list: [{ fa: "fas fa-search", event: "preview" }],
          },
        },
        {
          id: "60721dc9c05952c56b1301dcfa977c00",
          contents: [
            { name: "https://gilc11.sg-host.com/contents/uploads/products/15/img/thumbnail/mSc6bBz27D6joNwP.png", type: "image" },
            "Disablity discount",
            "dacp-z16tueoo",
            "TimeDepot",
            "Rejected",
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
