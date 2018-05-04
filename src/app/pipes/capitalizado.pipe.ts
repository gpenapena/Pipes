import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class capitalizadoPipe implements PipeTransform {
    transform(value: string, args: any[]):string {

        value = value.toLocaleLowerCase();
        let nombres = value.split(' ');
        for(let i in nombres){
            nombres[i] = nombres[i][0].toLocaleUpperCase()+nombres[i].substring(1);
        }

        return nombres.join(' ');
    }
}