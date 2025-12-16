
import React from 'react';
import { Appointment } from '../types';

const mockAppointments: Appointment[] = [
    { id: 1, clientId: 1, technicianId: 1, serviceId: 2, date: '2024-07-29', time: '09:00', status: 'Agendado' },
    { id: 2, clientId: 2, technicianId: 2, serviceId: 1, date: '2024-07-29', time: '10:00', status: 'Em execução' },
    { id: 3, clientId: 3, technicianId: 1, serviceId: 3, date: '2024-07-29', time: '14:00', status: 'Concluído' },
    { id: 4, clientId: 1, technicianId: 2, serviceId: 4, date: '2024-07-29', time: '16:00', status: 'Cancelado' },
];

const mockClients = { 1: 'João da Silva', 2: 'Empresa XYZ Ltda', 3: 'Maria Oliveira' };
const mockTechnicians = { 1: 'Carlos', 2: 'Ana' };
const mockServices = { 1: 'Manutenção', 2: 'Formatação', 3: 'Remoção de Vírus', 4: 'Diagnóstico'};

const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
        case 'Agendado': return 'bg-blue-200 text-blue-800';
        case 'Em execução': return 'bg-yellow-200 text-yellow-800';
        case 'Concluído': return 'bg-green-200 text-green-800';
        case 'Cancelado': return 'bg-red-200 text-red-800';
        default: return 'bg-gray-200 text-gray-800';
    }
};

export const Agenda: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Agenda de Serviços</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    Novo Agendamento
                </button>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <button className="px-3 py-1 bg-gray-200 rounded">&lt;</button>
                    <h2 className="text-xl font-semibold">Hoje, 29 de Julho de 2024</h2>
                    <button className="px-3 py-1 bg-gray-200 rounded">&gt;</button>
                </div>
                {mockAppointments.map(app => (
                    <div key={app.id} className="border-l-4 rounded-r-lg p-4 mb-3 shadow-sm bg-gray-50" style={{ borderLeftColor: getStatusColor(app.status).split(' ')[0].replace('bg-', '#').slice(0, 7) }}>
                        <div className="flex justify-between items-start">
                           <div>
                             <p className="font-bold text-lg text-gray-800">{app.time} - {mockServices[app.serviceId as keyof typeof mockServices]}</p>
                             <p className="text-sm text-gray-600">Cliente: {mockClients[app.clientId as keyof typeof mockClients]}</p>
                             <p className="text-sm text-gray-600">Técnico: {mockTechnicians[app.technicianId as keyof typeof mockTechnicians]}</p>
                           </div>
                           <div className="flex flex-col items-end">
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>{app.status}</span>
                               <div className="mt-2">
                                   <button className="text-xs text-indigo-600 hover:underline mr-2">Editar</button>
                                   <button className="text-xs text-red-600 hover:underline">Cancelar</button>
                               </div>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
