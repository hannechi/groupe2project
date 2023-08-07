import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonnelApiService } from 'src/app/personnel-api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.css']
})
export class AjouterPersonnelComponent {

  constructor(private serviceapi : PersonnelApiService)
  {

  }
  ajouterpersonnel(form:NgForm)
  {
    console.log(form.value)
    this.serviceapi.ajouterpersonnel(form.value).subscribe(
      {
        next:(data)=>
        {
          Swal.fire(
            'Ajouté!',
            'Personnel est ajouté avec succés!',
            'success'
          )
        },
        error:(err)=>
        {
          if(err.error.message=="Email taken")
          {
            Swal.fire({
              icon: 'error',
              title: 'Email taken!',
              text: 'Try another email!',
            })
          }
          else
          {
          console.log(err.error.message)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Try later!',
          })
        }
        }
      }
    )
  }
}
