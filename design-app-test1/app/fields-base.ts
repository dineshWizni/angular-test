export class FieldBase {
	type:string;
	label:string;
	name:string;
	required:boolean;
  datatype:string;
  constructor(){

  }
}

export const FieldBaseOptions : FieldBase[]= [
  {
    "type": "text",
    "label": "First Name",
    "name": "FirstName",
    "required": true,
    "datatype": "string"
  },
  {
    "type": "date",
    "label": "Date of Birth",
    "name": "DateofBirth",
    "required": true,
    "datatype": "date"
  },
  {
    "type": "number",
    "label": "Policy Number",
    "name": "PolicyNumber",
    "required": true,
    "datatype": "numeric"
  }
]
