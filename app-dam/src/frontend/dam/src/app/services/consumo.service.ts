import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  private apiUrl = 'http://localhost:8000/consumos';  // URL de tu API

  constructor(private http: HttpClient) {}

  getConsumos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateConsumoEstado(id: number, estado: boolean): Observable<any> {
    const payload = { estado: estado ? 1 : 0 };  // Convertir booleano a 1 o 0
    return this.http.put(`${this.apiUrl}/${id}`, payload);
  }
}
