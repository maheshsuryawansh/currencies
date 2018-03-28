import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registrationformModel:any={};
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
	
//	
	
	
	submitted : any = false;
	ngOnInit() {
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	submitForm(myForm,data){
		this.submitted = true;
		/* console.log(this.registrationformModel); */
		if(this.registrationformModel._id)
		{
			
			this.http.put("http://localhost:4000/userlist/" + this.registrationformModel._id, this.registrationformModel ).subscribe(data => {
				console.log(data.json());
			}, err => {
				console.log(err);
			}) 
		
		}else{
		
			// Send Form Data(registrationformModel) to Server
			this.http.post("http://localhost:4000/userlist", this.registrationformModel).subscribe(data => {
				console.log(data.json());
			}, err => {
				console.log(err);
			})
		}
	}
	
	changeInput(model){
		console.log(model);
	}

}
