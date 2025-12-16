
import React, { useState, useCallback } from 'react';
import { getBusinessAdvice } from '../services/geminiService';
import { LightBulbIcon } from './icons/Icons';

export const BusinessAdvisor: React.FC = () => {
    const [advice, setAdvice] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGetAdvice = useCallback(async () => {
        setIsLoading(true);
        // In a real app, this data would be dynamically generated from your state/DB.
        const financialData = `
          - Faturamento Bruto (Mês): R$ 12.450,00
          - Custos Fixos (Mês): R$ 2.800,00 (Aluguel, Salários, Internet)
          - Custos Variáveis (Mês): R$ 2.450,00 (Peças, Impostos sobre vendas)
          - Lucro Bruto: R$ 10.000,00
          - Lucro Líquido: R$ 7.200,00
          - Número de Clientes Ativos: 89
          - Número de Serviços Prestados (Mês): 42
          - Serviço Mais Rentável: "Instalação de Sistemas" (Margem de 70%)
          - Serviço Menos Rentável: "Reparo Urgente" (Margem de 35%)
          - Produto com Maior Giro: "SSD 512GB"
        `;
        const result = await getBusinessAdvice(financialData);
        setAdvice(result);
        setIsLoading(false);
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Consultor de Negócios (IA)</h1>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="text-center">
                    <LightBulbIcon />
                    <h2 className="text-xl font-semibold text-gray-700 mt-2">Receba Aconselhamento para Crescer</h2>
                    <p className="text-gray-500 mt-2 mb-4">
                        Nossa Inteligência Artificial analisará os dados do seu negócio e fornecerá insights valiosos para
                        ajudá-lo a tomar as melhores decisões, aumentar seu lucro e expandir sua operação.
                    </p>
                    <button
                        onClick={handleGetAdvice}
                        disabled={isLoading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Analisando dados...' : 'Gerar Análise e Conselhos'}
                    </button>
                </div>

                {isLoading && (
                    <div className="mt-6 p-6 border rounded-lg bg-gray-50 text-center">
                        <div className="animate-pulse">
                            <p className="text-gray-600">Aguarde, a IA está processando suas informações...</p>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mt-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mt-2"></div>
                        </div>
                    </div>
                )}

                {advice && !isLoading && (
                    <div className="mt-6 p-6 border rounded-lg bg-gray-50 prose max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-sm">{advice}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};
