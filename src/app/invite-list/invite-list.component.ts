import { Component, OnInit, SimpleChange, OnChanges } from "@angular/core";
import { Observable } from "rxjs";
import { InviteService, User } from "../service/invite.service";

@Component({
  selector: "app-invite-list",
  templateUrl: "./invite-list.component.html",
  styleUrls: ["./invite-list.component.css"]
})
export class InviteListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private inviteService: InviteService) {
    this.users$ = this.inviteService.get();
  }
  /**
   * get the loading icon from the service
   *
   * @readonly
   * @memberof InviteListComponent
   */
  get loading() {
    return this.inviteService.loading;
  }

  /**
   * get the total no of invited users
   *
   * @readonly
   * @memberof InviteListComponent
   */
  get myInivited() {
    return this.inviteService.myInivited.length;
  }
  ngOnInit(): void {
    this.users$.subscribe(res => {
    });
  }
}
