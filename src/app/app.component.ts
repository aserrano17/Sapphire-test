import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  savedUnselected = ['', 'provider1', 'provider2', 'provider3', 'provider4', 'provider5'];
  providers = this.savedUnselected
  selectedDevice=null;

  //hide the card of provider when the x is tapped
  Hide(event,num){
    this.Restore()
    var temp=null
    if (num==1){
      this.check1=false
      temp='provider1'
      this.addListUnselected(temp,num)
    }
    else if (num==2){
      this.check2=false
      temp='provider2'
      this.addListUnselected(temp,num)
    }
    else if (num==3){
      this.check3=false
      temp='provider3'
      this.addListUnselected(temp,num)
    }
    else if (num==4){
      this.check4=false
      temp='provider4'
      this.addListUnselected(temp,num)
    }
    else if (num==5){
      this.check5=false
      temp='provider5'
      this.addListUnselected(temp,num)
    }
  }
  //Display card and call to remove provider from list
  Show(event){
    this.Restore()
    if (event=='provider1'){
      this.check1=true
      this.removeListUnselected(event)
    }
    else if (event=='provider2'){
      this.check2=true
      this.removeListUnselected(event)
    }
    else if (event=='provider3'){
      this.check3=true
      this.removeListUnselected(event)
    }
    else if (event=='provider4'){
      this.check4=true
      this.removeListUnselected(event)
    }
    else if (event=='provider5'){
      this.check5=true
      this.removeListUnselected(event)
    }
   }

   //remove provider from list
   removeListUnselected(provider){
     var temp=this.providers.indexOf(provider);
     if (temp > -1){
       this.providers.splice(temp,1)
     }
     sessionStorage.setItem(this.savedUnselected, JSON.stringify(this.providers))
   }

   //add provider back to list
   addListUnselected(provider,num){
     var index=this.providers.indexOf(provider);
     if (index == -1){
       this.providers.splice(num,0,provider)
     }
     sessionStorage.setItem(this.savedUnselected, JSON.stringify(this.providers))
   }

//Restore the data from last call
   Restore(){
    //this.providers=JSON.parse(sessionStorage.getItem(this.savedUnselected))
   }

  //boolean for each of the cards. used to check if card should be dispalyed
  check1=false;
  check2=false;
  check3=false;
  check4=false;
  check5=false;
}
