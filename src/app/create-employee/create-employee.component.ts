import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee:Employee = new Employee();

  constructor(private employeeService:EmployeeService, private router: Router){

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployees();
    },
    error=>console.log(error)
   );
  }

  goToEmployees(){
    this.router.navigate(["/employees"]);
  }

  onSubmit():void{
    this.saveEmployee();
  }

}
