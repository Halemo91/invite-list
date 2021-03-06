import { InviteService } from "./../service/invite.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../service/invite.service";
import * as _ from "lodash";

export const users: User[] = [
  { email: "user0@comtravo.com" },
  { email: "user1@comtravo.com" },
  { email: "user2@comtravo.com" },
  { email: "user3@comtravo.com" },
  { email: "user4@comtravo.com" },
  { email: "user5@comtravo.com" },
  { email: "user6@comtravo.com" },
  { email: "user7@comtravo.com" },
  { email: "user8@comtravo.com" },
  { email: "user9@comtravo.com" },
  { email: "user10@comtravo.com" }
];

@Component({
  selector: "app-invite",
  templateUrl: "./invite.component.html",
  styleUrls: ["./invite.component.css"]
})
export class InviteComponent implements OnInit {
  myUsers = users;
  allInvited: boolean;
  constructor(private inviteService: InviteService) {}
  ngOnInit(): void {}
  /**
   * get the total no of invited users
   *
   * @readonly
   * @memberof InviteListComponent
   */
  get myInivited() {
    return this.inviteService.myInivited.length;
  }
  /**
   * Invite user
   *
   * @memberof InviteComponent
   */
  onSubmit(): void {
    if (this.myUsers && this.myUsers.length > 0) {
      for (let i = 0; i < this.myUsers.length; i++) {
        this.inviteService.invite(this.myUsers[i]);
      }
    }
  }
}
