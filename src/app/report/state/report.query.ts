import { QueryEntity } from '@datorama/akita';
import { ReportStore, ReportState } from './report.store';
import { Report } from './report.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReportQuery extends QueryEntity<ReportState, Report> {
  report$: Observable<Report> = this.selectActive();

  constructor(protected store: ReportStore) {
    super(store);
  }
}