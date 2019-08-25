import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(public http: HttpClient, @Inject('BASE_URL')public baseUrl: string) {

    
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  onExportPdf() {
    // const httpOptions = {
    //   headers: new HttpHeaders(
    //     {
    //       Accept: 'application/pdf',
    //       responseType: 'arraybuffer' as 'json'
    //     }
    //   )
    // };

    const httpOptions = {
      // make sure 'responseType' is included outside of 'header'
      'responseType'  : 'arraybuffer' as 'json'
    };

    this.http.get<any>(this.baseUrl + 'api/Pdf/Create', httpOptions)
    // .pipe(map(res =>console.log(res)))
    .subscribe(result => {
      console.log(result);
      let file = new Blob([result], { type: 'application/pdf' });            
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
