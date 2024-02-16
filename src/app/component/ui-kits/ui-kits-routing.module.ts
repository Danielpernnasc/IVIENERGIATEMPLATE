import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { AvtarsComponent } from './avtars/avtars.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { GridComponent } from './grid/grid.component';
import { TagPillsComponent } from './tag-pills/tag-pills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { AlertComponent } from './alert/alert.component';
import { PopoverComponent } from './popover/popover.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'typography',
        component : TypographyComponent,
        data : {
          title : 'Typography',
          breadcrumb : 'Typography'
        }
      },
      {
        path : 'avatars',
        component : AvtarsComponent,
        data : {
          title : 'Avatars',
          breadcrumb : 'Avatars'
        }
      },
      {
        path : 'helper-classes',
        component : HelperClassesComponent,
        data : {
          title : 'Helper Classes',
          breadcrumb : 'Helper Classes'
        }
      },
      {
        path : 'grid',
        component : GridComponent,
        data : {
          title : 'Grid',
          breadcrumb : 'Grid'
        }
      },
      {
        path : 'tag-pills',
        component : TagPillsComponent,
        data : {
          title : 'Tag & Pills',
          breadcrumb : 'Tag & Pills'
        }
      },
      {
        path : 'progress',
        component : ProgressBarComponent,
        data : {
          title : 'Progress',
          breadcrumb : 'Progress'
        }
      },
      {
        path : 'modal',
        component : UiModalComponent,
        data : {
          title : 'Modal',
          breadcrumb : 'Modal'
        }
      },
      {
        path : 'alert',
        component : AlertComponent,
        data : {
          title : 'Alert',
          breadcrumb : 'Alert'
        }
      },
      {
        path : 'popover',
        component : PopoverComponent,
        data : {
          title : 'Popover',
          breadcrumb : 'Popover'
        }
      },
      {
        path : 'tooltip',
        component : TooltipComponent,
        data : {
          title : 'Tooltip',
          breadcrumb : 'Tooltip'
        }
      },
      {
        path : 'dropdown',
        component : DropdownComponent,
        data : {
          title : 'Dropdown',
          breadcrumb : 'Dropdwon'
        }
      },
      {
        path : 'accordion',
        component : AccordionComponent,
        data : {
          title : 'Accordion',
          breadcrumb : 'Accordion',
        }
      },
      {
        path : 'tabs',
        component : TabsComponent,
        data : {
          title : 'Tabs',
          breadcrumb : 'Tabs'
        }
      },
      {
        path : 'lists',
        component : ListsComponent,
        data : {
          title : 'Lists',
          breadcrumb : 'Lists'
        }
      }
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiKitsRoutingModule { }
