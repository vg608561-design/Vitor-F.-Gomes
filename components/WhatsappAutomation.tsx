
import React, { useState } from 'react';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export const WhatsappAutomation: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: 'Olá! Sou seu assistente virtual. Como posso ajudar? Digite "Orçamento" ou "Agendar Serviço".' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: 'user', text: input };
        let newMessages: Message[] = [...messages, userMessage];
        
        // Simulate bot response
        let botResponse = 'Desculpe, não entendi. Por favor, digite "Orçamento" ou "Agendar Serviço".';
        if (input.toLowerCase().includes('orçamento')) {
            botResponse = 'Ótimo! Para qual serviço ou produto você gostaria de um orçamento? (Um cliente genérico e um pedido de orçamento foram criados no sistema.)';
        } else if (input.toLowerCase().includes('agendar')) {
            botResponse = 'Perfeito! Para qual serviço? E qual a melhor data e horário para você? (Seu contato foi salvo e um pré-agendamento foi iniciado.)';
        }
        
        const botMessage: Message = { sender: 'bot', text: botResponse };
        newMessages.push(botMessage);

        setMessages(newMessages);
        setInput('');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Automação com WhatsApp Web</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Simulador de Atendimento</h2>
                    <div className="w-full h-[60vh] flex flex-col border rounded-lg">
                        <div className="bg-green-600 text-white p-3 rounded-t-lg">
                            <h3 className="font-bold">Assistente Virtual (Conectado)</h3>
                        </div>
                        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`p-3 rounded-lg max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'bg-green-200' : 'bg-white'}`}>
                                        <p className="text-sm text-gray-800">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t bg-gray-50 flex">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Digite sua mensagem..."
                                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700">Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Funcionalidades</h2>
                    <p className="text-gray-600 mb-4">Esta tela simula como a automação do WhatsApp funcionaria.</p>
                    <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li>Conexão com WhatsApp Web para respostas automáticas.</li>
                        <li>Criação de cliente genérico para novos contatos.</li>
                        <li>Registro automático de pedido de orçamento.</li>
                        <li>Coleta de informações para agendamento.</li>
                        <li>Envio de confirmações e lembretes de agendamento.</li>
                        <li>Histórico de conversas salvo no perfil do cliente.</li>
                    </ul>
                    <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                        <p className="font-bold">Aviso</p>
                        <p>A integração real requer uma API oficial do WhatsApp ou ferramentas de terceiros e não pode ser totalmente implementada aqui.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
