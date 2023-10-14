import { Component, OnInit } from "@angular/core";
import { Book, BookService, GetResult } from "../book.service";


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

  constructor(private bookService: BookService) {
    this.refreshTable();
  }

  ngOnInit() {
    this.bookService.getDetails().subscribe((res) => {
      this.books = res.result;
      this.collectionSize = this.books.length;
    });
  }

  // TODO: fix this 
  refreshTable() {
    this.books =  this.books.map((book, i) => ({
      ...book,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }



	// refreshCountries() {
	// 	this.countries = COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
	// 		(this.page - 1) * this.pageSize,
	// 		(this.page - 1) * this.pageSize + this.pageSize,
	// 	);
	// }
}
