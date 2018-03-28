import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	registrationformModel : any = {};
	
	constructor(public route : ActivatedRoute, public http : Http ) {
		
		route.params.subscribe(params => {
			

				//this.registrationformModel = params;
				console.log(params);
			if(params.id){
				//alert("ID present");
				this.http.get("http://localhost:4000/userlist/"+params.id).subscribe(updateperson => {
					this.registrationformModel = updateperson.json();
					
				}, err => {
					console.log(err);
					
				})
			}else{
				//alert("ID not present");
				
			}
		})

	
	}

submitted : any = false;
	ngOnInit() {
	}
	
	submitForm(myForm,data){
		this.submitted = true;
			// Send Form Data(registrationformModel) to Server
			this.http.post("http://localhost:4000/submit", this.registrationformModel).subscribe(data => {
				console.log(data);
			}, err => {
				console.log(err);
			})
		
	}
	
	changeInput(model){
		console.log(model);
	}


}
