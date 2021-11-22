import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fg-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss'],
})
export class AboutpageComponent implements OnInit {
  form = new FormGroup({
    ime: new FormControl(null),
    prezime: new FormControl(null),
    telefon: new FormControl(null),
    adresa: new FormGroup({
      grad: new FormControl(null),
      ulica: new FormGroup({
        nazivUlice: new FormControl(null),
        bivsiNaziv: new FormControl(null),
      }),
      broj: new FormControl(null),
    }),
  });
  onSubmit() {
    console.log(this.form.value);
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.form);
  }
}
