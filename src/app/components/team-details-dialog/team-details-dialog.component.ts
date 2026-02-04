import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { TeamMember } from '../../services/content.service';

@Component({
  selector: 'app-team-details-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, ChipModule, AvatarModule],
  template: `
    <p-dialog
      [(visible)]="visible"
      [modal]="true"
      [closable]="true"
      [draggable]="false"
      [resizable]="false"
      [style]="{ width: '90vw', maxWidth: '600px' }"
      [styleClass]="'team-dialog glass-dialog'"
      (onHide)="onHide()"
      [header]="teamMember?.name || 'Team Member'"
    >
      <ng-template pTemplate="content">
        <div *ngIf="teamMember" class="flex flex-col gap-6">
          <!-- Profile Header -->
          <div
            class="flex flex-col items-center text-center p-6 glass-panel rounded-2xl relative overflow-hidden"
          >
            <!-- Background Accent -->
            <div
              class="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/10 to-transparent"
            ></div>

            <div
              class="relative z-10 w-32 h-32 rounded-full border-2 border-primary p-1 mb-4 shadow-lg"
            >
              <img
                *ngIf="teamMember.avatar; else iconAvatar"
                [src]="teamMember.avatar"
                class="w-full h-full rounded-full object-cover"
              />
              <ng-template #iconAvatar>
                <div
                  class="w-full h-full rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center"
                >
                  <i class="pi pi-user text-4xl text-primary"></i>
                </div>
              </ng-template>
            </div>

            <h2 class="text-2xl font-bold gradient-text-logo mb-1">
              {{ teamMember.name }}
            </h2>
            <p class="text-primary font-medium">{{ teamMember.role }}</p>
          </div>

          <!-- Bio -->
          <div class="glass-panel p-6 rounded-2xl">
            <h3 class="text-lg font-semibold mb-2 text-white">About</h3>
            <p class="text-white/80 leading-relaxed">
              {{ teamMember.bio }}
            </p>
          </div>

          <!-- Skills -->
          <div class="glass-panel p-6 rounded-2xl">
            <h3
              class="text-lg font-semibold mb-3 text-white dark:text-gray-100"
            >
              Expertise
            </h3>
            <div class="flex flex-wrap gap-2">
              <p-chip
                *ngFor="let skill of teamMember.skills"
                [label]="skill"
                styleClass="glass-chip"
              ></p-chip>
            </div>
          </div>

          <!-- Socials -->
          <div class="flex justify-center gap-4 mt-2">
            <a
              *ngIf="teamMember.social?.linkedin"
              [href]="teamMember.social.linkedin"
              target="_blank"
              class="p-3 bg-blue-600/10 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <i class="pi pi-linkedin text-xl"></i>
            </a>
            <a
              *ngIf="teamMember.social?.github"
              [href]="teamMember.social.github"
              target="_blank"
              class="p-3 bg-gray-600/10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <i class="pi pi-github text-xl"></i>
            </a>
            <a
              *ngIf="teamMember.social?.email"
              [href]="'mailto:' + teamMember.social.email"
              class="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-black transition-colors"
            >
              <i class="pi pi-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </ng-template>

      <ng-template pTemplate="footer">
        <p-button
          label="Close"
          icon="pi pi-times"
          [outlined]="true"
          severity="secondary"
          (onClick)="onHide()"
        ></p-button>
      </ng-template>
    </p-dialog>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      ::ng-deep .glass-chip {
        background: rgba(212, 175, 55, 0.1) !important;
        border: 1px solid rgba(212, 175, 55, 0.2);
        color: var(--color-text);
      }
    `,
  ],
})
export class TeamDetailsDialogComponent {
  @Input() teamMember: TeamMember | null = null;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
