import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleService {
    getVehicleData() {
        return { message: 'Vehicle Service Running' };
    }
}