import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

/**
 * @title Table with pagination
 */

@Component({
  selector: 'profile',
  styleUrls: ['profile.component.scss'],
  templateUrl: 'profile.component.html',
})


export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}