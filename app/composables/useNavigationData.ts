export const useNavigationData = () => {
  const navItems = [
    {
      title: 'Турниры',
      path: '/tournaments',
      children: [
        { title: 'ATP', path: '/tournaments/atp' },
        { title: 'WTA', path: '/tournaments/wta' }
      ]
    },
    { title: 'Новости', path: '/news' },
    { title: 'Статьи', path: '/articles' },
    {
      title: 'Любителям',
      path: '/amateurs',
      children: [
        { title: 'Школы', path: '/amateurs/schools' },
        { title: 'Кэмпы и туры', path: '/amateurs/camps' },
        { title: 'База кортов', path: '/amateurs/courts' },
        { title: 'Любительские турниры', path: '/amateurs/tournaments' }
      ]
    },
    {
      title: 'Wiki',
      path: '/wiki',
      children: [
        { title: 'Правила тенниса', path: '/wiki/rules' },
        { title: 'Виды ударов', path: '/wiki/strokes' },
        { title: 'Покрытия кортов', path: '/wiki/surfaces' },
        { title: 'Ракетки', path: '/wiki/rackets' },
        { title: 'Кроссовки и одежда', path: '/wiki/shoes-clothing' },
        {
          title: 'Игроки',
          path: '/wiki/players',
          children: [
            { title: 'Мужчины', path: '/wiki/players/men' },
            { title: 'Женщины', path: '/wiki/players/women' }
          ]
        }
      ]
    },
    { title: 'Прогнозы', path: '/predictions' }
  ]

  return {
    navItems
  }
}
