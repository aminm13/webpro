import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { PackageServiceService } from '../../../services/package-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  pack = JSON.parse(localStorage.getItem('package') || '{}');
  auth = JSON.parse(localStorage.getItem('user') || '{}');

  showUpdate: boolean = false;
  form: FormGroup;

  packName = 'GROUP PACK'
  price = 99
  constructor(
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.pack[0].package_id)
    this.form = new FormGroup({
      package: new FormControl(null, Validators.required)
    });


    console.log(this.pack[0]['package_id'])

  }


  // studentUpgrade() {
  //   document.getElementById('packName').innerText = ''
  //   document.getElementById('packName').innerText = 'INDIVIDUAL PACK'
  // }

  updateShow() {
    this.router.navigate(['profiles/profile2'])
  }



}
