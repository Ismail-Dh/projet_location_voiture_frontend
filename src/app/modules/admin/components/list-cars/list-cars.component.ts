import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { VoitureModele } from '../../modele/voiture.modele.model';

@Component({
  selector: 'app-list-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-cars.component.html',
  styleUrl: './list-cars.component.scss'
})
export class ListCarsComponent implements OnInit {
  voitures: VoitureModele[] = []; // Liste des voitures

  constructor(private voitureService: AdminService) {}

  // Initialisation : Charger les voitures depuis le backend
  ngOnInit(): void {
    this.getVoitures();
  }

  // Méthode pour récupérer les voitures via le service
  getVoitures(): void {
    this.voitureService.getVoitures().subscribe(
      (data: VoitureModele[]) => {
        this.voitures = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des voitures:', error);
      }
    );
  }

  // Ouvre le formulaire d'ajout de voiture
  openAddCarForm(): void {
    console.log('Formulaire d’ajout de voiture ouvert');
    // Logique supplémentaire à implémenter (ex : afficher un modal)
  }

  // Modifier une voiture existante
  editCar(voiture: VoitureModele): void {
    console.log('Modification de la voiture:', voiture);
    // Logique supplémentaire à implémenter (ex : remplir un formulaire)
  }

  // Supprimer une voiture par son ID
  deleteCar(id: number): void {
    this.voitureService.deleteVoiture(id).subscribe(
      () => {
        this.voitures = this.voitures.filter(voiture => voiture.id !== id);
        console.log('Voiture supprimée avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression de la voiture:', error);
      }
    );
  }

}
