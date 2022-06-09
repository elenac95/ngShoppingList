import { Injectable } from '@angular/core';
import Entry from '../models/Entry';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3000' // runs on port 3000 on my computer, may run on a different one on yours - change if needed

  constructor() { }

  async GET(resource: string = 'entries') : Promise<Entry[]> {
    try {
      const response = await fetch(`${this.apiUrl}/${resource}`);
      if (!response.ok) throw new Error('GET not successful!');

      const data = await response.json();
      return data;

    } catch (error) {
      throw error;
    }
  }

  async GETbyId(id: number, resource: string = 'entries') {
    try {
      const response = await fetch(`${this.apiUrl}/${resource}/${id}`);
      if (!response.ok) throw new Error('GET not successful!');

      const data = await response.json();
      return data;

    } catch (error) {
      throw error;
    }
  }

  async POST(entry: Entry, resource: string = 'entries') {
    const response = await fetch(`${this.apiUrl}/${resource}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entry)
    });

    const data = await response.json();
    return data;
  }

  async PUT(entry: Entry, id: number, resource: string = 'entries') {
    const response = await fetch(`${this.apiUrl}/${resource}/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entry)
    });

    if (!response.ok) throw new Error("PUT not successful!");
  }

  async DELETE(id: number, resource: string = 'entries') {
    const response = await fetch(`${this.apiUrl}/${resource}/${id}`, {
      method: "DELETE"
    })

    if (!response.ok) throw new Error("DELETE not successful!");
  }
}
