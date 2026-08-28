import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Legal Team',
  description:
    'Политика обработки персональных данных и пользовательское соглашение юридической компании Legal Team.',
  alternates: {
    canonical: 'https://legal-team.pro/policies',
  },
};

export default function PoliciesPage() {
  return (
    <>
      <Marquee
        text="Legal Team — профессиональная защита ваших прав • +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <main id="main">
        <PageHero
          id="policies-hero-title"
          title="Политика конфиденциальности"
          subtitle="Информация об обработке персональных данных и условиях использования сайта"
          imageSrc="/images/hero/services.jpg"
          imageAlt="Юридические документы"
          breadcrumbs={[{ label: 'Политика конфиденциальности' }]}
          variant="compact"
        />

        <section className="policies">
          <div className="container policies__inner">
            <article className="policies__block">
              <h2>1. Общие положения</h2>
              <p>
                Настоящая политика определяет порядок обработки и защиты персональных данных
                пользователей сайта legal-team.pro. Отправляя заявку через формы на сайте, вы
                соглашаетесь на обработку указанных данных в целях обратной связи и оказания
                юридических услуг.
              </p>
            </article>

            <article className="policies__block">
              <h2>2. Какие данные мы собираем</h2>
              <ul>
                <li>Имя и контактный телефон</li>
                <li>Текст обращения или описание юридического вопроса</li>
                <li>Технические данные: IP-адрес, cookies, данные браузера</li>
              </ul>
            </article>

            <article className="policies__block">
              <h2>3. Цели обработки</h2>
              <p>
                Данные используются для связи с вами, подбора специалиста, оказания консультаций
                и улучшения качества сервиса. Мы не передаём данные третьим лицам без вашего
                согласия, за исключением случаев, предусмотренных законом.
              </p>
            </article>

            <article className="policies__block">
              <h2>4. Контакты</h2>
              <p>
                По вопросам обработки данных:{' '}
                <a href="mailto:info@legal-team.pro">info@legal-team.pro</a>, телефон{' '}
                <a href="tel:+74994951890">+7 (499) 495-18-90</a>.
              </p>
            </article>

            <div className="policies__actions">
              <Link href="/kontakty" className="button button--primary button--large">
                Связаться с нами
              </Link>
              <Link href="/" className="button button--outline button--large">
                На главную
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
