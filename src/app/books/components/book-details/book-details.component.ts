import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book:any;

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];
      this.fetchBookDetails(bookId);
    });
  }

  fetchBookDetails(bookId: number): void {
    this.booksService.getBookDetails(bookId).subscribe((data: any) => {
      this.book = data.volumeInfo;
    });
  }

  goBack(): void {
    this.router.navigate(['/books/home']);
  }

}
