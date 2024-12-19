import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  entities: any[] = [];
  isLoading = true;
  viewMode: 'card' | 'table' = 'card';

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    // Realizamos la llamada al servicio
    this.entityService.getAllEntities().subscribe((data: any[]) => {
      // Simulamos un retraso de 5 segundos para mostrar el spinner
      setTimeout(() => {
        this.entities = data;
        this.isLoading = false;
      }, 2000); // 2000 ms = 2 segundos
    });
  }

  toggleView(mode: 'card' | 'table') {
    this.viewMode = mode;
  }
}
