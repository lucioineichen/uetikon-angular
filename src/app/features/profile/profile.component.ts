import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProfileService } from './profile.service'
import { BehaviorSubject, map, tap } from 'rxjs'
import { User } from 'src/app/core/auth/user'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-profile',
  template: `
    <div *ngIf="user$ | async as user">
      {{ user.fullName }}
    </div>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit, OnDestroy {
  readonly user$ = new BehaviorSubject<User | undefined>(undefined)
  readonly sink = new SubSink()

  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    console.log('asdfiuoahefioasdl')
    const sub = this.service
      .getUser()
      .pipe(
        map((user) => User.Build(user)),
        tap((user) => this.user$.next(user)),
        tap(console.info)
      )
      .subscribe()
    this.sink.add(sub)
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
