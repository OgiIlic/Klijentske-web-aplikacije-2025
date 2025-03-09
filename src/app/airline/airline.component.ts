import { Component } from '@angular/core';
import { AirlineModel } from '../../models/airline.model';
import { AirlineService } from '../../services/airline.service';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-airline',
  imports: [MatTableModule, NgIf, MatButtonModule, LoadingComponent],
  templateUrl: './airline.component.html',
  styleUrl: './airline.component.css'
})
export class AirlineComponent {
  displayedColumns: string[] = ['id', 'name', 'countryOfOrigin', 'website', 'actions'];
  dataSource: AirlineModel[] = AirlineService.getAirlines()

}

