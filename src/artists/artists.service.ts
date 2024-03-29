import { Injectable } from '@nestjs/common';
import Database from '../utils/database/database';
import Artist from './interfaces/artist.interface';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(private database: Database) {}
  async getAllArtists(): Promise<Artist[]> {
    return await this.database.artists.findMany();
  }

  async getArtist(id: string): Promise<Artist> {
    return await this.database.artists.findOne({ key: 'id', equals: id });
  }

  async createArtist(track: CreateArtistDto): Promise<Artist> {
    return await this.database.artists.create(track);
  }

  async updateArtist(id: string, track: UpdateArtistDto): Promise<Artist> {
    return await this.database.artists.change(id, track);
  }

  async deleteArtist(id: string): Promise<Artist> {
    return await this.database.artists.delete(id);
  }
}
