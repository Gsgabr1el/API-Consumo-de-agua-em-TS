import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConsumoAguaDocument = ConsumoAgua & Document;

@Schema()
export class ConsumoAgua {
    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    quantidade: number;

    @Prop({ required: true })
    dataLeitura: Date;
}

export const ConsumoAguaSchema = SchemaFactory.createForClass(ConsumoAgua);
