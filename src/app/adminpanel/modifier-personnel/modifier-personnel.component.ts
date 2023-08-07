import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnelApiService } from 'src/app/personnel-api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.css']
})
export class ModifierPersonnelComponent implements OnInit{

  personnelavecid:any;
  constructor(private activateroute : ActivatedRoute,private apiservice : PersonnelApiService)
  {

  }
ngOnInit(): void {
    this.activateroute.params.subscribe(
      {
        next:(data)=>
        {
          this.apiservice.personnelavecid(data["id"]).subscribe
          (
            {
                next:(data)=>
                {
                  this.personnelavecid=data;
                 
                },
                error:(err)=>
                {
                  console.log(err)
                }
            }
          )
          
        },
        error:(err)=>
        {
          console.log(err)
        }
      }
    )
}
modifierpersonnel()
{
  this.apiservice.modifierpersonnel(this.personnelavecid).subscribe(
    {
      next:(data)=>
      {
        Swal.fire(
          'Modifié!',
          'Personnel est ajouté avec succés!',
          'success'
        )
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
}
