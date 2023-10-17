import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component:
  NotesListComponent },
  { path: 'new', component:
  AddNoteComponent },
  { path: 'note/:id', component:
  NoteDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});