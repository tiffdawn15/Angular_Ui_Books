import { Component, OnInit } from "@angular/core";
import { Book, BookService } from "../book.service";


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
  }

  ngOnInit() {
    this.bookService.getDetails().subscribe((res) => {
      console.log(res.result);
      this.books = res.result;
      this.collectionSize = this.books.length;
    });
  }

  // TODO: fix this 
  // refreshCountries() {
  //   this.books = books.map((book, i) => ({
  //     id: i + 1,
  //     ...book,
  //   })).slice(
  //     (this.page - 1) * this.pageSize,
  //     (this.page - 1) * this.pageSize + this.pageSize
  //   );
  // }
}
