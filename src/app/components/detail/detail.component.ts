import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from '../../services/entity.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  entity: any | undefined;
  showDetails = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private dataService: EntityService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getEntityById(id).subscribe({
        next: (data) => (this.entity = data),
        error: () => this.router.navigate(['/']), // Navega de regreso si hay error
      });
    }
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
