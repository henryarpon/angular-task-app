import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, UserComponent, TaskComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId = signal<string>('');
    selectedUser = computed(() =>
        this.users.find((user) => user.id === this.selectedUserId()),
    );

    onSelectUser($event: string) {
        this.selectedUserId.set($event);
    }
}
