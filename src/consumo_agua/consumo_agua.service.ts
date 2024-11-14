import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoAgua, ConsumoAguaDocument } from './consumo_agua.model';
import { CreateConsumoAguaDto } from './dto/create-consumo-agua.dto';

@Injectable()
export class ConsumoAguaService {
    constructor(
        @InjectModel(ConsumoAgua.name) private consumoAguaModel: Model<ConsumoAguaDocument>,
    ) { }

    async criaRegistro(createConsumoAguaDto: CreateConsumoAguaDto): Promise<ConsumoAgua> {
        const createdConsumoAgua = new this.consumoAguaModel(createConsumoAguaDto);
        return createdConsumoAgua.save();
    }

    

    
    async consultaRegistro(userId: string, dataInicial: Date, dataFinal: Date): Promise<ConsumoAgua[]> {
        return this.consumoAguaModel.find({ userId, dataLeitura: { $gte: dataInicial, $lte: dataFinal } }).exec();
    }




    async alertaConsumoElevado(userId: string): Promise<{ alerta: boolean; mensagem: string }> {
        const registros = await this.consumoAguaModel.find({ userId }).sort({ dataLeitura: -1 }).limit(2).exec();
        if (registros.length < 2) {
            return { alerta: false, mensagem: 'Sem alerta de consumo' };
        }
        const alerta = registros[0].quantidade > registros[1].quantidade;
        return {
            alerta,
            mensagem: alerta ? 'Alerta de consumo elevado' : 'Sem alerta de consumo',
        };
    }
}
