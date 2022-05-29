import { Component, OnInit } from '@angular/core';
export interface Category {
  title: string;
  items: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  categories: Category[] = [
    {
      title: 'Agendamentos',
      items: [
        {
          name: 'Agendados',
          description: 'Consultas ou exames agendados',
          icon: 'calendar_month',
        },
        {
          name: 'Realizar agendamento',
          description: 'Criar um novo agendamento de exame ou consulta',
          icon: 'edit_calendar',
        },
      ],
    },
    {
      title: 'Pagamentos',
      items: [
        {
          name: 'Formas de pagamento',
          description: 'Meios de pagamento(convênio, particular ou outros)',
          icon: 'payments',
        },
      ],
    },
    {
      title: 'Meu Perfil',
      items: [
        {
          name: 'Meus dados',
          description: 'Gerenciar meus dados principais',
          icon: 'manage_accounts',
        },
        {
          name: 'Convênio',
          description: 'Selecionar meu plano de saúde',
          icon: 'health_and_safety',
        },
        {
          name: 'Endereço de busca',
          description: 'Alterar meu endereço para ajudar nas buscas',
          icon: 'map',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
