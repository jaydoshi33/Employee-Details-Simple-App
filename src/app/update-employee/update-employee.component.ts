import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id:number;    //id is to be fetched from the route using ActivatedRoute
  employee:Employee = new Employee();   

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute,private router:Router){
  }

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];   //syntax to get a value from url using ActivatedRouteSnapshot
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },
    error=>console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.router.navigate(['/employees']);
    },
    error=>console.log(error));
  }


}
