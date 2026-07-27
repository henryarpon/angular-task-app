import {
    Component,
    Input,
    Output,
    EventEmitter,
    input,
    output,
    computed,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    // @Input({ required: true }) id!: string;
    // @Input({ required: true }) avatar!: string;
    // @Input({ required: true }) name!: string;
    // @Output() userSelect = new EventEmitter();

    // id = input.required<string>();
    // avatar = input.required<string>();
    // name = input.required<string>();

    user = input.required<User>();
    userSelect = output<string>();
    selectedUser = input.required<boolean>();

    imagePath = computed(() => `assets/users/${this.user().avatar}`);

    // get imagePath() {
    //     return `assets/users/${this.avatar}`;
    // }

    selectUser() {
        this.userSelect.emit(this.user().id);
    }
}
