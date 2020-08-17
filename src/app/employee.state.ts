import { Employee } from "./employee.model";

export interface EmployeeState {
  employees: Employee[];
  error: Error;
}

export const intializingState = (): EmployeeState => {
  let employees: Employee[] = new Array<Employee>();
  employees.push({id: 1, firstName: "likith", lastName: "sai", salary: 30000.0});
  employees.push({id: 2, firstName: "chandra", lastName: "harsh", salary: 120000.0});
  return { employees: employees, error: null };
};
