import { Module } from '@nestjs/common';
import { CalzoneService } from './calzone.service';
import { CalzoneController } from './calzone.controller';

@Module({
  controllers: [CalzoneController],
  providers: [CalzoneService],
})
export class CalzoneModule {}
