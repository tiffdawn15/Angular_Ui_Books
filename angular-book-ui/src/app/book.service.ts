import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export const BASE_URI: string = "http://localhost:8080/";

export interface Book {
  id: string;
  title: string;
  author: string
}

export interface GetResult {
  worked: boolean;
  httpStatus: string;
  result: Book[]
}

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getDetails(): Observable<GetResult> {
    return this.httpClient.get<GetResult>(BASE_URI + "api/books/v1");
  }
}
