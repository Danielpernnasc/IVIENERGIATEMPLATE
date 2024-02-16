import { Component } from '@angular/core';
import * as auditlog from '../../../../shared/data/data/ecommerce/audit-log'

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent {

  public AuditLogData = auditlog.Auditlog

}
