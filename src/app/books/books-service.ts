import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const defaultQuery = 'javascript';
    const API_URL = query.trim() !== '' ?
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}+intitle:${encodeURIComponent(query)}&fields=items(id,volumeInfo(title,authors,description,imageLinks))` :
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(defaultQuery)}&maxResults=10&fields=items(id,volumeInfo(title,authors,description,imageLinks))`;
    return this.http.get(API_URL);
  }

  getBookDetails(bookId: number): Observable<any> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  }
}
