<template>
  <div class="template-page">
    <div class="container">
      <div class="template-page__hero">
        <UiBadge variant="primary">UI Kit</UiBadge>
        <h1>Страница-шаблон</h1>
        <p>Все компоненты и паттерны оформления сайта «Первая подача» в одном месте. Используй эту страницу как справочник при вёрстке новых разделов.</p>
      </div>

      <!-- ——— ТИПОГРАФИКА ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Типографика</h2>
        <div class="template-section__block">
          <h1>Заголовок H1 — Miami Open 2024</h1>
          <h2>Заголовок H2 — История турнира</h2>
          <h3>Заголовок H3 — Рекорды и легенды</h3>
          <p>Стандартный абзац текста. Miami Open — это ежегодный профессиональный теннисный турнир.</p>
          <p class="text-small">Второй вид абзаца (body-small). Дополнительная информация или мелкая подпись под текстом.</p>
          
          <div style="display: flex; gap: 24px; margin-top: 24px;">
            <div class="label">Label Medium</div>
            <div class="label label--small">Label Small</div>
          </div>

          <ul>
            <li>Ненумерованный пункт с фирменным маркером</li>
            <li>Второй пункт</li>
          </ul>
          <ol>
            <li>Нумерованный пункт с фирменной цифрой</li>
            <li>Второй пункт</li>
          </ol>
          <blockquote class="blockquote">
            «Побеждать здесь — всё равно что выиграть Большой шлем.»
            <cite>— Новак Джокович</cite>
          </blockquote>
          <hr class="divider" />
        </div>
      </section>

      <!-- ——— КНОПКИ ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Кнопки (Rounded)</h2>
        <div class="template-section__block template-section__block--row">
          <UiButton size="lg">Large Primary</UiButton>
          <UiButton>Medium Primary</UiButton>
          <UiButton size="sm">Small Primary</UiButton>
        </div>
        <div class="template-section__block template-section__block--row">
          <UiButton variant="ghost" size="lg">Ghost Large</UiButton>
          <UiButton variant="ghost">Ghost Medium</UiButton>
          <UiButton variant="ghost" size="sm">Ghost Small</UiButton>
        </div>
      </section>

      <!-- ——— ВКЛАДКИ ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Вкладки (No scroll issue)</h2>
        <UiTabs :tabs="[{ id: 'overview', label: 'Обзор' }, { id: 'draw', label: 'Сетка' }, { id: 'results', label: 'Результаты' }]">
          <template #overview><p>Содержимое вкладки «Обзор».</p></template>
          <template #draw><p>Содержимое вкладки «Сетка».</p></template>
          <template #results><p>Содержимое вкладки «Результаты».</p></template>
        </UiTabs>
      </section>

      <!-- ——— АККОРДЕОН ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Аккордеон (Pure CSS)</h2>
        <UiAccordion :items="accordionItems" />
      </section>

      <!-- ——— ПАГИНАЦИЯ ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Пагинация (Circles)</h2>
        <div class="pagination">
          <button class="pagination__btn">←</button>
          <button class="pagination__btn pagination__btn--active">1</button>
          <button class="pagination__btn">2</button>
          <button class="pagination__btn">3</button>
          <button class="pagination__btn pagination__btn--dots">…</button>
          <button class="pagination__btn">12</button>
          <button class="pagination__btn">→</button>
        </div>
      </section>

      <!-- ——— АЛЕРТЫ ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Алерты (Square)</h2>
        <UiAlert variant="info" :closable="true"><strong>Информация:</strong> Прямые углы без скруглений.</UiAlert>
        <UiAlert variant="success" :closable="true"><strong>Успешно:</strong> Действие выполнено.</UiAlert>
      </section>

      <!-- ——— ФОРМА ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Форма (Square)</h2>
        <div class="form">
          <div class="form__group">
            <label class="form__label">Имя</label>
            <input class="form__input" type="text" placeholder="Введите имя..." />
          </div>
          <div><UiButton>Отправить</UiButton></div>
        </div>
      </section>

      <!-- ——— ТЕННИСНЫЕ КОМПОНЕНТЫ ——— -->
      <section class="template-section">
        <h2 class="template-section__title">Табло матча</h2>
        <TennisScoreboard :players="scoreboard" :serving-player="0" :sets="3" />
      </section>

      <section class="template-section">
        <h2 class="template-section__title">Карточки игроков (2 ряда, Square)</h2>
        <div class="template-page__player-grid">
          <TennisPlayerCard name="Novak Djokovic" country="🇷🇸 Сербия" :photo="withBase('/images/players/player-generic.png')" />
          <TennisPlayerCard name="Carlos Alcaraz" country="🇪🇸 Испания" :photo="withBase('/images/players/player-generic.png')" />
          <TennisPlayerCard name="Jannik Sinner" country="🇮🇹 Италия" :photo="withBase('/images/players/player-generic.png')" />
          <TennisPlayerCard name="Daniil Medvedev" country="🇷🇺 Россия" :photo="withBase('/images/players/player-generic.png')" />
        </div>
      </section>

      <section class="template-section">
        <h2 class="template-section__title">Турнирная сетка (Full Score)</h2>
        <TennisBracket :rounds="bracketData" />
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'UI Kit — Шаблон компонентов | Первая подача',
  meta: [{ name: 'description', content: 'Страница-шаблон всех UI-компонентов сайта Первая подача' }]
})

const accordionItems = [
  { id: '1', title: 'Как купить билеты на Miami Open?', content: 'Билеты можно приобрести на официальном сайте турнира.' },
  { id: '2', title: 'Какое покрытие на турнире?', content: 'Miami Open проводится на хардовом покрытии (Plexipave).' }
]

const scoreboard = [
  { name: 'N. Djokovic', sets: [6, 3, 7], game: '40' },
  { name: 'C. Alcaraz', sets: [4, 6, 5], game: '30' }
]

const bracketData = [
  {
    label: '1/4 финала',
    matches: [
      { id: 1, players: [{ name: 'Джокович', scores: [6, 4, 6], winner: true }, { name: 'Медведев', scores: [3, 6, 2] }] },
      { id: 2, players: [{ name: 'Алькарас', scores: [6, 7], winner: true }, { name: 'Синнер', scores: [4, 5] }] }
    ]
  },
  {
    label: 'Финал',
    matches: [
      { id: 3, players: [{ name: 'Джокович', scores: [7, 6], winner: true }, { name: 'Алькарас', scores: [5, 4] }] }
    ]
  }
]
</script>

<style>
.template-page { padding: 64px 0 128px; }
.template-page__hero { text-align: center; padding: 64px 0; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 96px; h1 { margin-top: 16px; } p { max-width: 640px; margin: 24px auto 0; } }
.template-section { margin-top: 96px; &__title { margin-top: 0; margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); } &__block { margin-top: 24px; &--row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; } } }
.template-page__player-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
}
.blockquote { border-left: 4px solid #D8FF2B; padding: 16px 24px; margin: 24px 0; background: rgba(216,255,43,0.04); border-radius: 0; font-style: italic; color: rgba(255,255,255,0.7); cite { display: block; margin-top: 8px; font-style: normal; font-size: 14px; color: rgba(255,255,255,0.4); } }
.divider { border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 32px 0; }
</style>
