import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {NOTES} from '../notes';

@Component({
    selector: 'app-notes-list',
    standalone: true,
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.css'],
    imports: [NgFor],
})
export class NotesListComponent {
    notes = NOTES;
}