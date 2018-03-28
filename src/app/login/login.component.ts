import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	users : any = [];
	loginformModel : any = {};
	constructor(public http : Http,public router :Router ) {}
	submitForm(myForm,data){
		{
			this.http.post("http://localhost:4000/authentication",this.loginformModel).subscribe(data => {
				this.users = data.json();
				if(this.users)
				{
			  
			   //console.log(this.users);
			    this.router.navigate(['/dashboard',this.users._id,this.users.name]);
				console.log(this.users);
				}else
				{
					this.router.navigate(['/login']);
					}
				}, err => {
				console.log(err);
			})
			
			
			
			
			
		}
	}
	ngOnInit() {
	}
	
}
