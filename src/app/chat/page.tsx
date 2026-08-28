import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Marquee } from '@/components/ui/Marquee';
import { PageHero } from '@/components/ui/PageHero';
import { chatRooms } from '@/data/chatRooms';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Онлайн-чат с юристом | Legal Team',
  description:
    'Тестовый чат с юристами Legal Team: общая консультация, семейное, налоговое и арбитражное право. Бесплатно, конфиденциально.',
  path: '/chat',
  keywords: 'онлайн юрист, чат с юристом, юридическая консультация онлайн',
});

export default function ChatPage() {
  return (
    <>
      <Marquee
        text="Онлайн-чат с юристом • Бесплатная консультация • +7 (499) 495-18-90"
        speed={30}
      />
      <Header />
      <main id="main">
        <PageHero
          id="chat-hero-title"
          title="Онлайн-чат с юристом"
          subtitle="Тестовая версия · ответы автоматические · для записи к живому юристу — раздел «Контакты»"
          imageSrc="/images/hero/services.jpg"
          imageAlt="Онлайн-чат с юристом Legal Team"
          breadcrumbs={[{ label: 'Чат с юристом' }]}
          variant="compact"
        />

        <section className="chat-list" aria-labelledby="chat-list-title">
          <div className="container">
            <h2 id="chat-list-title" className="chat-list__heading visually-hidden">
              Выберите направление
            </h2>
            <p className="chat-list__intro">
              Каждый чат ведёт профильный юрист. История сохраняется на вашем устройстве.
            </p>

            <ul className="chat-list__grid">
              {chatRooms.map((room) => (
                <li key={room.id}>
                  <Link href={`/chat/${room.id}`} className="chat-list__card">
                    <span className="chat-list__card-icon" aria-hidden="true">
                      {room.icon}
                    </span>
                    <div className="chat-list__card-body">
                      <h3 className="chat-list__card-title">{room.title}</h3>
                      <p className="chat-list__card-subtitle">{room.subtitle}</p>
                      <p className="chat-list__card-lawyer">
                        {room.lawyerName} · {room.lawyerRole}
                      </p>
                    </div>
                    <span className="chat-list__card-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="chat-list__note">
              Это демо-чат для тестирования PWA. Ответы генерируются автоматически и не заменяют
              консультацию юриста.{' '}
              <Link href="/kontakty">Записаться на консультацию →</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
