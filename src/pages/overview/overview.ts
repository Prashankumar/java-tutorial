import { MethodviewPage } from './../methodview/methodview';
import { LambdaviewPage } from './../lambdaview/lambdaview';
import { InfoPage } from './../info/info';
import { HomeinfoPage } from './../homeinfo/homeinfo';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo';
import { EnvironmentviewPage } from '../environmentview/environmentview';
import { CommentsPage } from '../comments/comments';

import { VariablesPage } from '../variables/variables';
import { DatatypesPage } from '../datatypes/datatypes';
import { OperatorsPage } from '../operators/operators';
import { ControlPage } from '../control/control';
import { DecisionmakingPage } from '../decisionmaking/decisionmaking';
import { NumbersclassPage } from '../numbersclass/numbersclass';
import { CharacterPage } from '../character/character';
import { StringsPage } from '../strings/strings';
import { ArraysPage } from '../arrays/arrays';
import { ExpressionsPage } from '../expressions/expressions';
import { MethodsPage } from '../methods/methods';
import { FilesPage } from '../files/files';
import { ExceptionsPage } from '../exceptions/exceptions';
import { InnerPage } from '../inner/inner';
import { InheritancePage } from '../inheritance/inheritance';
import { OverridingPage } from '../overriding/overriding';
import { PolymorphismPage } from '../polymorphism/polymorphism';
import { AbstractionPage } from '../abstraction/abstraction';
import { EncapsulationPage } from '../encapsulation/encapsulation';
import { InterfacesPage } from '../interfaces/interfaces';
import { PackagesPage } from '../packages/packages';


@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
	shownGroup: any;
  //categories:any=[{ "title": "Home", "id": "1" },{ "title": "Overview", "id": "2" },{ "title": "Environment Setup", "id": "3" },{ "title": "Lambda Expression", "id": "4" },{ "title": "Method Refrences", "id": "5" },{ "title": "Functional Interfaces", "id": "6" },{ "title": "Default Methods", "id": "7" },{ "title": "Streams", "id": "8" },{ "title": "Optional Class", "id": "9" },{ "title": "Nashorn Javascript", "id": "10" },{ "title": "New Date/Time Api", "id": "11" },{ "title": "Base64", "id": "12" }];

  categories:any=[{ "title": "Home", "id": "1" },{ "title": "Overview", "id": "2" },{ "title": "Environment Setup", "id": "3" },{ "title": "Lambda Expression", "id": "4" },{ "title": "Java Syntax", "id": "5" },{ "title": "Java Comments", "id": "6" },{ "title": "Java Variables", "id": "7" },{ "title": "Java Data Types", "id": "8" },{ "title": "Java Operators", "id": "9" },{ "title": "Loop Control", "id": "10" },{ "title": "Decision Making", "id": "11" },{ "title": "Numbers Class", "id": "12" },{ "title": "Character Class", "id": "13" },{ "title": "Strings Class", "id": "14" },{ "title": "Arrays", "id": "15" },{ "title": "Regular Expressions", "id": "16" },{ "title": "Methods", "id": "17" },{ "title": "Files and I/O", "id": "18" },{ "title": "Exceptions", "id": "19" },{ "title": "Inner classes", "id": "20" },{ "title": "Inheritance", "id": "21" },{ "title": "Overriding", "id": "22" },{ "title": "Polymorphism", "id": "23" },{ "title": "Abstraction", "id": "24" },{ "title": "Encapsulation", "id": "25" },{ "title": "Interfaces", "id": "26" },{ "title": "Packages", "id": "27" }];
  
  
  


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
    else if(id==3){
      this.navCtrl.push(EnvironmentviewPage)
    }
   else if(id==4){
     this.navCtrl.push(LambdaviewPage);
   }
   else if(id==5){
     this.navCtrl.push(MethodviewPage);
   }

   else if(id==6){
    this.navCtrl.push(CommentsPage);
  }

  else if(id==7){
    this.navCtrl.push(VariablesPage);
  }

  else if(id==8){
    this.navCtrl.push(DatatypesPage);
  }

  else if(id==9){
    this.navCtrl.push(OperatorsPage);
  }

  else if(id==10){
    this.navCtrl.push(ControlPage);
  }

  else if(id==11){
    this.navCtrl.push(DecisionmakingPage);
  }

  else if(id==12){
    this.navCtrl.push(NumbersclassPage);
  }

  else if(id==13){
    this.navCtrl.push(CharacterPage);
  }

  else if(id==14){
    this.navCtrl.push(StringsPage);
  }

  else if(id==15){
    this.navCtrl.push(ArraysPage);
  }

  else if(id==16){
    this.navCtrl.push(ExpressionsPage);
  }

  else if(id==17){
    this.navCtrl.push(MethodsPage);
  }

  else if(id==18){
    this.navCtrl.push(FilesPage);
  }

  else if(id==19){
    this.navCtrl.push(ExceptionsPage);
  }

  else if(id==20){
    this.navCtrl.push(InnerPage);
  }

  else if(id==21){
    this.navCtrl.push(InheritancePage);
  }

  else if(id==22){
    this.navCtrl.push(OverridingPage);
  }

  else if(id==23){
    this.navCtrl.push(PolymorphismPage);
  }

  else if(id==24){
    this.navCtrl.push(AbstractionPage);
  }

  else if(id==25){
    this.navCtrl.push(EncapsulationPage);
  }

  else if(id==26){
    this.navCtrl.push(InterfacesPage);
  }

  else if(id==27){
    this.navCtrl.push(PackagesPage);
  }

   
  }
  
}
