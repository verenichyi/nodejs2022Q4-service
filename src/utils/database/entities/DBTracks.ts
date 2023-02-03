import * as uuid from 'uuid';
import DBEntity from './DBEntity';
import { CreateTrackDto } from '../../../tracks/dto/create-track.dto';
import { UpdateTrackDto } from '../../../tracks/dto/update-track.dto';
import Track from '../../../tracks/interfaces/track.interface';

export default class DBTracks extends DBEntity<
  Track,
  UpdateTrackDto,
  CreateTrackDto
> {
  async create(dto: CreateTrackDto) {
    const created: Track = {
      id: uuid.v4(),
      ...dto,
    };
    this.entities.push(created);
    return created;
  }
}
