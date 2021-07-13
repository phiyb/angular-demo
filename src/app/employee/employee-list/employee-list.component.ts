import {Component, OnInit} from '@angular/core';
import {Employee} from '../../entity/employee';
import {Router} from '@angular/router';
import {EMPLOYEES} from '../../data/data-employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  create = false;
  update = false;

  employees = EMPLOYEES;

  // create
  mtmpEmployee: Employee = new Employee();


  listTitle = [
    {title: 'Id'},
    {title: 'Name'},
    {title: 'Gender'},
    {title: 'Age'},
    {title: 'Email'},
    {title: 'Address'},
    {title: 'Status'},
    {title: 'Action'},
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.employees = EMPLOYEES;
  }

  onCreate(): void {
    this.create = true;
    this.mtmpEmployee = new Employee();
  }

  onDelete(tmp: Employee): void {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === tmp.id) {
        this.employees.splice(i, 1);
      }
    }
    this.reloadData();
  }

  onUpdate(tmp: Employee): void {
    // this.router.navigate(['update', tmp.id]);
    this.update = true;
    this.mtmpEmployee = tmp;
  }

  onDetails(tmp: Employee): void {
    this.router.navigate(['details', tmp.id]);
  }

  onSubmit(): void {
    if (this.create) {
      this.create = false;
      this.employees.push(this.mtmpEmployee);
    }
    if (this.update) {
      this.update = false;
    }
    this.reloadData();
  }
}
