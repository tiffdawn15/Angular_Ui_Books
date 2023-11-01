import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AddBook, Book, BookService } from "../book.service";

@Component({
  selector: "app-book-modal",
  templateUrl: "./book-modal.component.html",
  styleUrls: ["./book-modal.component.scss"],
})
export class BookModalComponent implements OnInit {
  @Input()
  public book!: Book;

  bookForm = new FormGroup({
    id: new FormControl(""),
    title: new FormControl(""),
    author: new FormControl(""),
  });

  constructor(
    private bookService: BookService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.book != undefined) {
      this.bookForm.controls.author.setValue(this.book.author);
      this.bookForm.controls.title.setValue(this.book.title);
    }
  }

  onSubmit() {
    if (this.book === undefined) {
      let b: AddBook = {
        title: this.bookForm.value.title || "",
        author: this.bookForm.value.author || "",
      };

      this.bookService.postBook(b).subscribe((data) => {
        this.activeModal.close();
      });
    } else {
      let b: Book = {
        id: this.book.id,
        title: this.bookForm.value.title || "",
        author: this.bookForm.value.author || "",
      };

      this.bookService.putBook(b.id, b).subscribe((data) => {
        this.activeModal.close();
      });
    }
  }
}
