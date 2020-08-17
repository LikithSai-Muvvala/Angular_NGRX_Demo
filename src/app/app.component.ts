import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as EMP_ACTIONS from './employee.action';
import { Employee } from './employee.model';
import { EmployeeState } from './employee.state';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  employees$: Observable<EmployeeState>;
  empsSubscription:Subscription;

  empsList: Array<Employee>;
  employee: Employee;
  error:Error = null;

  constructor(private store: Store<{todos:EmployeeState}>) {
    this.employees$ = this.store.select('todos');
  }

  ngOnInit() {
    this.empsList = new Array<Employee>();
    this.employee = {
      id: 0, firstName: "", lastName: "", salary: 0.0
    }
    
    this.empsSubscription = this.employees$.subscribe(res => {
      this.empsList = res.employees;
      this.error = res.error
    });
  }

  createEmployee() {
    let newEmp:Employee = {...this.employee};
    if(newEmp.id === 0) {
      newEmp.id = Math.max(...this.empsList.map(emp => emp.id)) + 1;
      this.store.dispatch(EMP_ACTIONS.CreateEmployeeAction({payload: newEmp}));
    } else {
      this.store.dispatch(EMP_ACTIONS.UpdateEmployeeAction({payload: newEmp}));
    }
    this.employee = {
      id: 0, firstName: "", lastName: "", salary: 0.0
    }
  }
  updateEmployee(newEmp: Employee) {
    this.employee = {...newEmp}
  }

  deleteEmployee(id) {
    this.store.dispatch(EMP_ACTIONS.DeleteEmployeeAction({id}));
  }

  ngOnDestroy() {
    this.empsSubscription.unsubscribe();
  }

}
