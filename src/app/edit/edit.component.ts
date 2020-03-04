import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  objectss  =  localStorage.getItem('ankit');
  objects = JSON.parse(this.objectss);
  emp1 = this.objects.emp;
  age = this.objects.ag;
  mna = this.objects.mn;
  adrs  = this.objects.adr;
  email = this.objects.em;
  dept= this.objects.depp;
  bio = this.objects.bi;

  listing: FormGroup;
  topics=['operation','sales'];
  employee = [];
  
  get emp() {
    return this.listing.get('emp');
  }

  get ag() {
    return this.listing.get('ag');
  }

  get mn() {
    return this.listing.get('mn');
  }

  get adr() {
    return this.listing.get('adr');
  }

  get em() {
    return this.listing.get('em');
  }

  get depp() {
    return this.listing.get('depp');

  }
  get bi() {
    return this.listing.get('bi');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let sdat = JSON.parse(localStorage.getItem("user"));
    let y = localStorage.getItem('iden');

    this.listing = this.fb.group({
      emp: [sdat[y].empName, [Validators.required, Validators.minLength(3)]],
      ag: [sdat[y].age, [Validators.required, Validators.max(99)]],
      mn: [sdat[y].cNo, [Validators.required]],
      adr: [sdat[y].addrr, Validators.required],
      em: [sdat[y].email, [Validators.required, Validators.email]],
      depp:[''],
      bi: [sdat[y].bbio]
    });

  }

  yy = localStorage.getItem('iden');
  sdat = JSON.parse(localStorage.getItem("user"));

  onUpdate() {
    console.log("this is it" + this.objects);
    console.log("user object " + this.yy);
    this.employee.push(this.listing.value);

    for(var i = 0; i < this.employee.length; i++){
      this.sdat[this.yy[i]] = this.employee[i];
    }
    // console.log(this.empList);
    // this.sdat[this.yy] = this.empList;
    // console.log(this.sdat[this.yy]);
    localStorage.setItem('user',JSON.stringify(this.sdat));

  }

}
