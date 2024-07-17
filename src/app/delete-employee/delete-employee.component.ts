import { EmployeeService } from './../employee.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {

  id:number;

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params["id"];
    this.deleteEmployee(this.id);
  }

  private deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/employees"]);
    });
  }

}
