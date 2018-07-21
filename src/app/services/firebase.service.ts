import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Business } from '../business';
import { Category } from '../category';


@Injectable()
export class FirebaseService {
    itemsRef: AngularFireList< Business >;
    business: Observable<Business[]>;
    categories: Observable<Category[]>;

    constructor(private db: AngularFireDatabase) {
        this.itemsRef = db.list('/businesses');
        // Use snapshotChanges().map() to store the key
        this.business = this.itemsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() } ))
            )
        );
        this.categories = db.list('/categories').valueChanges() as Observable< Category[] >;
    }


  getBusinesses(category: string = null) {
    if (category != null) {
        this.business = this.itemsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() } ))
            )
        );
    } else {}
    return this.business;
  }
  getCategories() {
      return this.categories;
  }

    addBusiness(newBusiness) {
        return this.db.list('/businesses').push(newBusiness);
    }

    updateBusiness(key, editedBusiness) {
        return this.db.list('/businesses').update(key, editedBusiness);
    }

    delete(_key) {
       return this.db.list('/businesses').remove(_key);
    }
}
