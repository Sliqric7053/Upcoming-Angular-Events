import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  isDirty = false;
  ngForm: FormGroup;
  newEvent;

  constructor(private route: Router, private eventService: EventService) {}

  ngOnInit() {}

  cancel() {
    this.route.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = true;
      this.route.navigate(['/events']);
    });
  }
}
