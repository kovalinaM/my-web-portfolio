export const navItems = [
    { name: "Обо мне", link: "#about" },
    { name: "Проекты", link: "#projects" },
    { name: "Опыт", link: "#experience" },
    { name: "Контакты", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Коммерческий опыт верстки, разработки с 0 и поддержки сайтов на CMS Bitrix",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/comp.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Мой стек",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: `Местоположение: г.Белгород, Россия.`,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    // {
    //   id: 4,
    //   title: "Магистр с отличием по направлению ",
    //   description: "",
    //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    //   imgClassName: "",
    //   titleClassName: "justify-start",
    //   img: "/grid.svg",
    //   spareImg: "/b4.svg",
    // },
  
    // {
    //   id: 5,
    //   title: "Currently building a JS Animation library",
    //   description: "The Inside Scoop",
    //   className: "md:col-span-3 md:row-span-2",
    //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    //   titleClassName: "justify-center md:justify-start lg:justify-center",
    //   img: "/b5.svg",
    //   spareImg: "/grid.svg",
    // },
    // {
    //   id: 6,
    //   title: "Do you want to start a project together?",
    //   description: "",
    //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    //   imgClassName: "",
    //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    //   img: "",
    //   spareImg: "",
    // },
  ];
  
  export const projects = [
    {
      id: 1,
      title: `"Stellar Burger"`,
      des: "Приложение, в котором можно посмотреть историю заказов, оформить заказ, собрав бургер из предложенных ингредиентов",
      img: "/burger.png",
      iconLists: ["/react.svg", "/redux.svg", "/ts.svg"],
      link: "https://kovalinam.github.io/react-burger/",
    },
    {
      id: 2,
      title: `"ZMS-Technology"`,
      des: "Сайт предприятия, производящего сельскохозяйственную технику",
      img: "/zms.png",
      iconLists: ["/bitrix.png"],
      link: "https://zmstech.ru/",
    },
    {
      id: 3,
      title: `"Пикник-парк"`,
      des: `Официальный сайт места отдыха в г. Белгород`,
      img: "/picnic.png",
      iconLists: ["/bitrix.png"],
      link: "https://picnic-park.ru/",
    },
    {
      id: 4,
      title: `"Отдыхаем в Белгороде"`,
      des: "Сайт-агрегатор статей, новостей и анонсов мероприятий в г. Белгороде",
      img: "/belrelax.png",
      iconLists: ["/bitrix.png"],
      link: "https://belrelax.ru/",
    },

  ];

  
  export const workExperience = [
    {
      id: 1,
      title: "Программист-верстальщик",
      period: 'апрель 2023 - н.в.',
      company: "ГК Агро-Белогорье",
      desc: "Верстка по макетам, разработка с 0 и поддержка сайтов на CMS Bitrix",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Преподаватель информатики",
      period: 'август 2019 - ноябрь 2022',
      company: "ОГАПОУ БТПиСУ",
      desc: "Преподавание информатики и информационных технологий, разработка методических материалов",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/kovalinaM"
    },
    {
      id: 2,
      img: "/telegram.svg",
      url: "https://t.me/marishine1106"
    }
  ];