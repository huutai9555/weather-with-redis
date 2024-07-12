import { HttpService } from '@nestjs/axios';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';
import axiosInstace from 'src/utils/axios.util';

@Injectable()
export class WeatherService {
    private readonly axios: Axios;
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

    async findWithLocation(location: string) {
        const cacheValue = await this.cacheManager.get(location)
        if (cacheValue) {
            console.log("Get cache value successfully!")
            return cacheValue
        }
        console.log("Missed cache value!")
        const response = await axiosInstace.get(`/${location}?unitGroup=metric&key=87QKQ2TRGQ5ME6NMLYXQYNGZT&contentType=json`)
        const value = await this.cacheManager.set(location, response.data)
        console.log(value)
        return response.data
    }
}


