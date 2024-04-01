import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books-service';
@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  booksList: any[] = [];
  filteredBooks: any[] = [];
  searchQuery: string = '';

  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      this.loadBooks();
    });
  }

  loadBooks(): void {
    this.booksService.searchBooks(this.searchQuery).subscribe((data: any) => {
      this.booksList = data.items;
      this.filteredBooks = this.booksList;
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.router.navigate([''], { queryParams: { q: this.searchQuery } });
  }

  shortDescription(title: string, description: string): { shortTitle: string, shortDescription: string } {
    const maxTitleLength = 20;
    const maxDescriptionLength = 120;
    
    const shortTitle = title.length > maxTitleLength ? title.substr(0, maxTitleLength) + '...' : title;
    const shortDescription = description.length > maxDescriptionLength ? description.substr(0, maxDescriptionLength) + '...' : description;
  
    return { shortTitle, shortDescription };
  }
  
  navigateToDetail(bookId: string): void {
    this.router.navigate(['./book-details', bookId]);
  }
}
