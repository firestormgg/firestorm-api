import { AuthService } from './auth.service';
import { RegisterDto } from './validators/register.dto';
import { AuthResponseDto } from './validators/auth-response.dto';
import { UserResponseDto } from 'src/users/validator/user-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    login(req: any): Promise<AuthResponseDto>;
    me(req: any): Promise<UserResponseDto>;
}
