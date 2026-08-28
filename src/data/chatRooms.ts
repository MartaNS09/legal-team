export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
}

export interface ChatRoom {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  lawyerName: string;
  lawyerRole: string;
  welcomeMessage: string;
  topics: string[];
}

export const chatRooms: ChatRoom[] = [
  {
    id: 'general',
    title: 'Общая консультация',
    subtitle: 'Любой юридический вопрос',
    icon: '⚖️',
    lawyerName: 'Алексей Морозов',
    lawyerRole: 'Дежурный юрист',
    welcomeMessage:
      'Здравствуйте! Я дежурный юрист Legal Team. Опишите вашу ситуацию — помогу определить направление права и следующие шаги. Консультация бесплатна.',
    topics: ['Общие вопросы', 'Куда обратиться', 'Сроки', 'Документы'],
  },
  {
    id: 'family',
    title: 'Семейное право',
    subtitle: 'Развод, алименты, имущество',
    icon: '👨‍👩‍👧',
    lawyerName: 'Екатерина Волкова',
    lawyerRole: 'Семейный юрист',
    welcomeMessage:
      'Добрый день! Я специализируюсь на семейных делах: развод, раздел имущества, алименты, опека. Расскажите, что произошло — информация конфиденциальна.',
    topics: ['Развод', 'Алименты', 'Раздел имущества', 'Дети'],
  },
  {
    id: 'tax',
    title: 'Налоговое право',
    subtitle: 'Проверки, доначисления, споры с ФНС',
    icon: '📊',
    lawyerName: 'Игорь Семёнов',
    lawyerRole: 'Налоговый адвокат',
    welcomeMessage:
      'Здравствуйте! Консультирую по налоговым проверкам, доначислениям и обжалованию решений ФНС. Опишите суть вопроса и сумму спора, если известна.',
    topics: ['Проверка ФНС', 'Доначисления', 'Обжалование', 'ИП и ООО'],
  },
  {
    id: 'business',
    title: 'Арбитраж и бизнес',
    subtitle: 'Споры с контрагентами, взыскание',
    icon: '🏢',
    lawyerName: 'Дмитрий Козлов',
    lawyerRole: 'Арбитражный юрист',
    welcomeMessage:
      'Добрый день! Помогаю компаниям и ИП в арбитражных спорах, взыскании задолженности и договорных конфликтах. Опишите ситуацию с контрагентом.',
    topics: ['Задолжность', 'Договор', 'Арбитраж', 'Претензия'],
  },
];

export function getChatRoom(id: string): ChatRoom | undefined {
  return chatRooms.find((room) => room.id === id);
}
