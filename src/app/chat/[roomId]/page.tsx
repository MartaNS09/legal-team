import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Marquee } from '@/components/ui/Marquee';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { chatRooms, getChatRoom } from '@/data/chatRooms';
import { buildPageMetadata } from '@/lib/seo';

interface ChatRoomPageProps {
  params: Promise<{ roomId: string }>;
}

export function generateStaticParams() {
  return chatRooms.map((room) => ({ roomId: room.id }));
}

export async function generateMetadata({ params }: ChatRoomPageProps): Promise<Metadata> {
  const { roomId } = await params;
  const room = getChatRoom(roomId);
  if (!room) return {};

  return buildPageMetadata({
    title: `${room.title} — чат с юристом`,
    description: `${room.subtitle}. Тестовый онлайн-чат с ${room.lawyerName}, ${room.lawyerRole}.`,
    path: `/chat/${room.id}`,
  });
}

export default async function ChatRoomPage({ params }: ChatRoomPageProps) {
  const { roomId } = await params;
  const room = getChatRoom(roomId);

  if (!room) notFound();

  return (
    <>
      <Marquee
        text="Онлайн-чат с юристом • Бесплатная консультация • +7 (499) 495-18-90"
        speed={30}
      />
      <Header />
      <main id="main" className="chat-room-page">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Чат', href: '/chat' },
              { label: room.title },
            ]}
          />
        </div>

        <section className="chat-room-page__section" aria-label={`Чат: ${room.title}`}>
          <div className="container chat-room-page__container">
            <ChatWindow room={room} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
