import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnelApiService {
  adr = "http://localhost:8080";
  constructor(private http : HttpClient) { }

  consulterlistepersonnel():Observable<any>
  {
    return this.http.get(this.adr+"/afficherpersonnels");
  }
  supprimerpersonnel(id:any):Observable<any>
  {
    return this.http.delete(this.adr+`/supprimerpersonnel/${id}`);
  }

  ajouterpersonnel(personnel:any):Observable<any>
  {
    return this.http.post(this.adr+"/ajouterPersonnel",personnel);

  }
  personnelavecid(id:any):Observable<any>
  {
    return this.http.get(this.adr+"/afficherpersonnelavecId/"+id)
  }
  modifierpersonnel(personnel:any):Observable<any>
  {
    return this.http.put(this.adr+"/modifierpersonnel",personnel);
 
  }
} 

