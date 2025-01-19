import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Marca {
  nome: string;
  codigo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://parallelum.com.br/fipe/api/v1/carros/'
  private httpClient: HttpClient 
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

   // Método para fazer requisição GET
  getMarcas(): Observable<Marca[]> {
    return this.httpClient.get<Marca[]>(this.url + 'marcas').pipe(
      map((response) => {
        return response; // Retorna a resposta diretamente (pode adicionar mais lógica aqui se necessário)
      })
    );
  }
}

