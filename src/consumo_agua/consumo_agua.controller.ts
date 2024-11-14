import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';
import { CreateConsumoAguaDto } from './dto/create-consumo-agua.dto';

@Controller('consumo-agua')
export class ConsumoAguaController {
    constructor(private readonly consumoAguaService: ConsumoAguaService) { }

    @Post()
    criaRegistro(@Body() createConsumoAguaDto: CreateConsumoAguaDto) {
        return this.consumoAguaService.criaRegistro(createConsumoAguaDto);
    }
  


    @Get()
    consultaRegistro(@Query('userId') userId: string, @Query('dataInicial') dataInicial: Date, @Query('dataFinal') dataFinal: Date) {
        return this.consumoAguaService.consultaRegistro(userId, dataInicial, dataFinal);
    }




    @Get('alerta/:userId')
    alertaConsumoElevado(@Param('userId') userId: string) {
        return this.consumoAguaService.alertaConsumoElevado(userId);
    }
}
