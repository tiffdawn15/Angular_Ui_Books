import { Component } from "@angular/core";
import { AddBook, BookService } from "../book.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-book-modal",
  templateUrl: "./book-modal.component.html",
  styleUrls: ["./book-modal.component.scss"],
})
export class BookModalComponent {
  bookForm = new FormGroup({
    title: new FormControl(""),
    author: new FormControl(""),
  });

  constructor(private bookService: BookService) {}

  saveBook() {
    let b: AddBook = {
      title: this.bookForm.value.title || "",
      author: this.bookForm.value.author || "",
    };

    console.log(b);
    
    this.bookService.postBook(b).subscribe((data) => {
      console.log(data);
    });
  }
}
