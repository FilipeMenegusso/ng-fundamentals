import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <!-- Regra de negócio no template:
                [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">Time: {{event?.time}}
            -->
            <div class="well" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                <span *ngSwitchCase="'8:00 am'">Early Start</span>
                <span *ngSwitchCase="'10:00 am'">Late Start</span>
                <span *ngSwitchDefault>Normal Started</span>
            </div>
            <!-- O que faz "\$"? -->
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location.address}}</span>
                <span>&nbsp;</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
            </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: red; }
        .thumbnail { min-height: 300px; }
        .green { color: #003300 !important; }
        .bold { font-weight: bold;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    someProperty = 'some value';

    handleClickMe() {
        this.eventClick.emit('foo');
    }

    logFoo() {
        console.log('foo');
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }

        return [];
    }
}
