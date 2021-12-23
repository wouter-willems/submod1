import {Component, OnInit} from '@angular/core';
import {aap} from "../../submod2/test";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'submod1';

  ngOnInit(): void {
    console.log('yay');
    console.log(aap);
  }
}
