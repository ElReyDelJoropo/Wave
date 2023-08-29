import { CreateUserDto, UserDto, UpdateUserDto } from '@dto';
import { FilterQuery } from 'mongoose';
import { User } from './entities/user.entity';

export interface UserRepository {
  create(createUserDto: CreateUserDto): Promise<UserDto>;
  update(id: string, UpdateUserDto: UpdateUserDto): Promise<void>;
  findById(id: string): Promise<UserDto | null>;
  findOne(filter: FilterQuery<User>): Promise<UserDto | null>;
  findByEmail(email: string): Promise<boolean>;
  findMany(filter: FilterQuery<User>): Promise<UserDto[]>;
}

export const UserRepositoryKey = Symbol('UserRepository');

// si el email existe, validacion y hash de password.
// servicio separados en 2, que se pueda ver si hay email ya registrado.

// cuando quiere ver tu perfil, tenes que verificar que haya tenido match.//

// un dto para el perfil desde el lado del visitante y otro para ver tu propio perfil.//
