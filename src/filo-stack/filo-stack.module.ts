import { Module } from '@nestjs/common';
import { FiloStackController } from './filo-stack.controller';
import { FiloStackService } from './filo-stack.service';

@Module({
    controllers: [FiloStackController],
    providers: [FiloStackService]
})
export class FiloStackModule {}
