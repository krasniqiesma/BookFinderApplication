import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { BooksRoutingModule } from './books-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class BooksModule { }
