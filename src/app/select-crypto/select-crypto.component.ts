import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-crypto',
  templateUrl: './select-crypto.component.html',
  styleUrls: ['./select-crypto.component.scss'],
})
export class SelectCryptoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  selectFavorite(cryptoName: string) {
    const userId = localStorage.getItem('userId');
    this.http
      .post('http://localhost:3000/set-favorite-crypto', {
        cryptoName: cryptoName,
        userId: userId,
      })
      .subscribe();
  }
}
