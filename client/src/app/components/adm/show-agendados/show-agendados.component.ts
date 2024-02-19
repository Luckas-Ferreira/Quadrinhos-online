import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/environments/baseUrl';
import { Alugar } from 'src/app/interfaces/alugar';
import { RentQHService } from 'src/app/services/rent-qh.service';
import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-show-agendados',
  templateUrl: './show-agendados.component.html',
  styleUrls: ['./show-agendados.component.css']
})
export class ShowAgendadosComponent implements OnInit{
  baseUrl = Base.url;
  dataAlugado!: Alugar[];
  constructor(private alugado: RentQHService){}
  ngOnInit(): void {
    this.alugado.getAlugar().subscribe((response: Alugar) => {
      if(response.ok){
        this.dataAlugado = response.alugados;
      }
    })
  }

  
  formatDate(date: string): string {
    const result = formatDistanceToNow(new Date(date), { addSuffix: true, locale: ptBR });
    return result;
  }
}
