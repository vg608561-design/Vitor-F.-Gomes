
import React from 'react';
import { Product } from '../types';

const mockProducts: Product[] = [
    { id: 1, name: 'Placa Mãe XYZ', stock: 15, minStock: 5, costPrice: 350.00, sellPrice: 599.90 },
    { id: 2, name: 'Memória RAM 8GB DDR4', stock: 3, minStock: 10, costPrice: 150.00, sellPrice: 249.90 },
    { id: 3, name: 'SSD 512GB NVMe', stock: 22, minStock: 10, costPrice: 250.00, sellPrice: 420.00 },
    { id: 4, name: 'Fonte 500W', stock: 8, minStock: 5, costPrice: 180.00, sellPrice: 299.00 },
];

export const InventoryManagement: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Estoque de Produtos e Peças</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    Adicionar Produto
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Produto</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Estoque Atual</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Estoque Mínimo</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Preço de Custo</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Preço de Venda</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockProducts.map(product => (
                            <tr key={product.id} className={`hover:bg-gray-50 ${product.stock < product.minStock ? 'bg-red-100' : ''}`}>
                                <td className="px-5 py-4 border-b border-gray-200 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{product.name}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 text-sm">
                                    <p className={`font-bold whitespace-no-wrap ${product.stock < product.minStock ? 'text-red-600' : 'text-gray-900'}`}>{product.stock}</p>
                                    {product.stock < product.minStock && <span className="text-xs text-red-600">Abaixo do mínimo!</span>}
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{product.minStock}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">R$ {product.costPrice.toFixed(2)}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold">R$ {product.sellPrice.toFixed(2)}</p>
                                </td>
                                <td className="px-5 py-4 border-b border-gray-200 text-sm">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Ajustar</button>
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
