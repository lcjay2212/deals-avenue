import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  @Output() public action = new EventEmitter();
  @Input() public tableContents: { header: string[]; rows?: any[] }[];

  constructor() {}

  ngOnInit() {}

  setAction(id: string, action: string, details: any) {
    this.action.emit({ id, action, details });
  }
  goto(link: string, action: string) {
    this.action.emit({ link, action });
  }
}
