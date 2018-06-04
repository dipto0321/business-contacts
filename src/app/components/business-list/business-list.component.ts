import { Component, OnInit } from '@angular/core';

import { FirebaseService} from '../../services/firebase.service';

import { Business } from '../../business';
import { Category } from '../../category';


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})


export class BusinessListComponent implements OnInit {

    displayedColumns = ['company', 'category', 'phone', 'actions'];
    dataSource: Business[];
    categories: Category[];
    appState: string;
    activeKey: string;
    cardTitle: string;

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
    activeCreated_at: String;

    constructor( private _firebaseServices: FirebaseService) {
    }

    ngOnInit() {

        this.cardTitle = 'LIST VIEW';
        this.appState = 'default';
        this._firebaseServices.getBusinesses().subscribe(businesses => {
            this.dataSource = businesses;
        });

        this._firebaseServices.getCategories().subscribe(
            categories => {
                this.categories = categories;
            });

    }

    changeState(state, key = null) {
        if (key) {
            this.activeKey = key;
        }
        if (state === 'add') {
            this.cardTitle = 'ADD NEW BUSINESS CONTACT';
        } else if (state === 'extend') {
            this.cardTitle = 'DETAIL VIEW';
        } else if (state === 'edit') {
            this.cardTitle = 'EDIT BUSINESS CONTACT';
        } else {
            this.cardTitle = 'LIST VIEW';
        }
        this.appState = state;

    }

    filterCategory(category) {
        console.log(category);
        if (typeof(category) === 'undefined') {
            location.reload();
        }
        this._firebaseServices.getBusinesses(category).subscribe(data => {
            this.dataSource = data;
        });
    }

    showEdit(business) {
        // console.log(business);
        this.changeState('edit', business.key);
        this.activeCompany = business.company;
        this.activeCategory = business.category;
        this.activeYears_in_business = business.years_in_business;
        this.activeDescription = business.description;
        this.activePhone = business.phone;
        this.activeEmail = business.email;
        this.activeStreet_adress = business.street_adress;
        this.activeCity = business.city;
        this.activeState = business.state;
        this.activeZipcode = business.zipcode;
    }

    deleteContacts(key) {
        this._firebaseServices.delete(key);
        this.changeState('default');
    }
}





