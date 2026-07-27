import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormData } from '../task.model';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
    cancel = output();

    title = signal<string>('');
    summary = signal<string>('');
    dueDate = signal<string>('');
    formData = output<TaskFormData>();

    onCancel() {
        this.cancel.emit();
    }

    onCreateTask() {
        this.formData.emit({
            title: this.title(),
            summary: this.summary(),
            dueDate: this.dueDate(),
        });
    }
}
