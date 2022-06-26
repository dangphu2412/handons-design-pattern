import { RoleService } from './client/role.service';
import { RoleRepository } from './role.repository';
import { Role } from './entities/role.entity';
import { In } from 'typeorm';
import { RoleDef } from './constants/role-def.enum';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class RoleServiceImpl implements RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  getNewUserRoles(): Promise<Role[]> {
    // To check rollback of transactional
    throw new InternalServerErrorException();

    return this.roleRepository.find({
      where: {
        key: In([RoleDef.VISITOR]),
      },
    });
  }
}
