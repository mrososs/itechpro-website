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
      [style]="{ width: '90vw', maxWidth: '800px' }"
      [styleClass]="'team-dialog'"
      (onHide)="onHide()"
    >
      <ng-template pTemplate="header">
        <div class="flex items-center space-x-4">
          <div
            class="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center"
          >
            <i class="pi pi-user text-xl text-primary"></i>
          </div>
          <div>
            <h2 class="text-sm font-bold text-white">Team Member Profile</h2>
            <p class="text-white/70 text-sm">View detailed information</p>
          </div>
        </div>
      </ng-template>

      <ng-template pTemplate="content">
        <div *ngIf="teamMember" class="space-y-6">
          <!-- Header Section -->
          <div class="text-center py-4">
            <div
              class="w-28 h-28 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 flex items-center justify-center mx-auto shadow-lg"
            >
              <i class="pi pi-user text-5xl text-primary"></i>
            </div>
            <h3 class="text-3xl font-bold text-white mb-2">
              {{ teamMember.name }}
            </h3>
            <p class="text-primary text-lg font-semibold mb-3">
              {{ teamMember.role }}
            </p>
            <div
              class="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            ></div>
          </div>

          <!-- Bio Section -->
          <div
            class="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
              <i class="pi pi-info-circle mr-2 text-primary text-lg"></i>
              About
            </h4>
            <p class="text-white/90 leading-relaxed text-base">
              {{ teamMember.bio }}
            </p>
          </div>

          <!-- Skills Section -->
          <div
            class="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
              <i class="pi pi-star mr-2 text-primary text-lg"></i>
              Skills & Expertise
            </h4>
            <div class="flex flex-wrap gap-2">
              <p-chip
                *ngFor="let skill of teamMember.skills"
                [label]="skill"
                [styleClass]="'skill-chip'"
              ></p-chip>
            </div>
          </div>

          <!-- Contact & Social Section -->
          <div
            class="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
              <i class="pi pi-globe mr-2 text-primary text-lg"></i>
              Contact & Connect
            </h4>
            <div class="flex flex-col space-y-4">
              <!-- Email Contact -->
              <a
                [href]="'mailto:' + teamMember.social.email"
                class="contact-link email-link"
                aria-label="Send Email"
              >
                <div
                  class="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/15 hover:border-primary/40 hover:bg-black/40 transition-all duration-300"
                >
                  <div
                    class="w-12 h-12 bg-primary/25 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <i class="pi pi-envelope text-primary text-xl"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white font-semibold text-base mb-1">Email</p>
                    <p class="text-white/80 text-sm truncate">
                      {{ teamMember.social.email }}
                    </p>
                  </div>
                  <div class="text-primary/60">
                    <i class="pi pi-external-link text-sm"></i>
                  </div>
                </div>
              </a>

              <!-- LinkedIn -->
              <a
                [href]="teamMember.social.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link linkedin-link"
                aria-label="LinkedIn Profile"
              >
                <div
                  class="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/15 hover:border-blue-500/40 hover:bg-black/40 transition-all duration-300"
                >
                  <div
                    class="w-12 h-12 bg-blue-600/25 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <i class="pi pi-linkedin text-blue-400 text-xl"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white font-semibold text-base mb-1">
                      LinkedIn
                    </p>
                    <p class="text-white/80 text-sm">
                      View Professional Profile
                    </p>
                  </div>
                  <div class="text-blue-400/60">
                    <i class="pi pi-external-link text-sm"></i>
                  </div>
                </div>
              </a>

              <!-- GitHub -->
              <a
                [href]="teamMember.social.github"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link github-link"
                aria-label="GitHub Profile"
              >
                <div
                  class="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/15 hover:border-gray-400/40 hover:bg-black/40 transition-all duration-300"
                >
                  <div
                    class="w-12 h-12 bg-gray-700/25 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <i class="pi pi-github text-gray-300 text-xl"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white font-semibold text-base mb-1">
                      GitHub
                    </p>
                    <p class="text-white/80 text-sm">View Projects & Code</p>
                  </div>
                  <div class="text-gray-400/60">
                    <i class="pi pi-external-link text-sm"></i>
                  </div>
                </div>
              </a>

              <!-- Contact Availability -->
              <div class="contact-info">
                <div
                  class="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/15"
                >
                  <div
                    class="w-12 h-12 bg-green-600/25 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <i class="pi pi-check-circle text-green-400 text-xl"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-white font-semibold text-base mb-1">
                      Status
                    </p>
                    <p class="text-white/80 text-sm">
                      Available for new projects
                    </p>
                  </div>
                  <div class="text-green-400/60">
                    <i class="pi pi-circle-fill text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-template>

      <ng-template pTemplate="footer">
        <div class="flex justify-end space-x-3">
          <p-button
            label="Close"
            icon="pi pi-times"
            severity="secondary"
            [outlined]="true"
            [rounded]="true"
            (onClick)="onHide()"
            class="enhanced-secondary-button"
          ></p-button>
        </div>
      </ng-template>
    </p-dialog>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Dialog customization */
      ::ng-deep .team-dialog {
        background: rgba(17, 24, 39, 0.98) !important;
        backdrop-filter: blur(25px) !important;
        border: 1px solid rgba(255, 255, 255, 0.15) !important;
        border-radius: 1.5rem !important;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6) !important;
        max-height: 85vh !important;
        overflow-y: auto !important;
      }

      ::ng-deep .team-dialog .p-dialog-header {
        background: transparent !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
        padding: 1.5rem !important;
      }

      ::ng-deep .team-dialog .p-dialog-content {
        background: transparent !important;
        padding: 1.5rem !important;
        max-height: 65vh !important;
        overflow-y: auto !important;
      }

      ::ng-deep .team-dialog .p-dialog-footer {
        background: transparent !important;
        border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
        padding: 1.5rem !important;
      }

      /* Scrollbar styling */
      ::ng-deep .team-dialog .p-dialog-content::-webkit-scrollbar {
        width: 6px;
      }

      ::ng-deep .team-dialog .p-dialog-content::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
      }

      ::ng-deep .team-dialog .p-dialog-content::-webkit-scrollbar-thumb {
        background: rgba(0, 212, 255, 0.5);
        border-radius: 3px;
      }

      ::ng-deep .team-dialog .p-dialog-content::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 212, 255, 0.7);
      }

      /* Skill chips */
      ::ng-deep .skill-chip {
        background: rgba(0, 212, 255, 0.2) !important;
        color: var(--color-primary) !important;
        border: 1px solid rgba(0, 212, 255, 0.3) !important;
        border-radius: 1rem !important;
        font-weight: 500 !important;
        font-size: 0.875rem !important;
        padding: 0.5rem 1rem !important;
        transition: all 0.3s ease !important;
      }

      ::ng-deep .skill-chip:hover {
        background: rgba(0, 212, 255, 0.3) !important;
        border-color: rgba(0, 212, 255, 0.5) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2) !important;
      }

      /* Contact links */
      .contact-link {
        text-decoration: none;
        display: block;
        transition: all 0.3s ease;
      }

      .contact-link:hover {
        transform: translateY(-2px);
        text-decoration: none;
      }

      .contact-link:hover .bg-black\\/20 {
        background: rgba(0, 0, 0, 0.3) !important;
      }

      .email-link:hover .bg-primary\\/20 {
        background: rgba(0, 212, 255, 0.3) !important;
      }

      .linkedin-link:hover .bg-blue-600\\/20 {
        background: rgba(0, 119, 181, 0.3) !important;
      }

      .github-link:hover .bg-gray-700\\/20 {
        background: rgba(36, 41, 46, 0.3) !important;
      }

      /* Enhanced button styles */
      .enhanced-secondary-button {
        box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3),
          0 8px 25px rgba(168, 85, 247, 0.2);
        transition: all 0.3s ease;
      }

      .enhanced-secondary-button:hover {
        box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4),
          0 12px 35px rgba(168, 85, 247, 0.3);
        transform: translateY(-2px);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        ::ng-deep .team-dialog {
          width: 95vw !important;
          margin: 1rem !important;
        }

        ::ng-deep .team-dialog .p-dialog-header,
        ::ng-deep .team-dialog .p-dialog-content,
        ::ng-deep .team-dialog .p-dialog-footer {
          padding: 1rem !important;
        }

        .grid {
          grid-template-columns: 1fr !important;
        }
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
