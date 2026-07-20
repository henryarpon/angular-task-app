import {
    Component,
    Input,
    Output,
    EventEmitter,
    input,
    output,
    computed,
} from '@angular/core';

interface User {
    id: string;
    avatar: string;
    name: string;
}

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
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

    imagePath = computed(() => `assets/users/${this.user().avatar}`);

    // get imagePath() {
    //     return `assets/users/${this.avatar}`;
    // }

    selectUser() {
        this.userSelect.emit(this.user().id);
    }
}
