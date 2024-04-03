import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User(1, 'Vishwas MS', 'vm', '12345'),
    new User(2, 'Tomas Edison', 'tm', '12345'),
    new User(3, 'Virat Kohli', 'vk', '12345'),
    new User(4, 'Rahul KL', 'rk', '12345'),
  ];
}
