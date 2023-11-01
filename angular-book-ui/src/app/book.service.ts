import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export const BASE_URI: string = "http://localhost:8080/";

export interface Book {
  id: string;
  title: string;
  author: string;
}

export interface AddBook {
  title: string;
  author: string;
}

export interface GetResult {
  worked: boolean;
  httpStatus: string;
  result: Book[];
}

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getDetails(): Observable<GetResult> {
    return this.httpClient.get<GetResult>(BASE_URI + "api/books/v1");
  }

  postBook(book: AddBook): Observable<boolean> {
    return this.httpClient.post<boolean>(BASE_URI + "api/books/v1", book);
  }

  putBook(id: string, book: Book): Observable<boolean> {
    const url = BASE_URI + "api/books/v1/" + id;
    console.log(url);
    return this.httpClient.put<boolean>(url, book);
  }

  deleteBook(id: string): Observable<boolean> {
    const url = BASE_URI + "api/books/v1/" + id;
    console.log(url);
    return this.httpClient.delete<boolean>(url);
  }
}
