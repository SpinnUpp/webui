import {
  ChangeDetectionStrategy, Component, input,
} from '@angular/core';
import { toLoadingState } from 'app/helpers/operators/to-loading-state.helper';
import { WidgetResourcesService } from 'app/pages/dashboard/services/widget-resources.service';
import { WidgetComponent } from 'app/pages/dashboard/types/widget-component.interface';
import {
  SlotSize,
} from 'app/pages/dashboard/types/widget.interface';
import { hostnameWidget } from 'app/pages/dashboard/widgets/network/widget-hostname/widget-hostname.definition';

@Component({
  selector: 'ix-widget-hostname',
  templateUrl: './widget-hostname.component.html',
  styleUrls: ['./widget-hostname.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetHostnameComponent implements WidgetComponent {
  size = input.required<SlotSize>();
  readonly name = hostnameWidget.name;

  systemInfo$ = this.resources.systemInfo$.pipe(toLoadingState());

  constructor(
    private resources: WidgetResourcesService,
  ) {}
}
