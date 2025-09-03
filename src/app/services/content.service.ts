import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Service {
  icon: string;
  title: string;
  slug: string;
  summary: string;
  link: string;
}

export interface SmartHotels {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  forHotels: string[];
  forGuests: string[];
  features: Array<{
    title: string;
    desc: string;
  }>;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  bio: string;
}

export interface Clients {
  logos: string[];
  integrations: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private servicesCache = signal<Service[]>([]);
  private smartHotelsCache = signal<SmartHotels | null>(null);
  private teamCache = signal<TeamMember[]>([]);
  private clientsCache = signal<Clients | null>(null);

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    if (this.servicesCache().length > 0) {
      return of(this.servicesCache());
    }
    
    return this.http.get<Service[]>('/assets/data/services.json').pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error loading services:', error);
        return of([]);
      })
    );
  }

  getSmartHotels(): Observable<SmartHotels> {
    if (this.smartHotelsCache()) {
      return of(this.smartHotelsCache()!);
    }
    
    return this.http.get<SmartHotels>('/assets/data/smart-hotels.json').pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error loading smart hotels:', error);
        return of({
          hero: { title: '', subtitle: '', cta: '' },
          forHotels: [],
          forGuests: [],
          features: []
        });
      })
    );
  }

  getTeam(): Observable<TeamMember[]> {
    if (this.teamCache().length > 0) {
      return of(this.teamCache());
    }
    
    return this.http.get<TeamMember[]>('/assets/data/team.json').pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error loading team:', error);
        return of([]);
      })
    );
  }

  getTeamMember(slug: string): Observable<TeamMember | null> {
    return this.getTeam().pipe(
      catchError(() => of([])),
      map(team => team.find(member => member.slug === slug) || null)
    );
  }

  getClients(): Observable<Clients> {
    if (this.clientsCache()) {
      return of(this.clientsCache()!);
    }
    
    return this.http.get<Clients>('/assets/data/clients.json').pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error loading clients:', error);
        return of({ logos: [], integrations: [] });
      })
    );
  }
}
