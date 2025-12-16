
import React from 'react';
import { Service } from '../types';

const mockServices: Service[] = [
    { id: 1, name: 'Manutenção Preventiva PC', cost: 50.00, price: 150.00 },
    { id: 2, name: 'Formatação e Instalação de SO', cost: 30.00, price: 120.00 },
    { id: 3, name: 'Remoção de Vírus', cost: 40.00, price: 100.00 },
    { id: 4, name: 'Diagnóstico Completo', cost: 25.00, price: 80.00 },
    { id: 5, name: 'Pacote Segurança (Antivírus + Otimização)', cost: 70.00, price: 200.00 },
];

export const ServiceManagement: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Gerenciamento de Serviços</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    Adicionar Serviço
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Serviço</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Custo Operacional</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Preço de Venda</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Margem de Lucro</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockServices.map(service => {
                            const margin = ((service.price - service.cost) / service.price) * 100;
                            return (
                                <tr key={service.id} className="hover:bg-gray-50">
                                    <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{service.name}</p>
                                    </td>
                                    <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">R$ {service.cost.toFixed(2)}</p>
                                    </td>
                                    <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap font-semibold">R$ {service.price.toFixed(2)}</p>
                                    </td>
                                    <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <p className={`whitespace-no-wrap font-bold ${margin >= 50 ? 'text-green-600' : 'text-yellow-600'}`}>{margin.toFixed(2)}%</p>
                                    </td>
                                    <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                                        <button className="text-red-600 hover:text-red-900">Excluir</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
