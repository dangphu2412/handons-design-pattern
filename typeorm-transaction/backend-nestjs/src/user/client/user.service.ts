import { User } from '../user.entity';
import { CreateUserDto } from '../entities/dtos/create-user.dto';

export const UserServiceToken = 'UserServiceToken';

export interface UserService {
  find(): Promise<User[]>;
  findByUsername(username: string): Promise<User>;

  create(dto: CreateUserDto): Promise<string>;
}