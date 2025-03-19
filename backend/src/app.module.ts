import { Module } from '@nestjs/common';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
    imports: [VehicleModule],
})
export class AppModule {}