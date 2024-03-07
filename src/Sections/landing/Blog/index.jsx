import Container from "@/Components/Container";
import BlogItem from "@/Components/BlogItem";
import Title from "@/Components/Title";
import style from "./Blog.module.scss";

const testData = [
  {
    title: "Удобно бронируйте визиты онлайн",
    text: "Хотите записаться к парикмахеру, барберу, на маникюр или в массажный салон в вашем районе? Ищете место, где лучшие специалисты позаботятся о вашей бороде, бровях или сделают приятный массаж? Booksy — это бесплатное приложение для бронирования, где можно легко и быстро находить свободные даты и записываться к специалистам. Больше никаких телефонных звонков — бронируйте отовсюду в любое удобное для вас время.",
    img_path: "./images/blog1.svg",
  },
  {
    title: "Что-нибудь случилось? Не беспокойтесь — мы прикроем!",
    text: "Загрузите Booksy — бесплатное приложение для бронирования — и управляйте своими визитами отовсюду. Переносите визиты или отменяйте бронирование без телефонных звонков. Мы знаем, что у вас каждый день куча дел! Поэтому присылаем вам напоминания о предстоящих визитах, чтобы вы ничего не пропустили!",
    img_path: "./images/blog2.svg",
  },
  {
    title: "Бронируйте визиты у лучших специалистов поблизости",
    text: "В Booksy вы найдете самые лучшие компании в области здоровья и салоны красоты в вашем регионе. Узнайте больше о них — просматривайте их профили на Booksy, читайте отзывы других клиентов и ознакомьтесь с их работами в портфолио. Экономьте свое время и ни о чем не беспокойтесь! Забронировать визит в Booksy — легко и бесплатно.",
    img_path: "./images/blog3.svg",
  },
];

const Blog = () => {
  return (
    <section className={style["blog"]}>
      <Container>
        <div className={style["blog__wrapper"]}>
          <Title>В чем нашe преимущество</Title>
          <div className={style["blog__items"]}>
            {testData.map((el) => (
              <BlogItem
                img_path={el.img_path}
                key={el.title}
                title={el.title}
                text={el.text}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;