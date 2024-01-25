import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'}
})
export class AppComponent {


  title = 'Calculator';
  toshow='';
  currvalue='';
  flag=false;
  history='';
  
  writetoinput(value:string) {

    if((this.currvalue[this.currvalue.length-1]=='/'||this.currvalue[this.currvalue.length-1]=='*'||this.currvalue[this.currvalue.length-1]=='-'||this.currvalue[this.currvalue.length-1]=='+')&& (value==='+' ||value==='-' ||value==='*' ||value==='/'))
    {
      alert("invalid");
    }
    else{
      this.currvalue = this.currvalue + value 
    //   this.history=this.currvalue +"=";
    }
    if((this.toshow=='' && this.currvalue[this.currvalue.length-1]=='/')||(this.toshow=='' && this.currvalue[this.currvalue.length-1]=='*'))
    {
      alert("Wrong operator");
      this.flag=true
    }
    else{
      this.toshow = this.currvalue
    }
     
    if(this.flag==true){
      this.toshow=''
      this.currvalue=''
      this.flag=false
    }
   
  }

  enter()
  {
    if(this.toshow[this.toshow.length-1]=='/'||this.toshow[this.toshow.length-1]=='-'||this.toshow[this.toshow.length-1]=='*'||this.toshow[this.toshow.length-1]=='+')
    {
      alert("This is an operator. Please begin with a number.");
    }
    
    this.history=this.history+this.currvalue+"="
    this.toshow=eval(this.currvalue)
    this.history= this.history+this.toshow+"\n";
    this.currvalue = this.toshow

    console.log(this.history)
  }
  

  clear()
  {
    this.toshow=''
    this.currvalue=''
  }

  back()
  {
    this.currvalue=this.currvalue.slice(0,-1)
    this.toshow=this.currvalue

    if(this.toshow=='')
    {
      this.toshow=''
    }
  }

  calcvalue(solve:any)
  {
    try{
      this.toshow=eval(solve);
    }
    catch(e){
      this.toshow='error'
      
    }
  }
}