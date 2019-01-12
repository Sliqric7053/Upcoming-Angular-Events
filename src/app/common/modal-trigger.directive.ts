import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[appModalTrigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  // tslint:disable-next-line:no-input-rename
  @Input() appModalTrigger: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.el.addEventListener('click', e => {
      this.$(`#${this.appModalTrigger}`).modal({});
    });
  }
}
