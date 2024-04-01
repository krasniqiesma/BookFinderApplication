import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  searchQuery: string = '';
  title: any;

  ngOnInit(): void {
  }
  constructor(private router: Router) {}
  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

}
