import {Component, OnInit} from '@angular/core';
import {UwuService} from "../../submod2/services/uwu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'submod1';

  constructor(private uwuService: UwuService) {
  }

  ngOnInit(): void {
    console.log('yay');
    console.log(this.uwuService.bla())
  }
}
