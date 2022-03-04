import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-github2'
import { GitauthService } from './gitauth.service'

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
      private gitauthService: GitauthService
    // private moduleRef: ModuleRef
  ) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      url: process.env.GITHUB_URL
    })
    // super({ passReqToCallback: true })
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    // const contextId = ContextIdFactory.getByRequest(request)
    // const githubService = await this.moduleRef.resolve(GitauthService, contextId)
    console.log(profile)
    this.gitauthService.setProfile(profile)
    return profile
  }
}
