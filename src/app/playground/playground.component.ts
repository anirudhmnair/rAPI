import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDefinition } from '../api-definition';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  apiService: ApiService = inject(ApiService);

  apiDefinition: ApiDefinition[] = [];

  constructor() {
    const apiAppName = this.route.snapshot.params['name']
    const apiName = this.route.snapshot.params['apiName']

    this.apiDefinition = this.apiService.getApiDefinition(apiAppName,apiName)

    console.log('the value is',this.apiDefinition, "|apiName", apiAppName, "Name", apiName)
  }
  
}
