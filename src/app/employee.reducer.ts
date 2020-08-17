import { Action, createReducer, on } from "@ngrx/store";

import * as EMP_ACTIONS from "./employee.action";
import { Employee } from "./employee.model";
import { intializingState, EmployeeState } from "./employee.state";

export const initialState = intializingState();

const reducer = createReducer(
  initialState,
  on(EMP_ACTIONS.GetEmployeeAction, state => state),
  on(EMP_ACTIONS.CreateEmployeeAction, (state: EmployeeState, obj) => {
    return {
      ...state,
      employees: [...state.employees, obj.payload],
      error: null
    };
  }),
  on(EMP_ACTIONS.UpdateEmployeeAction, (state: EmployeeState, obj) => {
    let employees = [...state.employees];
    let idx: number = employees.findIndex(
      employee => employee.id === obj.payload.id
    );
    if (idx > -1) {
      employees[idx] = obj.payload;
    }
    return { ...state, employees: employees, error: null };
  }),
  on(EMP_ACTIONS.DeleteEmployeeAction, (state: EmployeeState, obj) => {
    let employees = [...state.employees];
    let idx: number = employees.findIndex(employee => employee.id === obj.id);
    console.log(state);
    if (idx > -1) {
      employees.splice(idx, 1);
    }
    return { ...state, employees: employees, error: null };
  })
);

export function EmployeeReducer(
  state: EmployeeState | undefined,
  action: Action
) {
  return reducer(state, action);
}
