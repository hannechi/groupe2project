import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnelApiService } from 'src/app/personnel-api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-consulter-personnel',
  templateUrl: './consulter-personnel.component.html',
  styleUrls: ['./consulter-personnel.component.css']
})
export class ConsulterPersonnelComponent  implements OnInit{
  
  listepersonnel : any[]=[];
 constructor(private serviceapi : PersonnelApiService,private router: Router)
 {

 }
  ngOnInit(): void {
        this.serviceapi.consulterlistepersonnel().subscribe(
          {
            next:(data)=>
            {
               this.listepersonnel=data;
            },
            error:(errr)=>
            {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Try later!',
              })
            }
          }
        )
  }
  supprimerpersonnel(id:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceapi.supprimerpersonnel(id).subscribe(
          {
            next:(data)=>
            {
              Swal.fire(
                'Supprimé!',
                'Personnel est supprimé avec succés!',
                'success'
              )
              setTimeout(()=>
              {
                location.reload();
              },2000)
              
            },
            error:(err)=>
            {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Try later!',
              })
            }
          }
       )
       
      }
    })

  }  
  naviguerversmodifer(id:any)
  {
    const link = ["admin/modifierpersonnel",id]
    this.router.navigate(link);
  }

}
