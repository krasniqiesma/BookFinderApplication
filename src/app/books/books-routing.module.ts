import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    {
      path: '', component: BooksComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'book-details/:id', component: BookDetailsComponent}
      ]
    }
  ];
  export const BooksRoutingModule = RouterModule.forChild(routes);