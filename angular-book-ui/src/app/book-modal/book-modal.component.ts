import { Component } from "@angular/core";
import { AddBook, BookService } from "../book.service";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

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
  private modalRef: any;

  constructor(private bookService: BookService,
    private _modalService: NgbModal,
    public activeModal: NgbActiveModal
    ) {}

  saveBook() {
    let b: AddBook = {
      title: this.bookForm.value.title || "",
      author: this.bookForm.value.author || "",
    };
    
    this.bookService.postBook(b).subscribe((data) => {
      this.activeModal.close();
    });
  }

}
