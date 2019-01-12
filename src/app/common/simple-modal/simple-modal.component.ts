import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() onBodyClick: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') modalContainer: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit() {}

  closeModal() {
    if (this.onBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.modalContainer.nativeElement).modal('hide');
    }
  }
}
