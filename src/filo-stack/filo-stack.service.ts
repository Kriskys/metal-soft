import { Injectable } from '@nestjs/common';
import { AddedToStackSuccessResponse, GetAllStackElementsSuccessResponse, RemovedAllElementsSuccessResponse, RemovedTopElementSuccessResponse } from './models/filo-stack.models';

@Injectable()
export class FiloStackService {
    private stack: number[] = []

    addElementToStack(number:number): AddedToStackSuccessResponse {
        this.stack.push(number)
        return { addedElement: number, stack: this.stack }
    }
    retrieveAllElements(): GetAllStackElementsSuccessResponse {
        return { stack: this.stack }
    }
    removeSingleElement(): RemovedTopElementSuccessResponse{
        const removedElement = this.stack.pop()
        return { removedElement, stack: this.stack }
    }
    deleteAllElements(): RemovedAllElementsSuccessResponse {
        const stackBeforeDeletion = this.stack
        this.stack = []
        return { stackBeforeDeletion, stack: this.stack }
    }
}
