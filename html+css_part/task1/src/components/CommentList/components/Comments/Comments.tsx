import styles from "./Comments.module.scss";
import Comment from "../Comment/Comment";

function Comments(): JSX.Element {
  const commentFirstArr = [
    {
      src: "/images/CommentsSection/portrait1.png",
      text: '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus convallis elit."',
      name: "Dana Hale",
      position: "UI/UX Designer, Iniry",
    },
    {
      src: "/images/CommentsSection/portrait2.png",
      text: '"In luctus convallis elit, vitae blandit elit volutpat a. Donec volutpat massa turpis, sed interdum dui aliquam id. Integer imperdiet odio sit amet faucibus auctor."',
      name: "Kyle Camden",
      position: "Front-end Developer, Dontechi",
    },
    {
      src: "/images/CommentsSection/portrait3.png",
      text: '"Donec sodales turpis sollicitudin sodales sodales. Proin blandit congue ante sed scelerisque. Etiam sed metus sapien aenean eu euismod."',
      name: "Travis Elton",
      position: "Sales Manager, Kan-cod",
    },
  ];
  const commentSecondArr = [
    {
      src: "/images/CommentsSection/portrait4.png",
      text: '"Aenean eu euismod sapien. Maecenas maximus velit turpis, sit amet sodales felis condimentum interdum. Donec sit amet placerat nunc. Fusce ultricies ex et arcu maximus faucibus. Sed ac rhoncus justo."',
      name: "Monica Scarboro",
      position: "CEO, Sonron",
    },
    {
      src: "/images/CommentsSection/portrait5.png",
      text: '"In eros nunc, sagittis fermentum sagittis nec, porta vitae est. Sed felis nibh, commodo nec vestibulum in, tincidunt sodales lectus. Proin rutrum ut enim nec eleifend. Integer ante diam, imperdiet vel risus non, pretium placerat nisl."',
      name: "Anna Hanney",
      position: "Head of Design, Betatech",
    },
    {
      src: "/images/CommentsSection/portrait6.png",
      text: '"Duis at nisl nulla. Donec quis tortor tellus. Aenean sed turpis vulputate nunc dictum vulputate eu et sem. In dapibus elementum varius. Integer aliquet, ex at lacinia euismod, dolor nibh sodales ex."',
      name: "Megan Roston",
      position: "Copywriter, Openlane",
    },
  ];
  return (
    <div className={styles.blogCards}>
      <div className={styles.blogCardsCol}>
        {commentFirstArr.map((comment, index) => (
          <Comment
            key={index}
            src={comment.src}
            text={comment.text}
            name={comment.name}
            position={comment.position}
          ></Comment>
        ))}
      </div>
      <div className={styles.blogCardsCol}>
        {commentSecondArr.map((comment, index) => (
          <Comment
            key={index}
            src={comment.src}
            text={comment.text}
            name={comment.name}
            position={comment.position}
          ></Comment>
        ))}
      </div>
    </div>
  );
}
export default Comments;
