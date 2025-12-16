
import React from 'react';
import { Client } from '../types';

const mockClients: Client[] = [
    { id: 1, name: 'João da Silva', type: 'PF', document: '123.456.789-00', phone: '(11) 98765-4321', email: 'joao.silva@email.com' },
    { id: 2, name: 'Empresa XYZ Ltda', type: 'PJ', document: '12.345.678/0001-99', phone: '(21) 1234-5678', email: 'contato@xyz.com' },
    { id: 3, name: 'Maria Oliveira', type: 'PF', document: '987.654.321-00', phone: '(31) 99999-8888', email: 'maria.o@email.com' },
    { id: 4, name: 'Cliente Genérico', type: 'PF', document: '000.000.000-00', phone: '(00) 00000-0000', email: 'generico@cliente.com' },
];

export const ClientManagement: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Gerenciamento de Clientes</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    Adicionar Cliente
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nome</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tipo</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Documento</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contato</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockClients.map(client => (
                            <tr key={client.id} className="hover:bg-gray-50">
                                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{client.name}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${client.type === 'PF' ? 'text-green-900 bg-green-200' : 'text-purple-900 bg-purple-200'} rounded-full`}>
                                        {client.type}
                                    </span>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{client.document}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{client.phone}</p>
                                    <p className="text-gray-600 whitespace-no-wrap text-xs">{client.email}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
