import { Photo } from './../photos/photos';
import { MatToolbarModule } from '@angular/material/toolbar';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    HostBinding,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

interface UserDetails {
    id: number;
    email: string;
    name: string;
}
// Hier war ich
@Component({
    selector: "app-user-details",
    template: `
    <h1>User Details</h1>
    <section *ngIf="user$ | async as user"> 
        <h4 class="mat-title"> {{ user.name }} </h4>
        <p class="mat-caption"> {{user.email}} </p>
        <p class="mat-caption">User Id: {{ user.id }}</p>
    </section>
    <ul class="drop-area"></ul>
    `,
    styles: [
        `   
            .drop-area {
                border: #ccc dashed 2px;
                padding: 20px 10x;
                box-sizing: border-box;
                margin-top: 15px;
            }
            :host {
                display: block;
                background-color: #fafafa;
                padding: 15px;
                margin: 20px;
                box-sizing: border-box;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush, // Was
})
export class UserDetailsComponent implements OnInit {
    @HostBinding("class.mat-elevation-z2") hostCls = true;
    user$!: Observable<UserDetails>;
    photos: Photo[] = [];
    
    constructor (
        private http: HttpClient,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() : void {
        this.user$ = this.activatedRoute.params.pipe (
            pluck("id"),
            switchMap((id) => 
                this.http.get<UserDetails>(
                    `https://jsonplaceholder.typicode.com/users/${id}`
                ))
        );
    }

    drop(event: CdkDragDrop<Photo[]>) {
        transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
        console.log(event);
    }
}