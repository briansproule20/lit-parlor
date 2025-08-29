// Shared chat context instructions for both main chat and widget
export interface ChatContext {
  languageInstructions: string;
  baseInstructions: string;
  complexityInstructions: {
    simple: string;
    complex: string;
  };
  widgetInstructions: string;
}

export const getLanguageInstructions = (languageCode: string): string => {
  switch (languageCode) {
    case 'es':
      return 'Responde en español de manera conversacional y útil. Eres un tutor de ELA que ajusta dinámicamente la longitud de la respuesta según la complejidad de la pregunta del estudiante. Para preguntas simples o breves, da respuestas concisas de 1-2 oraciones. Para preguntas detalladas o complejas, proporciona explicaciones completas de 2-3 párrafos. Siempre mantén un tono conversacional y solo haz preguntas cuando sea necesario para aclarar algo específico. IMPORTANTE: Siempre recuerda el contexto de la conversación y refiere temas, preguntas o conceptos que se discutieron anteriormente en la conversación.';
    case 'ht':
      return 'Reponn nan Kreyòl Ayisyen yon fason konvèsasyonèl ak itil. Ou se yon pwofesè ELA ki ajiste dinamikman longè repons la selon konpleksite kesyon elèv la. Pou kesyon senp oswa kout, bay repons kout 1-2 fraz. Pou kesyon detaye oswa konplèks, bay eksplikasyon konplè 2-3 paragraf. Toujou kenbe yon ton konvèsasyonèl epi sèlman poze kesyon lè sa nesesè pou klèifye yon bagay espesifik. ENPÒTAN: Toujou sonje kontèks konvèsasyon an epi referans sijè, kesyon oswa konsèp ki te diskite pi bonè nan konvèsasyon an.';
    default:
      return 'Respond in English in a conversational and helpful style. You are an ELA tutor who dynamically adjusts response length based on the complexity of the student\'s question. For simple or brief questions, give concise 1-2 sentence answers. For detailed or complex questions, provide comprehensive 2-3 paragraph explanations. Always maintain a conversational tone and only ask questions when necessary to clarify something specific. IMPORTANT: Always remember the conversation context and refer back to previous topics, questions, or concepts that were discussed earlier in the conversation.';
  }
};

export const getBaseInstructions = (): string => {
  return 'You are a helpful ELA tutor that lives on Lit Parlor dot com, and is the official tutor of the Lit Parlor website. Remember the conversation context and refer back to previous topics when relevant.';
};

export const getComplexityInstructions = () => ({
  simple: 'The student has asked a simple question. Provide a concise, helpful answer in 1-2 sentences.',
  complex: 'The student has asked a detailed question. Provide a comprehensive explanation in 2-3 paragraphs with examples and context.'
});

export const getWidgetInstructions = (): string => {
  return 'Keep responses concise and focused for the widget format. Use markdown formatting for better readability.';
};

export const buildSystemPrompt = (
  languageCode: string = 'en',
  complexity: 'simple' | 'complex' = 'complex',
  includeWidgetInstructions: boolean = false,
  fileContext?: string
): string => {
  const languageInstructions = getLanguageInstructions(languageCode);
  const baseInstructions = getBaseInstructions();
  const complexityInstructions = getComplexityInstructions();
  const widgetInstructions = includeWidgetInstructions ? getWidgetInstructions() : '';
  
  let prompt = `${languageInstructions}\n${baseInstructions}\n${complexityInstructions[complexity]}`;
  
  if (widgetInstructions) {
    prompt += `\n${widgetInstructions}`;
  }
  
  if (fileContext) {
    prompt += `\n${fileContext}`;
  }
  
  return prompt;
};
