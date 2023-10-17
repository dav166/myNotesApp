import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-note-detail',
    standalone: true,
    templateUrl: './note-detail.component.html',
    styleUrls: ['./note-detail.component.css'],
    imports: [NgIf, RouterModule],
})
export class NoteDetailComponent {
    router = inject(Router);
    activeRoute = inject(ActivatedRoute);
    id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((i) => i.id === this.id);
    
    deleteNote() {
        this.router.navigateByUrl('');
        if(this.note){
            let delNote = NOTES.indexOf(this.note, 0);
            NOTES.splice(delNote, 1);
        }
    }
}