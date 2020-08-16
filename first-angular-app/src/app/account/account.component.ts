import { Component, OnInit } from '@angular/core';
export interface AccountData{

  accountNumber: string;
  accountName : string;
  balance: number;
  owner: string;

}
const ACCOUNT_DATA: AccountData[] = [
{accountNumber:'X23456789',accountName: 'Bank of America',balance:12345,owner:'James'},
{accountNumber:'X23456712',accountName: 'Chase',balance:45677,owner:'Tom'}
];



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['accountNumber1', 'accountName', 'balance', 'owner'];

  accountData = ACCOUNT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
