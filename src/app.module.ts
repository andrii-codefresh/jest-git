import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitauthModule } from './gitauth/gitauth.module';

@Module({
  imports: [GitauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
