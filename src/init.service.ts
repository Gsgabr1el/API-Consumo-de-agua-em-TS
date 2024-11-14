import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoAgua, ConsumoAguaDocument } from './consumo_agua/consumo_agua.model';

@Injectable()
export class InitService {
    constructor(
        @InjectModel(ConsumoAgua.name) private consumoAguaModel: Model<ConsumoAguaDocument>,
    ) { }


    
    async clearDatabase() {
        await this.consumoAguaModel.deleteMany({}).exec();
    }
}
