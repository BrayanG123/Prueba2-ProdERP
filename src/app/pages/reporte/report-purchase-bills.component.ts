import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-report-purchase-bills',
  templateUrl: './report-purchase-bills.component.html',
  styles: []
})
export class ReportPurchaseBillsComponent implements OnInit {

  shipPDF: [];

  constructor( private _reporteService: ReporteService ) {
    this._reporteService.cargarVentas().subscribe( (resp:any) => {
      console.log(resp);
    } )
   }

  ngOnInit(): void {
  }

}
