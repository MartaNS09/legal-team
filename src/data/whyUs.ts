export interface WhyUsItem {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export const whyUsItems: WhyUsItem[] = [
  {
    title: '15 лет судебной практики',
    description:
      'С 2010 года ведём дела в судах всех инстанций — от мировых до Верховного. Накопленная практика позволяет прогнозировать исход и выбирать оптимальную стратегию.',
    stat: '15+',
    statLabel: 'лет на рынке',
    image: '/images/team/korporativnoe.jpg',
    imageAlt: 'Корпоративное право — команда Legal Team',
    imagePosition: '50% 15%',
  },
  {
    title: '98% успешных дел',
    description:
      'Более 1000 выигранных споров в арбитраже, судах общей юрисдикции и при досудебном урегулировании. Работаем на результат, а не на процесс.',
    stat: '98%',
    statLabel: 'положительных исходов',
    image: '/images/team/arbitrazh.jpg',
    imageAlt: 'Арбитражные споры — юристы Legal Team',
    imagePosition: '50% 12%',
  },
  {
    title: '22 направления права',
    description:
      'Семейное, налоговое, уголовное, банкротство, недвижимость и другие отрасли — узкие специалисты под каждую задачу, без «универсальных» шаблонов.',
    stat: '22',
    statLabel: 'направления',
    image: '/images/team/nalogovoe.jpg',
    imageAlt: 'Налоговое право — эксперты Legal Team',
    imagePosition: '50% 10%',
  },
  {
    title: 'Круглосуточная поддержка',
    description:
      'Горячая линия работает 24/7. Первичная консультация бесплатна, ответ юриста — в среднем за 15 минут в рабочее время.',
    stat: '24/7',
    statLabel: 'на связи',
    image: '/images/team/semeynoe-pravo.jpg',
    imageAlt: 'Семейное право — консультация юриста',
    imagePosition: '50% 18%',
  },
];

export interface PrincipleItem {
  icon: string;
  title: string;
  description: string;
}

export const aboutPrinciples: PrincipleItem[] = [
  {
    icon: '🎯',
    title: 'Результат превыше всего',
    description:
      'Мы не раздаём пустых обещаний, а выстраиваем стратегию под конкретную цель: взыскание, защита, оформление или досудебное урегулирование.',
  },
  {
    icon: '🔒',
    title: 'Конфиденциальность',
    description:
      'Адвокатская тайна и защита персональных данных — базовый стандарт. Информация клиента не передаётся третьим лицам без согласия.',
  },
  {
    icon: '🔍',
    title: 'Внимание к деталям',
    description:
      'Изучаем документы, судебную практику и обстоятельства дела до мелочей — именно детали часто определяют исход спора.',
  },
];

export const aboutAdvantagesItems: WhyUsItem[] = [
  {
    title: 'Высокий уровень профессионализма',
    description:
      'Эксперты с многолетним стажем, знанием судебной практики и опытом представительства в судах всех инстанций.',
    stat: '15+',
    statLabel: 'лет практики',
    image: '/images/team/bankrotstvo.jpg',
    imageAlt: 'Профессиональные юристы Legal Team',
    imagePosition: '50% 12%',
  },
  {
    title: 'Индивидуальный подход',
    description:
      'Анализируем каждое дело отдельно и разрабатываем стратегию, которая учитывает ваши цели, сроки и риски.',
    stat: '1:1',
    statLabel: 'с клиентом',
    image: '/images/team/nedvizhimost.jpg',
    imageAlt: 'Индивидуальная консультация юриста',
    imagePosition: '50% 15%',
  },
  {
    title: 'Широкий спектр услуг',
    description:
      'Поддержка по 22 направлениям права — от семейного и налогового до корпоративного и уголовного.',
    stat: '22',
    statLabel: 'направления',
    image: '/images/team/korporativnoe.jpg',
    imageAlt: 'Юридические услуги Legal Team',
    imagePosition: '50% 10%',
  },
  {
    title: 'Понятный язык',
    description:
      'Объясняем сложные правовые нормы доступным языком — вы понимаете каждый шаг и принимаете решения осознанно.',
    stat: '100%',
    statLabel: 'прозрачность',
    image: '/images/team/arbitrazh.jpg',
    imageAlt: 'Юридическая консультация понятным языком',
    imagePosition: '50% 14%',
  },
];
