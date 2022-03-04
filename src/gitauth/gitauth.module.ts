import { Module } from '@nestjs/common'
import { GitauthService } from './gitauth.service'
import { GitauthController } from './gitauth.controller'
import { GithubStrategy } from './github.strategy.service'

@Module({
  providers: [GitauthService, GithubStrategy],
  controllers: [GitauthController]
})
export class GitauthModule {}
