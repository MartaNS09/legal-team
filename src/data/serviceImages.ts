/** Уникальные фото для каждой карточки услуги */
const SERVICE_IMAGES: Record<string, string> = {
  'zhilishchnoe-pravo': '/images/services/zhilishchnoe-pravo.jpg',
  nedvizhimost: '/images/services/nedvizhimost.jpg',
  'administrativnoe-pravo': '/images/services/administrativnoe-pravo.jpg',
  'ugolovnoe-pravo': '/images/services/ugolovnoe-pravo.jpg',
  bankrotstvo: '/images/services/bankrotstvo.jpg',
  'pomoshch-dolshchikam': '/images/services/pomoshch-dolshchikam.jpg',
  'semeynoe-pravo': '/images/services/semeynoe-pravo.jpg',
  'uslugi-avtoyurista': '/images/services/uslugi-avtoyurista.jpg',
  'zemelnoe-pravo': '/images/services/zemelnoe-pravo.jpg',
  'trudovoe-pravo': '/images/services/trudovoe-pravo.jpg',
  'strahovoe-pravo': '/images/services/strahovoe-pravo.jpg',
  'kreditnoe-pravo': '/images/services/kreditnoe-pravo.jpg',
  'dolgovye-spory': '/images/services/dolgovye-spory.jpg',
  'pensionnoe-pravo': '/images/services/pensionnoe-pravo.jpg',
  'nalogovyi-advokat': '/images/services/nalogovyi-advokat.jpg',
  'migratsionnoe-pravo': '/images/services/migratsionnoe-pravo.jpg',
  'zashchita-prav-potrebiteley': '/images/services/zashchita-prav-potrebiteley.jpg',
  'meditsinskoe-pravo': '/images/services/meditsinskoe-pravo.jpg',
  'nasledstvennye-spory': '/images/services/nasledstvennye-spory.jpg',
  'voennyy-yurist': '/images/services/voennyy-yurist.jpg',
  'vzyskanie-zadolzhennostey': '/images/services/vzyskanie-zadolzhennostey.jpg',
};

const DEFAULT_IMAGE = '/images/services/default.jpg';

export function getServiceCardImage(slug: string): string {
  return SERVICE_IMAGES[slug] ?? DEFAULT_IMAGE;
}
