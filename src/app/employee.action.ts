import { createAction, props } from "@ngrx/store";

import { Employee } from "./employee.model";

export const GetEmployeeAction = createAction("[Employee] get");

export const CreateEmployeeAction = createAction(
  "[Employee] create",
  props<{ payload: Employee }>()
);

export const UpdateEmployeeAction = createAction(
  "[Employee] update",
  props<{ payload: Employee }>()
);

export const DeleteEmployeeAction = createAction(
  "[Employee] delete",
  props<{ id: Number }>()
);
