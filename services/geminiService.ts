
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this context, we assume the key is available.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getBusinessAdvice = async (financialData: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve(
      "**Modo de Demonstração:** A chave da API Gemini não está configurada. \n\n" +
      "Em um ambiente de produção, eu analisaria seus dados financeiros e forneceria os seguintes conselhos:\n\n" +
      "*   **Sugestão de Reajuste de Preços:** O 'Serviço de Manutenção Premium' tem uma margem de lucro de 75%, muito acima da média. Considere oferecer um desconto promocional para atrair mais clientes.\n" +
      "*   **Serviços Mais Lucrativos:** 'Instalação de Sistemas' e 'Consultoria Técnica' são seus serviços mais rentáveis. Foque suas campanhas de marketing nessas áreas.\n" +
      "*   **Alerta de Risco:** Seus custos fixos aumentaram 15% no último trimestre, mas a receita cresceu apenas 5%. É crucial revisar suas despesas ou aumentar as vendas para evitar prejuízos.\n" +
      "*   **Recomendação de Reinvestimento:** Com base no seu fluxo de caixa positivo, sugiro reinvestir R$ 2.500 em ferramentas mais modernas para o técnico principal, o que pode aumentar a eficiência em 20%."
    );
  }
  
  try {
    const prompt = `
      Você é um consultor de negócios experiente para pequenas e médias empresas. Analise os seguintes dados financeiros e operacionais de uma empresa de serviços e forneça conselhos acionáveis.

      Dados da Empresa:
      ${financialData}

      Seu relatório deve ser em português do Brasil e conter as seguintes seções, usando markdown para formatação:
      1.  **Alerta Rápido:** Destaque o ponto mais crítico (positivo ou negativo) que o dono do negócio precisa saber imediatamente.
      2.  **Sugestões de Otimização de Preços:** Analise as margens de lucro e sugira reajustes de preços para produtos ou serviços específicos.
      3.  **Serviços Mais Lucrativos:** Identifique os serviços que geram mais lucro e recomende estratégias para promovê-los.
      4.  **Recomendações de Reinvestimento:** Com base no lucro e fluxo de caixa, sugira áreas para reinvestimento (ex: marketing, equipamentos, treinamento).
      5.  **Caminhos para Crescimento:** Ofereça 2-3 estratégias claras para o crescimento do negócio a médio prazo.
    `;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    if (response.text) {
      return response.text;
    }
    return "Não foi possível obter uma resposta da IA.";

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return `Ocorreu um erro ao contatar o consultor de IA. Detalhes: ${error instanceof Error ? error.message : String(error)}`;
  }
};
