import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilotService } from 'src/service/pilot.service';
import { Pilot } from '../dto/pilot';
import { Location } from '@angular/common'

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit{
    pilot?: Pilot;
    updatePilot?: Pilot;

    constructor(
        private route: ActivatedRoute, 
        private pilotService: PilotService, 
        private location: Location
    ){}

    ngOnInit(): void {
        this.getPilot();
    }

    getPilot() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.pilotService.getPilot(id)
            .subscribe(pilot => {
                this.pilot = pilot});

        this.pilotService.getPilot(id)
            .subscribe(pilot => {
                this.updatePilot = pilot
            });
    }

    save() {
        if(this.updatePilot){
            this.pilotService.updatePilot(this.updatePilot)
                .subscribe(pilot => this.pilot = pilot);
        }
    }
}
