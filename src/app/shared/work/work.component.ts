import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
@Component({
  selector: 'aa-work',
  templateUrl: './work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
) {}

onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
): void {
    this.dialogService
        .open(content, {
            label: 'What a cool library set',
            header,
            size,
        })
        .subscribe();
}

}
