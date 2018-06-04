import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
