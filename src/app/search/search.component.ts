import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FlightModel } from '../../models/flight.model';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { FlightService } from '../../services/main.service';
import {MatButtonModule} from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";


@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, MatButtonModule, LoadingComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
  dataSource: FlightModel[] | null = null

  public constructor(public Utils: UtilsService) {
    FlightService.getFlights(0, 30)
      .then(rsp => this.dataSource = rsp.data.content)
  }
}
