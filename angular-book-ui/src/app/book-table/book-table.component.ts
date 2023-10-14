import { Component, OnInit } from "@angular/core";
import { Book, BookService, GetResult } from "../book.service";
import { BookModalComponent } from "../book-modal/book-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.scss"],
})
export class BookTableComponent implements OnInit {

  books: Book[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(private bookService: BookService, private _modalService: NgbModal) {
    this.refreshTable();
  }

  ngOnInit() {
    this.bookService.getDetails().subscribe((res) => {
      this.books = res.result;
      this.collectionSize = this.books.length;
    });
  }

  addBook() {
		this._modalService.open(BookModalComponent, { size: 'xl' });
  }



  refreshTable() {
    this.books =  this.books.map((book, i) => ({
      ...book,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
