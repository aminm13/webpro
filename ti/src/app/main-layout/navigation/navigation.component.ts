import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: ElementRef;

  clicked: boolean;
  role = JSON.parse(localStorage.getItem('role') || '{}');
  q = JSON.parse(localStorage.getItem('qualification') || '{}');
  showStudent: boolean;
  showTutor: boolean;
  showCoordinator: boolean;
  showAdmin = false;
  navShow: boolean;
  constructor() {
    this.clicked = this.clicked === undefined ? false : true;
  }


  logout() {
    localStorage.clear();
    window.location.replace('login')
  }
  changeLang(lang: any) {
    localStorage.setItem('lang', lang)
    window.location.reload()
  }

  ngOnInit() {
    console.log(localStorage.getItem('role'))
    if (this.role == 10) {
      this.navShow = false
    }
    else {
      this.navShow = true
    }

    if (this.role[0].role_id == 1) {
      this.showStudent = true
    }
    else {
      if (this.role[0].role_id == 2) {
        this.showTutor = true
      }
      else {
        if (this.role[0].role_id == 3) {
          this.showCoordinator = true
        }
        else {
          if (this.role[0].role_id == 5) {
            this.showAdmin = true
          }
        }
      }

    }
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
