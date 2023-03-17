import * as uuid from 'uuid';
import DBEntity from './DBEntity';
import Album from '../../../albums/interfaces/album.interface';
import { UpdateAlbumDto } from '../../../albums/dto/update-album.dto';
import { CreateAlbumDto } from '../../../albums/dto/create-album.dto';

export default class DBAlbums extends DBEntity<
  Album,
  UpdateAlbumDto,
  CreateAlbumDto
> {
  async create(dto: CreateAlbumDto) {
    const created: Album = {
      id: uuid.v4(),
      ...dto,
    };
    this.entities.push(created);
    return created;
  }
}
