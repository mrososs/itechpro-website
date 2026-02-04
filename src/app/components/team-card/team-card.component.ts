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
        class="glass-hover bg-surface/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-glow h-full flex flex-col relative overflow-hidden"
      >
        <!-- Shimmer effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        ></div>

        <!-- Avatar -->
        <div
          class="w-24 h-24 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full mb-6 flex items-center justify-center mx-auto group-hover:bg-gold/20 transition-all duration-300 relative z-10 border-2 border-gold/20"
        >
          <i class="pi pi-user text-3xl text-gold"></i>
        </div>

        <!-- Content -->
        <div class="flex-1 text-center relative z-10">
          <h3
            class="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300"
          >
            {{ teamMember.name }}
          </h3>
          <p
            class="text-white/60 text-sm mb-4 font-medium uppercase tracking-wider"
          >
            {{ teamMember.role }}
          </p>

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
        <div class="mt-6 text-center relative z-10">
          <button
            (click)="openTeamDetails()"
            class="inline-flex items-center text-gold hover:text-primary-light transition-all duration-300 group-hover:translate-x-1 font-semibold text-xs uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-gold/5"
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
        class="px-2 py-1 bg-gold/10 text-gold text-[10px] rounded-md border border-gold/10 font-medium"
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
        transform: translateY(-8px);
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
