import express from 'express';
import EmployeeRepositoryArray from './employee/adapter/repository/employeeRepositoryArray';
import EmployeeController from './employee/http/rest/employeeController';

const employeeRepository = new EmployeeRepositoryArray();
const employeeController = new EmployeeController(employeeRepository);

const app = express();

app.use(express.json());
app.use('/employees', employeeController.buildRouter());

export default app;
