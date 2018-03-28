import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	currencyRates : any =[] ;
	users : any = [];
	user : any = {};
	selectedValue=0;
	selectedCurrency=0;
	currencyformModel: any = {};
	currencyName: any = {};
	constructor(public http : Http,private route: ActivatedRoute,public router :Router ) {
		
		this.http.get("http://openexchangerates.org/api/latest.json/?app_id=3ed2a10310934d24b2362107e4cdf3ff").subscribe(getcurrency => {
			
			let currencyRates = getcurrency.json();
			//console.log(currencyRates.rates);
			for (const x in currencyRates.rates) {
			this.currencyName=x;
				let item = currencyRates.rates[x];
				//console.log(x, item);
				let singleRate = {
					name : x,
					value : item
				};
				this.currencyRates.push(singleRate);
				
			}
			//console.log(this.currencyRates)	
			//	console.log(10*this.currencyRates.rates.INR);
			
			}, err => {
			console.log(err);
			
		})
		
		
		
		
		this.route.params.subscribe((params) => {
		//console.log(params);
			this.user._id=params.id;
			this.user.name=params.name;
			
		});
		//console.log(this.user._id);
		this.http.get("http://localhost:4000/personlist/"+this.user._id,this.user.name).subscribe(data => {
			this.users = data.json();
			console.log(this.users);
			}, err => {
			console.log(err);
		});
		
	
	}
	
	ngOnInit() {
		
	}
	logout(){
		
		this.http.get("http://localhost:4000/logout/").subscribe(data => {
			console.log(data);
			if(data)
			{
				this.router.navigate(['/Logout']);
				}
			}, err => {
			console.log(err);
		});
		
		
		}
	submitCurrency(currencyForm,currencyModel){
		this.currencyformModel.userIdd = this.user._id;
		this.currencyformModel.name = this.user.name;
		this.currencyformModel.currencyName = this.currencyName;
		//console.log(this.currencyName);
		this.http.post("http://localhost:4000/currencies", this.currencyformModel).subscribe(data => {
			//console.log(data);
		}, err => {
			console.log(err);
		})
		
		
	}
}
