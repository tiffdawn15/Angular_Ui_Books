import { Component, Input, OnInit } from "@angular/core";
import { Book, BookService, GetResult } from "../book.service";
import { BookModalComponent } from "../book-modal/book-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.scss"],
})
export class BookTableComponent implements OnInit {
  @Input()
  public updateBook: any;

  private anyData: any;

  books: Book[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(
    private bookService: BookService,
    private _modalService: NgbModal
  ) {
    this.refreshTable();
  }

  ngOnInit() {
    this.getBooks();
  }

  addBook() {
    const modalRef = this._modalService.open(BookModalComponent, {
      size: "xl",
    });
  }

  getBooks() {
    this.bookService.getDetails().subscribe((res) => {
      this.books = res.result;
      this.collectionSize = this.books.length;
    });
  }

  refreshTable() {
    this.books = this.books
      .map((book, i) => ({
        ...book,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
// TODO: 
// 1. open modal with book informaiton 
// 2. onSubmit go to edit Modal -- how will i tell the difference between 
  editBook(book: Book) {
    console.log(book);
    const modalRef = this._modalService.open(BookModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.author = book.author;
    modalRef.componentInstance.title = book.author;
  }

  deleteBook(){
    console.log('Delete Book');
  }
}
