import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';
import { BusinessListComponent } from '../business-list/business-list.component';
import { Category } from '../../category';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

    categories: Category[];
    activeKey: String;
    activeCompany: String;
    activeDescription: String;
    activeCategory: String;
    activeYears_in_business: Number;
    activeStreet_adress: String;
    activeCity: String;
    activeState: String;
    activeZipcode: String;
    activePhone: String;
    activeEmail: String;
    selected: String;

  constructor(private fs: FirebaseService, private blist: BusinessListComponent) {
      this.fs.getCategories().subscribe(cat => {
          this.categories = cat;
      });
      this.activeKey = this.blist.activeKey;
      this.activeCompany = this.blist.activeCompany;
      this.activeCategory = this.blist.activeCategory;
      this.selected = this.activeCategory;
      this.activeYears_in_business = this.blist.activeYears_in_business;
      this.activeDescription = this.blist.activeDescription;
      this.activePhone = this.blist.activePhone;
      this.activeEmail = this.blist.activeEmail;
      this.activeStreet_adress = this.blist.activeStreet_adress;
      this.activeCity = this.blist.activeCity;
      this.activeState = this.blist.activeState;
      this.activeZipcode = this.blist.activeZipcode;
  }

  ngOnInit() {

  }

    goBack (state) {
        this.blist.changeState(state);
    }
    updateContacts() {
    console.log(this.activeKey);
        const editedBusiness = {
            company: this.activeCompany,
            description: this.activeDescription,
            category: this.activeCategory,
            years_in_business: this.activeYears_in_business,
            street_adress: this.activeStreet_adress,
            city: this.activeCity,
            state: this.activeState,
            zipcode: this.activeZipcode,
            phone: this.activePhone,
            email: this.activeEmail
        };

        this.fs.updateBusiness(this.activeKey, editedBusiness);
        this.blist.changeState('default');
    }
}
