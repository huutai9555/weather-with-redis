import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [WeatherModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: '127.0.0.1',
      port: 6379
    })],
  controllers: [],
  providers: [],
})
export class AppModule { }
