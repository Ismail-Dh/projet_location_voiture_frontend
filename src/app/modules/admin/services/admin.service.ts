import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientModele} from '../modele/client.modele.model';
import {VoitureModele} from '../modele/voiture.modele.model';
import { ReservationModele } from '../modele/reservation.modele.model';
import { PaiementModele } from '../modele/paiement.modele.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/users/count'; // URL de l'API
  private apiUrl1 = 'http://localhost:8080/api/reservations/count';
  private apiUrl2 = 'http://localhost:8080/api/factures/somme';
  private apiUrl3 = 'http://localhost:8080/api/users/tous';
  private apiUrl4 = 'http://localhost:8080/api/cars/tous'; 
  private apiUrl4_1 = 'http://localhost:8080/api/cars';
  private apiUrl5 = 'http://localhost:8080/api/reservations/toutes';
  private apiUrl6 = 'http://localhost:8080/api/factures/tous'; 
  private apiUrl7 = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }

  getNombreClients(): Observable<number> {
    return this.http.get<number>(this.apiUrl4_1);
  }
  getNombreVoitures(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }
  getNombreReservations(): Observable<number> {
    return this.http.get<number>(this.apiUrl1);
  }
  getChiffreAffaire(): Observable<number> {
    return this.http.get<number>(this.apiUrl2);
  }

                             ///////////  Les Clients ///////////////////


  getClients(): Observable<any[]> {
    return this.http.get<ClientModele[]>(this.apiUrl3);
  }
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl7}/supprimer/${id}`);
  }

                             //////////// les Voitures ///////////////

  // Récupérer toutes les voitures
  getVoitures(): Observable<VoitureModele[]> {
    return this.http.get<VoitureModele[]>(this.apiUrl4);
  }

  // Supprimer une voiture par ID
  deleteVoiture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl4_1}/supprimer/${id}`);
  }

  // Ajouter une nouvelle voiture
  addVoiture(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl4_1}/creer`, formData);
  }

  // Modifier une voiture existante
  updateVoiture(voiture: VoitureModele): Observable<VoitureModele> {
    return this.http.put<VoitureModele>(`${this.apiUrl4_1}/modifier/${voiture.id}`, voiture);
  }

                             /////////// les Reservations /////////////////

  // Récupérer toutes les réservations
  getReservations(): Observable<ReservationModele[]> {
    return this.http.get<ReservationModele[]>(this.apiUrl5);
  }

  // Supprimer une réservation par ID
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl5}/${id}`);
  }

  // Ajouter une nouvelle réservation
  addReservation(reservation: ReservationModele): Observable<ReservationModele> {
    return this.http.post<ReservationModele>(this.apiUrl5, reservation);
  }

  // Modifier une réservation existante
  updateReservation(reservation: ReservationModele): Observable<ReservationModele> {
    return this.http.put<ReservationModele>(`${this.apiUrl5}/${reservation.id_reservation}`, reservation);
  }

                  /////////////////// Les Paiements /////////////////////////
// Récupérer toutes les paiements
getPaiements(): Observable<PaiementModele[]> {
  return this.http.get<PaiementModele[]>(this.apiUrl6);
}

// Supprimer un paiement par ID
deletePaiement(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl6}/${id}`);
}

// Ajouter un nouveau paiement
addPaiement(paiement: PaiementModele): Observable<PaiementModele> {
  return this.http.post<PaiementModele>(this.apiUrl6, paiement);
}

// Modifier un paiement existant
updatePaiement(paiement: PaiementModele): Observable<PaiementModele> {
  return this.http.put<PaiementModele>(`${this.apiUrl6}/${paiement.id_facture}`, paiement);
}

//////////////////// statistique//////////////////////////////////////

private apiUrl8 = 'http://localhost:8080/api/reports'; 

  
  // Récupérer les réservations pour une période donnée
  getReservations1(startDate: string, endDate: string): Observable<any[]> {
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.http.get<any[]>(`${this.apiUrl8}/reservations`, { params });
  }

  // Récupérer les factures pour une période donnée
  getFactures(startDate: string, endDate: string): Observable<any[]> {
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.http.get<any[]>(`${this.apiUrl8}/factures`, { params });
  }

  // Récupérer le revenu total pour une période donnée
  getRevenue(startDate: string, endDate: string): Observable<number> {
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.http.get<number>(`${this.apiUrl8}/revenue`, { params });
  }

  getReports(startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.http.get<any>(`${this.apiUrl8}`, { params });
  }

  //////////////////////////////////Les Retours///////////////////////////////
  private apiUrl9 = 'http://localhost:8080/api/retours/tous';
  private apiUrl10 = 'http://localhost:8080/api/contrats';
  private apiUrl11 = 'http://localhost:8080/api/retours';
  private apiUrl12 = 'http://localhost:8080/api/factures';
  getRetours(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl9);
  }

  getContrts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl10);
  }
  // Méthode pour envoyer la facture avec le montant
  createFacture(contrat: any, frait:number ,montant: number,desc:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl12}/creersuplimentaire/${montant}/${frait}/${desc}`, contrat);
  }

  // Méthode pour ajouter un retour
  ajouterRetour(id: number, etat: boolean): Observable<any> {
    return this.http.post<any>(`${this.apiUrl11}/creer/${id}/${etat}`, null);
  }
}
