import { WidgetType } from 'app/pages/dashboard/types/widget.interface';
import { cpuWidget } from 'app/pages/dashboard/widgets/cpu/widget-cpu/widget-cpu.definition';
import { helpWidget } from 'app/pages/dashboard/widgets/help/widget-help/widget-help.definition';
import { memoryWidget } from 'app/pages/dashboard/widgets/memory/widget-memory/widget-memory.definition';
import { hostnameWidget } from 'app/pages/dashboard/widgets/network/widget-hostname/widget-hostname.definition';
import {
  interfaceIpWidget,
} from 'app/pages/dashboard/widgets/network/widget-interface-ip/widget-interface-ip.definition';
import { systemInfoActiveWidget } from 'app/pages/dashboard/widgets/system/widget-sys-info-local/widget-sys-info-local.definition';

export const widgetComponents = [
  hostnameWidget.component,
  interfaceIpWidget.component,
  interfaceIpWidget.settingsComponent,
  helpWidget.component,
  memoryWidget.component,
  cpuWidget.component,
  systemInfoActiveWidget.component,
];

export const widgetRegistry = {
  [WidgetType.Hostname]: hostnameWidget,
  [WidgetType.InterfaceIp]: interfaceIpWidget,
  [WidgetType.Help]: helpWidget,
  [WidgetType.Memory]: memoryWidget,
  [WidgetType.Cpu]: cpuWidget,
  [WidgetType.SystemInfoActive]: systemInfoActiveWidget,
  [WidgetType.SystemInfoPassive]: systemInfoActiveWidget,
};
