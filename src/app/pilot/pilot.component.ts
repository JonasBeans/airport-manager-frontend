import { Component, OnInit } from '@angular/core';
import { PilotService } from 'src/service/pilot.service';
import { Pilot } from '../dto/pilot';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit{
    pilots?: Pilot[];

    constructor(private pilotService: PilotService){}

    ngOnInit(): void {
        this.getPilots();
    }

    getPilots() {
        this.pilotService.getPilots()
            .subscribe(pilots => {this.pilots = pilots; console.log(pilots)});
    }



}
