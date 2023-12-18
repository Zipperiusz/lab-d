import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  readonly baseUrl = 'http://localhost:48341';

  constructor(private http: HttpClient) {}

  public index(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/todos`, {
      params: {
        archived: archived,
        _sort: 'id',
        _order: 'desc',
      },
    });
  }

  public post(task: Task): Observable<Task> {
    return this.http.post(`${this.baseUrl}/todos`, task);
  }

  public put(task: Task): Observable<Task> {
    return this.http.put(`${this.baseUrl}/todos/${task.id}`, task);
  }

  public delete(task: Task): Observable<any> {
    return this.http.delete(`${this.baseUrl}/todos/${task.id}`);
  }
}
