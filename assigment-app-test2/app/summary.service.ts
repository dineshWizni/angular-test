import {Injectable} from '@angular/core';
import {IncidentDetail,Detail} from './detail-mock'
import {Observable,of} from 'rxjs'
@Injectable({
    providedIn:'root'
})
export class SummaryService {
    constructor(){

    }
    getDetails():Observable<Detail>{
        return of(IncidentDetail)
    }
}