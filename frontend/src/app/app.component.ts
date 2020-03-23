import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/services/auth.service'
import { NotifierService } from 'angular-notifier';
import { UserService } from '../app/services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: UserService;

  title = 'frontend';

  private notifier: NotifierService;

  constructor(public auth: AuthService, notifier: NotifierService, user: UserService) {
    this.notifier = notifier;
    this.user = user
  }

  public showNotification( type: string, message: string ): void {
		this.notifier.notify( "success", "user created!" );
	}

	public hideOldestNotification(): void {
		this.notifier.hideOldest();
	}

	public hideNewestNotification(): void {
		this.notifier.hideNewest();
	}

	public hideAllNotifications(): void {
		this.notifier.hideAll();
	}

	public showSpecificNotification( type: string, message: string, id: string ): void {
		this.notifier.show( {
			id,
			message,
			type
		} );
	}

	public hideSpecificNotification( id: string ): void {
		this.notifier.hide( id );
  }
  
  ngOnInit() {
    this.user.onSomethingHappended(this.showNotification.bind(this));
  }
}
