import { Component, OnInit } from '@angular/core';
import { Activitie } from 'src/app/models/activities.model';
import { ActivitiesService } from 'src/app/services/activities.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styles: []
})
export class ActivitiesComponent implements OnInit {

  public activities: Activitie[] = [];
  public cargando: boolean = true;

  constructor( public _activitieService: ActivitiesService,
              //  private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarActivities();
  }

  cargarActivities(){
    this._activitieService.getActivities().subscribe( (activities:any) => {
          console.log(activities);
          this.activities = activities;
          // console.log(this.activities);
          this.cargando = false;
    } ) 
  }

  

  

}
