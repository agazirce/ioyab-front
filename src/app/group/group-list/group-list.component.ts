import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {

  public groups = [];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAllGroups()
      .subscribe(data => this.groups = data );
  }

}
