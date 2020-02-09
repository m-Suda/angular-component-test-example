import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [EntryComponent],
    imports: [
        CommonModule,
        EntryRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
})
export class EntryModule {}
