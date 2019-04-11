import {Component,OnInit} from '@angular/core';
import {FieldBase,FieldBaseOptions} from '../fields-base'
import {FormBuilder,FormControl} from '@angular/forms'
@Component({
    selector:'app-name-editor',
    templateUrl:'./name-editor.component.html',
    styleUrls:['./name-editor.component.css']
})

export class NameEditorComponent implements OnInit {
    fieldBases:FieldBase[]=FieldBaseOptions
    constructor(private fb:FormBuilder){

    }
    ngOnInit(){
        
    }
    detailForm = this.fb.group({
        FirstName:[''],
        DateofBirth:[''],
        PolicyNumber:['']
    });
    onDetailFormSubmit(){
        alert('thank you for details')
    }
}
