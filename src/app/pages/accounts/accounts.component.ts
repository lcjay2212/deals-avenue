import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"],
})
export class AccountsComponent implements OnInit {
  modalRef: BsModalRef;
  showInput = false;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalUploadPicture() {}
  modalTakePicture() {}

  updateInfo() {
    this.showInput = !this.showInput;
  }
}
