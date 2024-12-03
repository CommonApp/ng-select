import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'ng-multi-checkbox-example',
	templateUrl: './multi-checkbox-example.component.html',
	styleUrls: ['./multi-checkbox-example.component.scss'],
})
export class MultiCheckboxExampleComponent implements OnInit {
	people: Person[] = [];
	selectedPeople = [];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService
			.getPeople()
			.pipe(map((x) => x.filter((y) => !y.disabled)))
			.subscribe((res) => {
				this.people = res;
				this.selectedPeople = [this.people[0].id, this.people[1].id];
			});
	}
}
