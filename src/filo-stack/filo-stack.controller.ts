import { Body, Controller, Delete, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { FiloStackService } from './filo-stack.service';
import { AddToStackDto } from './dtos/addToStack.dto';
import { AddedToStackSuccessResponse, GetAllStackElementsSuccessResponse, RemovedAllElementsSuccessResponse, RemovedTopElementSuccessResponse } from './models/filo-stack.models';


@Controller('filo-stack')
export class FiloStackController {
    constructor(private filoStackService: FiloStackService){}
    @Get()
    retrieveAllElementsFromStack(): GetAllStackElementsSuccessResponse {
        return this.filoStackService.retrieveAllElements();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true}))
    addElementToStack(@Body() body: AddToStackDto): AddedToStackSuccessResponse{
        return this.filoStackService.addElementToStack(body.elementToAdd)
        
    }

    @Delete('/all')
    removeAllElements(): RemovedAllElementsSuccessResponse {
        return this.filoStackService.deleteAllElements();
    }

    @Delete('/top')
    removeSingleElement(): RemovedTopElementSuccessResponse {
        return this.filoStackService.removeSingleElement();
    }

}
