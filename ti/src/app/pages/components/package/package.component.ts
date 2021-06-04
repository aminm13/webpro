import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from '../../../services/package-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  pack = JSON.parse(localStorage.getItem('package'));
  auth = JSON.parse(localStorage.getItem('user'));
  
  form: FormGroup;

  packName='GROUP PACK'
  price=99
  constructor(private PackageServiceService: PackageServiceService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.pack[0].package_id)
    this.form = new FormGroup({
      package: new FormControl(null, Validators.required)
    });
    

    console.log(this.pack[0]['package_id'])

  }


  studentUpgrade(){
    document.getElementById('packName').innerText = ''
    document.getElementById('packName').innerText = 'INDIVIDUAL PACK'
  }

  upgradePackage() {
    this.PackageServiceService.sendUpgrade(this.form.value)
      .subscribe( (resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        localStorage.setItem('role', JSON.stringify(resp.role));
        
        localStorage.setItem('qualification', JSON.stringify(resp.qualification));
        
        localStorage.setItem('package', JSON.stringify(resp.package));
        this.router.navigate(['profile']);
      });
  }

}
