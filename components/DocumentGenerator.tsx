
import React, { useState, useRef } from 'react';
import { DocumentType } from '../types';

interface DocumentGeneratorProps {
    logo: string | null;
}

export const DocumentGenerator: React.FC<DocumentGeneratorProps> = ({ logo }) => {
    const [selectedDoc, setSelectedDoc] = useState<DocumentType>(DocumentType.Quote);
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };
    
    const DocumentContent: React.FC = () => {
        return (
            <>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedDoc}</h2>
                    <p className="text-gray-500">Número: #2024-00{Math.floor(Math.random() * 100) + 1}</p>
                    <p className="text-gray-500">Data: {new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold text-gray-600 mb-2">Cliente</h3>
                        <p className="text-gray-800 font-bold">Empresa XYZ Ltda</p>
                        <p className="text-gray-600">Rua das Flores, 123</p>
                        <p className="text-gray-600">São Paulo, SP - 01234-567</p>
                        <p className="text-gray-600">CNPJ: 12.345.678/0001-99</p>
                    </div>
                    <div className="text-right">
                        <h3 className="font-semibold text-gray-600 mb-2">Sua Empresa</h3>
                        <p className="text-gray-800 font-bold">Assistência Técnica Pro</p>
                        <p className="text-gray-600">Av. Principal, 456</p>
                        <p className="text-gray-600">São Paulo, SP - 98765-432</p>
                        <p className="text-gray-600">(11) 5555-4444</p>
                    </div>
                </div>
                <div>
                    <table className="w-full mb-8">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="text-left p-2 font-semibold">Item</th>
                                <th className="text-right p-2 font-semibold">Qtd.</th>
                                <th className="text-right p-2 font-semibold">Preço Unit.</th>
                                <th className="text-right p-2 font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-2">Serviço de Manutenção Preventiva</td>
                                <td className="text-right p-2">1</td>
                                <td className="text-right p-2">R$ 150,00</td>
                                <td className="text-right p-2">R$ 150,00</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2">Peça: SSD 512GB</td>
                                <td className="text-right p-2">1</td>
                                <td className="text-right p-2">R$ 420,00</td>
                                <td className="text-right p-2">R$ 420,00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-right">
                        <p className="text-gray-600">Subtotal: R$ 570,00</p>
                        <p className="text-gray-600">Desconto: R$ 0,00</p>
                        <p className="text-xl font-bold text-gray-800 mt-2">Total: R$ 570,00</p>
                    </div>
                </div>
                 <div className="mt-12 text-center text-sm text-gray-500">
                    <p>Validade da proposta: 15 dias.</p>
                    <p>Agradecemos a preferência!</p>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6 no-print">
                <h1 className="text-3xl font-bold text-gray-800">Gerador de Documentos</h1>
                <div className="flex items-center space-x-4">
                    <select
                        value={selectedDoc}
                        onChange={(e) => setSelectedDoc(e.target.value as DocumentType)}
                        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {Object.values(DocumentType).map(doc => <option key={doc} value={doc}>{doc}</option>)}
                    </select>
                    <button onClick={handlePrint} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                        Imprimir / Salvar PDF
                    </button>
                </div>
            </div>

            <div ref={printRef} className="bg-white shadow-lg rounded-lg p-10 print-area">
                <header className="flex justify-between items-start pb-6 border-b-2 border-gray-200 mb-8">
                    {logo ? (
                        <img src={logo} alt="Logo da Empresa" className="max-h-24 max-w-xs object-contain"/>
                    ) : (
                        <div className="h-24 w-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                           Sua Logo Aqui
                        </div>
                    )}
                    <div className="text-right">
                        <h1 className="text-4xl font-bold text-blue-700">{selectedDoc}</h1>
                    </div>
                </header>
                <DocumentContent />
            </div>
        </div>
    );
};
