import { Injectable } from '@nestjs/common'

@Injectable()
export class GitauthService {
    public profile: any

    setProfile(profile) {
        this.profile = profile
    }
}
