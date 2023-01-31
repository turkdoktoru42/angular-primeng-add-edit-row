import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  providers: [MessageService],
})
export class CompanyListComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  @ViewChild(Table, { read: Table }) pTable: Table | any;

  //#table
  companyList: CompanyModel[] = [];
  columns: [] | any;
  page: number = 1;
  pageSize: number = 10;
  loading: boolean = true;
  totalRecords: number = 0;

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.columns = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'description', header: 'description' },
      { field: 'businessCode', header: 'businessCode' }
    ];

    this.companyList = [
      { id: 1, name: 'playstation', description: 'Game', businessCode: 3000 },
      { id: 2, name: 'player', description: 'Game', businessCode: 2000 },
      { id: 4, name: 'kindle', description: 'Books', businessCode: 2000 },
      { id: 6, name: 'lamp', description: 'Books', businessCode: 345 },
      { id: 7, name: 'reeder', description: 'Books', businessCode: 456 },
    ];
  }

  addCompany(company: CompanyModel) {
    console.log('add company : ' + company);
  }

  //#Edit
  onRowEditInit(company: CompanyModel) {
    this.companyList[company.id] = { ...company };
  }

  //#Save
  onRowEditSave(company: CompanyModel) {}

  //#Cancel
  onRowEditCancel(company: CompanyModel, index: number) {
    console.log(company, index);
    console.log(this.companyList[index]);
  }

  onReject() {
    this.messageService.clear('c');
  }

  newRow() {
    return { name: '', description: '', businessCode: '' };
  }
}

export class CompanyModel {
  id: number | any;
  name: string | any;
  description: string | any;
  businessCode: number | any;
}
