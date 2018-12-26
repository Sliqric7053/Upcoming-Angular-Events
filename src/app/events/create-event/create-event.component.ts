import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  isDirty = true;

  constructor(private route: Router) {}

  ngOnInit() {}

  cancel() {
    this.route.navigate(['/events']);
  }
}
