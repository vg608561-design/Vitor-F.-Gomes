
import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ClientManagement } from './components/ClientManagement';
import { InventoryManagement } from './components/InventoryManagement';
import { ServiceManagement } from './components/ServiceManagement';
import { Agenda } from './components/Agenda';
import { FinanceDashboard } from './components/FinanceDashboard';
import { BusinessAdvisor } from './components/BusinessAdvisor';
import { WhatsappAutomation } from './components/WhatsappAutomation';
import { DocumentGenerator } from './components/DocumentGenerator';
import { SettingsModal } from './components/SettingsModal';

import { 
    HomeIcon, UsersIcon, CubeIcon, WrenchScrewdriverIcon, CalendarIcon, 
    CurrencyDollarIcon, LightBulbIcon, ChatBubbleLeftRightIcon, DocumentTextIcon, Cog6ToothIcon 
} from './components/icons/Icons';

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [logo, setLogo] = useState<string | null>(null);

    const navLinkClasses = useCallback(({ isActive }: { isActive: boolean }) =>
        `flex items-center p-3 my-1 rounded-lg transition-colors ${
            isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-200 hover:bg-blue-800 hover:text-white'
        }`,
        []
    );

    const menuItems = [
        { path: "/", label: "Dashboard", icon: <HomeIcon /> },
        { path: "/clients", label: "Clientes", icon: <UsersIcon /> },
        { path: "/inventory", label: "Estoque", icon: <CubeIcon /> },
        { path: "/services", label: "Serviços", icon: <WrenchScrewdriverIcon /> },
        { path: "/agenda", label: "Agenda", icon: <CalendarIcon /> },
        { path: "/finance", label: "Financeiro", icon: <CurrencyDollarIcon /> },
        { path: "/documents", label: "Documentos", icon: <DocumentTextIcon /> },
        { path: "/advisor", label: "Consultor AI", icon: <LightBulbIcon /> },
        { path: "/whatsapp", label: "WhatsApp", icon: <ChatBubbleLeftRightIcon /> },
    ];
    
    return (
        <HashRouter>
            <div className="flex h-screen bg-gray-200 font-sans">
                <aside className={`no-print bg-blue-900 text-white flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                    <div className="flex items-center justify-center h-20 border-b border-blue-800">
                        <h1 className={`text-2xl font-bold transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>GestorPro</h1>
                        <span className={`text-3xl font-bold transition-opacity ${!isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>GP</span>
                    </div>
                    <nav className="flex-1 px-4 py-4">
                        {menuItems.map(item => (
                            <NavLink key={item.path} to={item.path} className={navLinkClasses} title={item.label}>
                                <div className="w-8 h-8 flex items-center justify-center">{item.icon}</div>
                                <span className={`ml-3 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                     <div className="px-4 py-4 border-t border-blue-800">
                         <button onClick={() => setIsSettingsOpen(true)} className="flex items-center p-3 my-1 rounded-lg transition-colors w-full text-gray-200 hover:bg-blue-800 hover:text-white" title="Configurações">
                             <div className="w-8 h-8 flex items-center justify-center"><Cog6ToothIcon /></div>
                             <span className={`ml-3 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>Configurações</span>
                         </button>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="no-print bg-white shadow-md p-4 flex justify-between items-center">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <div className="text-gray-800 text-xl font-semibold">
                            Bem-vindo!
                        </div>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/clients" element={<ClientManagement />} />
                            <Route path="/inventory" element={<InventoryManagement />} />
                            <Route path="/services" element={<ServiceManagement />} />
                            <Route path="/agenda" element={<Agenda />} />
                            <Route path="/finance" element={<FinanceDashboard />} />
                            <Route path="/documents" element={<DocumentGenerator logo={logo} />} />
                            <Route path="/advisor" element={<BusinessAdvisor />} />
                            <Route path="/whatsapp" element={<WhatsappAutomation />} />
                        </Routes>
                    </main>
                </div>
            </div>
            {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} setLogo={setLogo} currentLogo={logo} />}
        </HashRouter>
    );
};

export default App;
