import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TeamMember } from '../../services/content.service';
import { TeamDetailsDialogComponent } from '../team-details-dialog/team-details-dialog.component';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ChipModule,
    TeamDetailsDialogComponent,
  ],
  template: `
    <div
      class="team-card h-full group cursor-pointer"
      (click)="openTeamDetails()"
    >
      <div
        class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-green-accent/50 transition-all duration-500 hover:scale-105 h-full flex flex-col relative overflow-hidden"
      >
        <!-- Shimmer effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-green-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        ></div>

        <!-- Avatar -->
        <div
          class="w-24 h-24 bg-gradient-to-br from-blue-primary/20 to-green-accent/20 rounded-3xl mb-4 flex items-center justify-center mx-auto group-hover:bg-green-accent/30 transition-all duration-300 group-hover:scale-110 icon-glow-secondary relative z-10"
        >
          <i class="pi pi-user text-3xl text-green-accent"></i>
        </div>

        <!-- Content -->
        <div class="flex-1 text-center relative z-10">
          <h3
            class="text-lg font-bold text-white mb-2 group-hover:text-green-accent transition-colors duration-300"
          >
            {{ teamMember.name }}
          </h3>
          <p class="text-white/70 text-sm mb-4">{{ teamMember.role }}</p>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2 justify-center">
            <ng-container
              *ngTemplateOutlet="
                skillTemplate;
                context: { $implicit: teamMember.skills }
              "
            >
            </ng-container>
          </div>
        </div>

        <!-- Button -->
        <div class="mt-4 text-center relative z-10">
          <button
            (click)="openTeamDetails()"
            class="inline-flex items-center text-green-accent hover:text-green-600 transition-all duration-300 group-hover:translate-x-1 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-green-accent/10"
          >
            View Profile
            <i
              class="pi pi-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"
            ></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Skills Template -->
    <ng-template #skillTemplate let-skills>
      <span
        *ngFor="let skill of skills.slice(0, 3); trackBy: trackBySkill"
        class="px-3 py-1 bg-green-accent/20 text-green-accent text-xs rounded-full border border-green-accent/30 font-medium"
      >
        {{ skill }}
      </span>
    </ng-template>

    <!-- Team Details Dialog -->
    <app-team-details-dialog
      [teamMember]="teamMember"
      [visible]="showTeamDetails"
      (visibleChange)="showTeamDetails = $event"
    ></app-team-details-dialog>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .team-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .team-card:hover {
        transform: translateY(-12px) scale(1.03);
      }

      .team-card:hover .bg-black\\/30 {
        background: rgba(0, 0, 0, 0.4) !important;
        border-color: rgba(0, 240, 66, 0.5) !important;
        box-shadow: 0 25px 50px var(--color-shadow-secondary);
      }

      .icon-glow-secondary {
        filter: drop-shadow(0 0 15px var(--color-secondary));
      }

      .team-card:hover .icon-glow-secondary {
        filter: drop-shadow(0 0 25px var(--color-secondary));
      }
    `,
  ],
})
export class TeamCardComponent {
  @Input() teamMember!: TeamMember;
  showTeamDetails = false;

  openTeamDetails() {
    this.showTeamDetails = true;
  }

  trackBySkill(index: number, skill: string): string {
    return skill;
  }
}
