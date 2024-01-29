import styles from "./BlogCards.module.scss";
import BlogCard from "../BlogCard/BlogCard";

function MainInfoCards(): JSX.Element {
  const cards = [
    {
      src: "/images/BlogsSection/image1.png",
      tagText: "Business",
      timeText: "7 min read",
      header: "Top 10 mistakes startaps in 2022 make and how to avoid them",
      text: "Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed nesciunt delectus sequi harum d",
    },
    {
      src: "/images/BlogsSection/image2.png",
      tagText: "Business",
      timeText: "11 min read",
      header: "How many participants for a new hire interview",
      text: "Et ad placeat quo rerum earum. Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Qui maxime pariatur nobis est et culpa itaque consequatur.",
    },
    {
      src: "/images/BlogsSection/image3.png",
      tagText: "Tools",
      timeText: "5 min read",
      header: "Two business tools that have made my job way easier",
      text: "Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Et ad placeat quo rerum earum. Qui maxime pariatur nobis est et culpa itaque consequatur.",
    },
  ];
  return (
    <div className={styles.blogCards}>
      {cards.map((card, index) => (
        <BlogCard
          key={index}
          src={card.src}
          tagText={card.tagText}
          timeText={card.timeText}
          header={card.header}
          text={card.text}
        ></BlogCard>
      ))}
    </div>
  );
}
export default MainInfoCards;
