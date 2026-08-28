export interface PricingRow {
  service: string;
  consultation: string;
  representation: string;
  note?: string;
}

export const pricingRows: PricingRow[] = [
  {
    service: 'Семейное право',
    consultation: 'Бесплатно',
    representation: 'от 50 000 ₽',
    note: 'Развод, алименты, раздел имущества',
  },
  {
    service: 'Налоговое право',
    consultation: 'Бесплатно',
    representation: 'от 80 000 ₽',
    note: 'Проверки ФНС, доначисления, обжалование',
  },
  {
    service: 'Арбитражные споры',
    consultation: 'Бесплатно',
    representation: 'от 120 000 ₽',
    note: 'Взыскание задолженности, договорные споры',
  },
  {
    service: 'Банкротство физлиц',
    consultation: 'Бесплатно',
    representation: 'от 150 000 ₽',
    note: 'Полное сопровождение по 127-ФЗ',
  },
  {
    service: 'Недвижимость',
    consultation: 'Бесплатно',
    representation: 'от 45 000 ₽',
    note: 'Сделки, споры с застройщиками, регистрация',
  },
  {
    service: 'Трудовые споры',
    consultation: 'Бесплатно',
    representation: 'от 35 000 ₽',
    note: 'Увольнение, восстановление, взыскание зарплаты',
  },
  {
    service: 'Уголовное право',
    consultation: 'Бесплатно',
    representation: 'от 100 000 ₽',
    note: 'Защита на следствии и в суде',
  },
  {
    service: 'Защита прав потребителей',
    consultation: 'Бесплатно',
    representation: 'от 25 000 ₽',
    note: 'Возврат товара, некачественные услуги',
  },
  {
    service: 'Корпоративное право',
    consultation: 'Бесплатно',
    representation: 'от 90 000 ₽',
    note: 'Регистрация, договоры, корпоративные конфликты',
  },
  {
    service: 'Миграционное право',
    consultation: 'Бесплатно',
    representation: 'от 40 000 ₽',
    note: 'ВНЖ, РВП, гражданство, депортация',
  },
  {
    service: 'Автоюрист / ДТП',
    consultation: 'Бесплатно',
    representation: 'от 30 000 ₽',
    note: 'ОСАГО, КАСКО, лишение прав',
  },
  {
    service: 'Наследственное право',
    consultation: 'Бесплатно',
    representation: 'от 55 000 ₽',
    note: 'Оспаривание завещания, вступление в наследство',
  },
];
