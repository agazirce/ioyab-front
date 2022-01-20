import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupService } from '../../services/group.service';


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss'],
})
export class NewGroupComponent implements OnInit {

  group: any = { };

  constructor(private groupService: GroupService) {}

  ngOnInit() {}

  groupForm() {
    this.groupService.add(this.group)
      .subscribe(data => this.group = data);
  }

}
