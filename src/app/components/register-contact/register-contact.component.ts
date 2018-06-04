import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { BusinessListComponent } from '../business-list/business-list.component';
import { Category } from '../../category';


@Component({
  selector: 'app-register-contact',
  templateUrl: './register-contact.component.html',
  styleUrls: ['./register-contact.component.css']
})
export class RegisterContactComponent implements OnInit {

  categories: Category[];

  constructor(private _fs: FirebaseService, private _blist: BusinessListComponent ) { }

  ngOnInit() {

    this._fs.getCategories().subscribe(cat => {
      this.categories = cat;
    });
  }

    goBack (state) {
      this._blist.changeState(state);
    }

    addNewBusiness(company: string, selectedCategory: string, years_in_business: number, describ: string, phone: string, email: string, street: string, city: string, state: string, zipcode: string) {
        const created_at = new Date().toDateString();
        const newBusiness = {
            company: company,
            description: describ,
            category: selectedCategory,
            years_in_business: years_in_business,
            street_adress: street,
            city: city,
            state: state,
            zipcode: zipcode,
            phone: phone,
            email: email,
            created_at: created_at
        };

        this._fs.addBusiness(newBusiness);
        this._blist.changeState('default');

    }

}
