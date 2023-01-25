import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonconfigService {

  public url_angajat = 'https://localhost:5001/angajat';
  public url_brutarie = 'https://localhost:5001/brutarie';
  public url_comanda = 'https://localhost:5001/comanda';
  public url_locatie = 'https://localhost:5001/locatie';
  public url_ingredient = 'https://localhost:5001/ingredient';
  public url_produs = 'https://localhost:5001/produs';

  constructor(
    public http: HttpClient,
  ) { }

  public GetAllAngajat(): Observable<any> {
    return this.http.get(`${this.url_angajat}`);
  }
  public GetAllBrutarie(): Observable<any> {
    return this.http.get(`${this.url_brutarie}`);
  }
  public GetAllComanda(): Observable<any> {
    return this.http.get(`${this.url_comanda}`);
  }
  public GetAllLocatie(): Observable<any> {
    return this.http.get(`${this.url_locatie}`);
  }
  public GetAllProdus(): Observable<any> {
    return this.http.get(`${this.url_ingredient}`);
  }
  public GetAllIngredient(): Observable<any> {
    return this.http.get(`${this.url_produs}`);
  }
}
