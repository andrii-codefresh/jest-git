import { Controller, Get, Req, Res, Session, UseGuards } from '@nestjs/common'
import { GitauthService } from './gitauth.service'
import { AuthGuard } from '@nestjs/passport'

@Controller()
export class GitauthController {
    constructor(
        private readonly gitauthService: GitauthService,
    ) {
    }

    @Get('github')
    @UseGuards(AuthGuard('github'))
    async githubAuth(@Req() req) {/**/}

    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    githubAuthRedirect(@Req() req, @Res() res, @Session() session: Record<string, any>) {
        // TODO: save token to store
        res.redirect(this.gitauthService.profile._json.avatar_url)
    }
}
