import User from '../users/interfaces/user.interface';
import { Track } from '../users/types/return-user.type';

export const excludePasswordFromUser = (user: User): Track => {
  const { id, login, version, createdAt, updatedAt } = user;
  return { id, login, version, createdAt, updatedAt };
};
