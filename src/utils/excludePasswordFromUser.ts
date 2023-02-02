import User from '../users/interfaces/user.interface';
import { ReturnUser } from '../users/types/return-user.type';

export const excludePasswordFromUser = (user: User): ReturnUser => {
  const { id, login, version, createdAt, updatedAt } = user;
  return { id, login, version, createdAt, updatedAt };
};
