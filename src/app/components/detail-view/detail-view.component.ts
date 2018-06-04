import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';
import { BusinessListComponent} from '../business-list/business-list.component';
import { Business } from '../../business';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  _businesses: Business[];
  activeKey: string;
  constructor( private _fs: FirebaseService, private _blistComp: BusinessListComponent) { }

  ngOnInit() {
    this._fs.getBusinesses().subscribe( datasource =>{
      this._businesses = datasource;
    });
    this.activeKey = this._blistComp.activeKey;
  }

}
