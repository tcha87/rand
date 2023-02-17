import { Component,ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
  selector: 'aa-work',
  templateUrl: './work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(
    @Inject(TuiDialogService)
    private readonly dialogService: TuiDialogService,
  ) {}
 
  showDialog(): void {
    this.dialogService
        .open('This is a plain string dialog', {label: 'Heading', size: 's'})
        .subscribe();
}

showDialogWithCustomButton(): void {
    this.dialogService
        .open('Good, Anakin, Good!', {
            label: 'Star wars. Episode III',
            size: 's',
            data: {button: 'Do it!'},
        })
        .subscribe();
}
  open() {
    this.dialogService.open('Hello!').subscribe();
  }

  ngOnInit(): void {
  }

}
