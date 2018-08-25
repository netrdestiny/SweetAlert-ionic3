import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import swal from 'sweetalert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  SweetAlert(){
    swal("Good job!", "You clicked the button!", "success");
  }

}