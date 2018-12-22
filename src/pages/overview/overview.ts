import { InfoPage } from './../info/info';
import { HomeinfoPage } from './../homeinfo/homeinfo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo';

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
	shownGroup: any;
  categories:any=[{ "title": "Home", "id": "1" },{ "title": "Overview", "id": "2" },{ "title": "Environment Setup", "id": "3" },{ "title": "Lambda Expression", "id": "4" },{ "title": "Method Refrences", "id": "5" },{ "title": "Functional Interfaces", "id": "6" },{ "title": "Default Methods", "id": "7" },{ "title": "Streams", "id": "8" },{ "title": "Optional Class", "id": "9" },{ "title": "Nashorn Javascript", "id": "10" },{ "title": "New Date/Time Api", "id": "11" },{ "title": "Base64", "id": "12" }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }
	toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
  };
  isGroupShown(group) {
		return this.shownGroup === group;
  };
  openinfoPage(id:any){
    console.log("id is",id);
    if(id==1){
      this.navCtrl.push(HomeinfoPage);
    }
    else if(id==2){
      this.navCtrl.push(OverviewinfoPage);
    }
   
  }
  
}
