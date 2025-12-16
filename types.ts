
export interface Client {
    id: number;
    name: string;
    type: 'PF' | 'PJ';
    document: string; // CPF or CNPJ
    phone: string;
    email: string;
}

export interface Product {
    id: number;
    name: string;
    stock: number;
    minStock: number;
    costPrice: number;
    sellPrice: number;
}

export interface Service {
    id: number;
    name: string;
    cost: number;
    price: number;
}

export interface Appointment {
    id: number;
    clientId: number;
    technicianId: number;
    serviceId: number;
    date: string;
    time: string;
    status: 'Agendado' | 'Em execução' | 'Concluído' | 'Cancelado';
}

export interface Order {
    id: number;
    clientId: number;
    items: (Product | Service)[];
    total: number;
    createdAt: string;
}

export enum DocumentType {
    Proposal = 'Proposta Comercial',
    Quote = 'Orçamento',
    Order = 'Pedido',
    ServiceOrder = 'Ordem de Serviço',
    Invoice = 'Fatura',
    Receipt = 'Recibo'
}
