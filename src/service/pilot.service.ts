import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pilot } from 'src/app/dto/pilot';
import { urlConstants } from 'src/app/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }; 
    constructor(
        private http: HttpClient) { }

    getPilots(): Observable<Pilot[]> {
        return this.http.get<Pilot[]>(urlConstants.getPilots)
            .pipe(
                catchError(this.handleError('getPilots', []))
            );
    }

    getPilot(id: number) : Observable<Pilot> {
        return this.http.get<Pilot>(urlConstants.getPilot(id))
            .pipe(
                catchError(this.handleError<Pilot>(`getPilot id: ${id}`))
            )
    }

    updatePilot(updatePilot: Pilot) : Observable<Pilot>{
        return this.http.put<Pilot>(urlConstants.updatePilot(updatePilot.id), updatePilot)
            .pipe(
                catchError(this.handleError<Pilot>(`updatePilot id: ${updatePilot.id}`))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}
