import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sdat = "";
  }
  sdat = JSON.parse(localStorage.getItem("user"));

 


  onEdit(id) {
    console.log("Edit id is: " + id);
    console.log(this.sdat[id]);
    localStorage.setItem('iden',id);
    localStorage.setItem('ankit',JSON.stringify(this.sdat[id]));   

  }

  onDel(num, pp) {
    let a = localStorage.getItem('user');
    var as = JSON.parse(a);
    if (as != null) {
      const list = as.filter(a => a.emp != pp.emp)
      localStorage.setItem('user', JSON.stringify(list));
      this.sdat = JSON.parse(localStorage.getItem('user'));
    }
  }

  
}
