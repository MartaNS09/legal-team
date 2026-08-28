import { pricingRows } from '@/data/pricing';

export function PricingSection() {
  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title" className="section-title">
          Стоимость юридических услуг
        </h2>
        <p className="pricing__subtitle">
          Первичная консультация — бесплатно. Точная стоимость определяется после анализа
          документов и сложности дела.
        </p>

        <div className="pricing__table-wrapper" role="region" aria-label="Таблица стоимости услуг">
          <table className="pricing__table">
            <caption className="visually-hidden">
              Ориентировочная стоимость юридических услуг Legal Team
            </caption>
            <thead>
              <tr>
                <th scope="col">Направление</th>
                <th scope="col">Консультация</th>
                <th scope="col">Сопровождение</th>
                <th scope="col">Примечание</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.service}>
                  <th scope="row">{row.service}</th>
                  <td>{row.consultation}</td>
                  <td>{row.representation}</td>
                  <td>{row.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pricing__note">
          * Указаны минимальные ориентиры. Итоговая цена фиксируется в договоре после бесплатной
          консультации.{' '}
          <a href="#consult" className="pricing__link">
            Получить расчёт стоимости
          </a>
        </p>
      </div>
    </section>
  );
}
