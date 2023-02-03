import * as uuid from 'uuid';
import DBEntity from './DBEntity';
import { UpdateArtistDto } from '../../../artists/dto/update-artist.dto';
import { CreateArtistDto } from '../../../artists/dto/create-artist.dto';
import Artist from '../../../artists/interfaces/artist.interface';

export default class DBArtists extends DBEntity<
  Artist,
  UpdateArtistDto,
  CreateArtistDto
> {
  async create(dto: CreateArtistDto) {
    const created: Artist = {
      id: uuid.v4(),
      ...dto,
    };
    this.entities.push(created);
    return created;
  }
}
