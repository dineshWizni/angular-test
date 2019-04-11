import {Component,OnInit} from '@angular/core';
import {Detail} from '../detail-mock'
import {SummaryService} from '../summary.service'
@Component({
    selector:'display-one',
    templateUrl:'./displayone.component.html',
    styleUrls:['./displayone.component.css']
})
export class DisplayOneComponent implements OnInit{
    detail:Detail
    constructor(private summaryService:SummaryService){

    }
    ngOnInit(){
        this.getDetails();
    }
    getDetails():void{
        this.summaryService.getDetails().subscribe( detail => this.detail = detail  )
    }
}