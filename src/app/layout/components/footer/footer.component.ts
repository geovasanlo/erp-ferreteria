import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public hoy = new Date();

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
