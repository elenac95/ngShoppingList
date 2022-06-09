import { Component, OnInit } from '@angular/core';
import Entry from 'src/app/models/Entry';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  apiData: Entry[] = [];
  isFormActive: boolean = false;
  isModalActive: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getApiData();
  }
  
  async getApiData() {
    const response = await this.apiService.GET();
    this.apiData = response;
  }

  async addEntry(entry: Entry) {
    const response = await this.apiService.POST(entry)
    console.log(response);
    this.apiData.push(response);
    this.isFormActive = false;
  }

  async removeEntry(entry: Entry) {
    setTimeout(() => {
      this.apiData = this.apiData.filter(item => item.id !== entry.id);
      this.apiService.DELETE(entry.id!);
    }, 200)
  }

  async deleteAll() {
    this.apiData.forEach(entry => {
      this.apiService.DELETE(entry.id!);
    })
    this.apiData = [];
    this.isModalActive = false;
  }
}
