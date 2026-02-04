import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-schedule-consultant-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    TextareaModule,
    MessageModule,
  ],
  template: `
    <p-dialog
      [(visible)]="visible"
      [modal]="true"
      [closable]="true"
      [draggable]="false"
      [resizable]="false"
      [style]="{ width: '90vw', maxWidth: '600px' }"
      [styleClass]="'schedule-dialog glass-dialog'"
      (onHide)="onHide()"
      header="Schedule a Consultation"
    >
      <ng-template pTemplate="header">
        <div class="flex flex-col">
          <h2 class="text-2xl font-bold gradient-text-logo">
            Schedule Consultation
          </h2>
          <p class="text-sm text-muted">Book a time with our experts</p>
        </div>
      </ng-template>

      <ng-template pTemplate="content">
        <form [formGroup]="scheduleForm" class="space-y-6 mt-4">
          <!-- Name & Email Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="form-group">
              <label class="block text-sm font-medium mb-1 text-white/90"
                >Full Name</label
              >
              <input
                pInputText
                formControlName="name"
                placeholder="John Doe"
                class="w-full glass-input"
              />
              <small class="text-red-500" *ngIf="isFieldInvalid('name')"
                >Name is required</small
              >
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium mb-1 text-white/90"
                >Email</label
              >
              <input
                pInputText
                formControlName="email"
                placeholder="john@example.com"
                class="w-full glass-input"
              />
              <small class="text-red-500" *ngIf="isFieldInvalid('email')"
                >Valid email is required</small
              >
            </div>
          </div>

          <!-- Date & Time -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1 text-white/90"
              >Preferred Date & Time</label
            >
            <p-calendar
              formControlName="date"
              [showTime]="true"
              [showIcon]="true"
              placeholder="Select date and time"
              styleClass="w-full glass-calendar"
              [style]="{ width: '100%' }"
              appendTo="body"
            ></p-calendar>
            <small class="text-red-500" *ngIf="isFieldInvalid('date')"
              >Date is required</small
            >
          </div>

          <!-- Project Type -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1 text-white/90"
              >Project Type</label
            >
            <p-dropdown
              [options]="projectTypes"
              formControlName="projectType"
              placeholder="Select project type"
              styleClass="w-full glass-dropdown"
              [style]="{ width: '100%' }"
              appendTo="body"
            ></p-dropdown>
          </div>

          <!-- Project Details -->
          <div class="form-group">
            <label class="block text-sm font-medium mb-1 text-white/90"
              >Project Details</label
            >
            <textarea
              pInputTextarea
              formControlName="details"
              rows="4"
              placeholder="Briefly describe your requirements..."
              class="w-full glass-input"
            ></textarea>
          </div>
        </form>
      </ng-template>

      <ng-template pTemplate="footer">
        <div class="flex justify-end gap-2 pt-4">
          <p-button
            label="Cancel"
            icon="pi pi-times"
            (onClick)="onHide()"
            styleClass="p-button-text text-muted hover:text-surface-900"
          ></p-button>
          <p-button
            label="Confirm Schedule"
            icon="pi pi-check"
            [loading]="loading"
            (onClick)="onSubmit()"
            styleClass="enhanced-primary-button"
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

      ::ng-deep .schedule-dialog .p-dialog-header {
        border-bottom: 1px solid var(--color-border);
      }
      ::ng-deep .schedule-dialog .p-dialog-content {
        padding: 2rem;
      }

      .text-muted {
        color: var(--color-text-muted);
      }

      /* Calendar Overrides for Glass Theme */
      ::ng-deep .glass-calendar .p-inputtext {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        border-radius: 8px 0 0 8px;
      }
      ::ng-deep .glass-calendar .p-button {
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
      }
    `,
  ],
})
export class ScheduleConsultantDialogComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  scheduleForm: FormGroup;
  loading = false;

  projectTypes = [
    { label: 'Web Application', value: 'webapp' },
    { label: 'Mobile App', value: 'mobile' },
    { label: 'Hotel Management System', value: 'hms' },
    { label: 'Data Analytics Dashboard', value: 'dashboard' },
    { label: 'Consultation Only', value: 'consultation' },
  ];

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: [null, Validators.required],
      projectType: [null],
      details: [''],
    });
  }

  onHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  onSubmit() {
    if (this.scheduleForm.valid) {
      this.loading = true;
      // Simulate API
      setTimeout(() => {
        this.loading = false;
        this.onHide();
        // Here you would typically show a success toast
      }, 1500);
    } else {
      Object.keys(this.scheduleForm.controls).forEach((key) => {
        this.scheduleForm.get(key)?.markAsTouched();
      });
    }
  }

  isFieldInvalid(field: string) {
    const control = this.scheduleForm.get(field);
    return control?.invalid && (control.dirty || control.touched);
  }
}
