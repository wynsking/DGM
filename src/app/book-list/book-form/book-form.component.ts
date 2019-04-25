import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      job: ['', [Validators.required]],
      numPassport: ['', [Validators.required]],
      paysResidence: ['', [Validators.required]]

    });
  }

  onSubmit() {
    const nom = this.bookForm.get('nom').value;
    const prenom = this.bookForm.get('prenom').value;
    const job = this.bookForm.get('job').value;
    const numPassport = this.bookForm.get('numPassport').value;
    const paysResidence = this.bookForm.get('paysResidence').value;
    const newBook = new Book(nom, prenom, job, numPassport, paysResidence);
    this.booksService.createNewBooks(newBook);
    this.router.navigate(['/books']);
  }

}
