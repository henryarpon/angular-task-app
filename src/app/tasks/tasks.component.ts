import { Component, signal, input, computed } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskFormData, UserTask } from './task.model';

interface User {
    id: string;
    avatar: string;
    name: string;
}

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    user = input.required<User>();

    isTaskBeingAdded = signal(false);

    tasks = signal(DUMMY_TASKS);

    selectedUserTask = computed(() =>
        this.tasks().filter((task) => task.userId === this.user().id),
    );

    onTaskComplete(selectedTaskId: string) {
        this.tasks.set(
            this.tasks().filter((task) => task.id !== selectedTaskId),
        );
    }

    onStartAddTask() {
        this.isTaskBeingAdded.set(true);
    }

    onCancelAddTask() {
        this.isTaskBeingAdded.set(false);
    }

    onAddTask(taskFormData: TaskFormData) {
        const newTask: UserTask = {
            id: Math.random().toString(),
            userId: this.user().id,
            title: taskFormData.title,
            summary: taskFormData.summary,
            dueDate: taskFormData.dueDate,
        };
        this.tasks.update((tasks) => [...tasks, newTask]);
        this.isTaskBeingAdded.set(false);
    }
}
