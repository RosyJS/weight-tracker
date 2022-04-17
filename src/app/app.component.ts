import { Component} from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'weight-tracker';
}
