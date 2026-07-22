import { Component, input, computed } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';

interface User {
    id: string;
    avatar: string;
    name: string;
}

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    user = input.required<User>();

    tasks = DUMMY_TASKS;

    selectedUserTask = computed(() =>
        this.tasks.filter((task) => task.userId === this.user().id),
    );
}
