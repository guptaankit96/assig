import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';

import { from } from 'rxjs';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  topics=['operation','sales'];
  employee = [];

  listing:FormGroup;
    emp: string="";
    ag:string="";
    mn:string="";
    adr:string="";
    em:string="";
    depp:string="";
    bi:string="";
   
  







  constructor(private frmbuilder:FormBuilder) {
      this.listing=this.frmbuilder.group({
        emp:['',Validators.required],
        ag:[''],
        mn:['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
        adr:[''],
        em:['',[Validators.required,Validators.email]],
        depp:[''],
        bi:['']
      });
   }

  ngOnInit(): void {

  }


  myfun(listing) {

    console.log("Employee",this.employee);
    console.log("locaStorage" ,localStorage.getItem('user'));
    // console.log("obj localstorage",JSON.parse(localStorage.getItem('user')).length);
    if(localStorage.getItem('user')==null){
      console.log("we are in");
      this.employee.push(this.listing.value);
      localStorage.setItem('user', JSON.stringify(this.employee));
      console.log("Employee",this.employee);
      console.log("locaStorage" ,localStorage.getItem('user').length);
      console.log("obj localstorage",JSON.parse(localStorage.getItem('user')).length);
    }else{
      console.log("we are out1");
      const fr = localStorage.getItem("user");
      console.log("fr" + fr);
          const sds = JSON.parse(fr);
        console.log("sds length " + sds.length)
        for(var i=0;i<sds.length;i++){
          this.employee[i] = sds[i];
          console.log(this.employee)
        }
    
      this.employee.push(this.listing.value);
      localStorage.setItem('user', JSON.stringify(this.employee));
      console.log("Employee",this.employee);
      console.log("locaStorage" ,localStorage.getItem('user').length);
      console.log("obj localstorage",JSON.parse(localStorage.getItem('user')).length);
    
    }
    this.listing.reset();
    
    }



}
