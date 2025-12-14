import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UpdateFormDto } from './dto/update-form-status.dto';

@Controller('form')
export class UserController {

    constructor(private readonly userService: UserService){}


    @Post()
    create(@Body() user: User): Promise<User>{
        return this.userService.create(user);
    }

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }
W
    @Get(':nikUser/allForms')
    findDataByNik(@Param('nikUser') nikUser: string){
        return this.userService.findDataByNik(nikUser);
    }
    // @Patch(':id')
    // upda
    @Delete(':id')
    remove(id: number): Promise<void>{
        return this.userService.remove(id)
    }

    @Patch(':id')
    update(@Param('id')id: number, @Body() updateFormDto: UpdateFormDto){
        return this.userService.update(id, updateFormDto);
    }
    


}
