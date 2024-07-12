import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Weather } from './type.';

@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService) { }

    @Get(':location')
    findWithLocation(@Param('location') location: string) {
        return this.weatherService.findWithLocation(location)
    }
}
