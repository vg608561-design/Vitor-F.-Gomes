
import React from 'react';

export const FinanceDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Financeiro Inteligente</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-600">Contas a Receber</h3>
                    <p className="text-2xl font-bold text-green-600">R$ 4.800,00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-600">Contas a Pagar</h3>
                    <p className="text-2xl font-bold text-red-600">R$ 1.250,00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-600">Lucro Líquido (Mês)</h3>
                    <p className="text-2xl font-bold text-blue-600">R$ 7.200,00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-600">Pró-labore Sugerido</h3>
                    <p className="text-2xl font-bold text-purple-600">R$ 3.500,00</p>
                </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Análise Financeira Automática</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-semibold text-green-800">Ponto de Equilíbrio Atingido</p>
                        <p className="text-sm text-green-700">Seu faturamento de R$ 12.450,00 superou o ponto de equilíbrio de R$ 6.800,00. Parabéns!</p>
                    </div>
                     <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="font-semibold text-blue-800">Margem de Lucro Real</p>
                        <p className="text-sm text-blue-700">Sua margem de lucro real neste mês é de <span className="font-bold">57.83%</span>, o que é um excelente resultado.</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                 <h2 className="text-xl font-bold text-gray-700 mb-4">Fluxo de Caixa</h2>
                  <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-600">Data</th>
                                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-600">Descrição</th>
                                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-600">Valor</th>
                                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-600">Tipo</th>
                            </tr>
                        </thead>
                         <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-3">28/07/2024</td>
                                <td className="py-2 px-3">Recebimento OS #1023</td>
                                <td className="py-2 px-3 text-green-600 font-medium">+ R$ 450,00</td>
                                <td className="py-2 px-3">Entrada</td>
                            </tr>
                             <tr className="border-b">
                                <td className="py-2 px-3">28/07/2024</td>
                                <td className="py-2 px-3">Pagamento Fornecedor Peças</td>
                                <td className="py-2 px-3 text-red-600 font-medium">- R$ 320,00</td>
                                <td className="py-2 px-3">Saída</td>
                            </tr>
                             <tr className="border-b">
                                <td className="py-2 px-3">27/07/2024</td>
                                <td className="py-2 px-3">Recebimento Serviço XYZ</td>
                                <td className="py-2 px-3 text-green-600 font-medium">+ R$ 1.200,00</td>
                                <td className="py-2 px-3">Entrada</td>
                            </tr>
                        </tbody>
                      </table>
                  </div>
            </div>
        </div>
    );
};
