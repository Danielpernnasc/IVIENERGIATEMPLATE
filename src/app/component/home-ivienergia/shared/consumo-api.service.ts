import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { Developer, EnviarDados, EstadoCidade, State, UtilitysState, userRegistro } from './single.model';





@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private consumoApi = 'https://app-preproject-dev.azurewebsites.net';



 
  constructor(private httpClient: HttpClient) { 

  }


  getStatus(): Observable<userRegistro[]>{
    return this.httpClient.get<userRegistro[]>(`${this.consumoApi}/status-pre-projects`);
  }

  getDeveloper(): Observable<Developer[]> {
    return this.httpClient.get<Developer[]>(`${this.consumoApi}/developers`).pipe(
      tap(data => console.log('Resposta da API getDeveloper:', data)),
      filter(info => !!info)
    );
  }
  

 getStates(): Observable<State[]> {
    const url = `${this.consumoApi}/states`;
    return this.httpClient.get<State[]>(url).pipe(
      map(data => data.filter(state => !!state.name)), 
      filter(states => !!states))
  }

  getCitiesByState(stateId: number): Observable<EstadoCidade> {
    const url = `${this.consumoApi}/states/${stateId}/cities`;
    return this.httpClient.get<EstadoCidade>(url).pipe(
      tap(cityIds => console.log('Cidades pelo Estado (no serviço):', cityIds))
    );
  }

  getUtilitysByState(stateId: number): Observable<UtilitysState> {
    return this.httpClient.get<UtilitysState>(`${this.consumoApi}/states/${stateId}/utilities`).pipe(
      tap(utilitys => console.log('Utilitys pelo Estado (service):',  utilitys))
    )
  }
  
  chamadaOnChange(stateId: number): Observable<{cities: EstadoCidade, utilitys: UtilitysState}>{
    const citiesObservable = this.getCitiesByState(stateId);
    const utilitysObservable = this.getUtilitysByState(stateId);

    return forkJoin({
      cities: citiesObservable,
      utilitys: utilitysObservable
    }).pipe(
      tap(result => {
        console.log('Cidades pelo Estado (no serviço):', result.cities);
        console.log('Utilitys pelo Estado (service):', result.utilitys);
      })
    )
  }

  sendDatas(data: EnviarDados): Observable<any> {
    const url = `${this.consumoApi}/pre-projects`;
    //data.UserRegistrationId = 1;
      return this.httpClient.post<any>(url, data).pipe(
      tap(result => console.log('Enviar dados', result))
    );
  }




}