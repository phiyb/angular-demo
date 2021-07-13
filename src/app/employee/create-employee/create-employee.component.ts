import { Component, OnInit } from '@angular/core';
import {Employee} from '../../entity/employee';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  mtmpEmployee: Employee = new Employee();
  employeeListComponent: EmployeeListComponent = new EmployeeListComponent(this.router);
  listOld = this.employeeListComponent.employees;
  a = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mtmpEmployee = new Employee();
    this.listOld = this.employeeListComponent.employees;
  }

  onSubmit(): void {
    this.listOld.push(this.mtmpEmployee);
    this.list();
  }

  list(): void {
    this.router.navigate(['/employees']);
  }
}
