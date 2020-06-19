import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router, NavigationError, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	isLoading: boolean = false;
	isCollapsed = false;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
	.pipe(
		map(result => result.matches)
	);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private router: Router
	) {
		this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.isLoading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

}
