import { Component } from '@angular/core';
import * as Chart from '../../../../shared/data/charts/widget-charts'


@Component({
  selector: 'app-skill-status',
  templateUrl: './skill-status.component.html',
  styleUrls: ['./skill-status.component.scss']
})
export class SkillStatusComponent {

  public skillstatusChart = Chart.SkillStatusChart
}
