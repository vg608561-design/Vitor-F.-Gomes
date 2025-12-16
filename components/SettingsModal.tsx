
import React, { useRef } from 'react';

interface SettingsModalProps {
    onClose: () => void;
    setLogo: (logo: string | null) => void;
    currentLogo: string | null;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, setLogo, currentLogo }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 no-print">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Configurações</h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Logo da Empresa</h3>
                    <p className="text-sm text-gray-500 mb-4">Esta logo aparecerá em todos os documentos impressos (orçamentos, recibos, etc.).</p>
                    <div className="flex items-center space-x-4">
                        <div className="w-24 h-24 border rounded-md flex items-center justify-center bg-gray-100">
                            {currentLogo ? (
                                <img src={currentLogo} alt="Logo Atual" className="max-w-full max-h-full object-contain"/>
                            ) : (
                                <span className="text-xs text-gray-400 text-center">Sem Logo</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleLogoUpload}
                                className="hidden"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Carregar Logo
                            </button>
                             {currentLogo && (
                                <button
                                    onClick={() => setLogo(null)}
                                    className="ml-2 text-sm text-red-500 hover:text-red-700"
                                >
                                    Remover
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="border-t pt-4 text-right">
                    <button onClick={onClose} className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};
