import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  reminder: String
  turnOn = false

  constructor(
    private cd: ChangeDetectorRef
  ){}

  ngOnInit() {
    this.reminder = 'sfdg11'
    var min = 1, max = 3;
    var rand = 1

    setInterval( () => {
      this.reminder = this.reminder + '1'

      var rand = Math.floor(Math.random() * (max - min + 1) + min);

      console.log('Wait for ' + rand + ' minutes');
      console.log(this.reminder);

      this.turnOn = true

      // setTimeout( () => {
      //   this.turnOn = false
      // }, 3000)

    }, rand * 10000)
  }
}
