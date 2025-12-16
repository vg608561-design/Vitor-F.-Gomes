
import React from 'react';
import { CurrencyDollarIcon, UsersIcon, WrenchScrewdriverIcon, CalendarIcon } from './icons/Icons';

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <div className={`p-4 rounded-full ${color}`}>
            {icon}
        </div>
        <div className="ml-4">
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

export const Dashboard: React.FC = () => {
    const stats = [
        { title: "Faturamento do Mês", value: "R$ 12.450,00", icon: <CurrencyDollarIcon />, color: "bg-green-100 text-green-600" },
        { title: "Clientes Ativos", value: "89", icon: <UsersIcon />, color: "bg-blue-100 text-blue-600" },
        { title: "Serviços Concluídos", value: "42", icon: <WrenchScrewdriverIcon />, color: "bg-yellow-100 text-yellow-600" },
        { title: "Agendamentos Hoje", value: "5", icon: <CalendarIcon />, color: "bg-indigo-100 text-indigo-600" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Fluxo de Caixa Recente</h2>
                    {/* Placeholder for a chart */}
                    <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                        <p className="text-gray-500">Gráfico de Fluxo de Caixa</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Serviços Mais Procurados</h2>
                    <ul>
                        <li className="flex justify-between items-center py-2 border-b">
                            <span>Manutenção Preventiva</span>
                            <span className="font-bold text-blue-600">18</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b">
                            <span>Instalação de Sistema</span>
                            <span className="font-bold text-blue-600">12</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b">
                            <span>Reparo Urgente</span>
                            <span className="font-bold text-blue-600">7</span>
                        </li>
                         <li className="flex justify-between items-center py-2">
                            <span>Consultoria</span>
                            <span className="font-bold text-blue-600">5</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
