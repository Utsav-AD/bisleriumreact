import React from "react";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";
import { useState } from "react";
import CommentForm from "../Comment/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const PostDetail = () => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [userVote, setUserVote] = useState(null); // null for no vote, 'upvote' or 'downvote' for user's vote

  // Function to handle upvote
  const handleUpvote = () => {
    if (userVote === "downvote") {
      // If user was previously downvoted, switch to upvote
      setDownvotes(downvotes - 1);
      setUpvotes(upvotes + 1);
      setUserVote("upvote");
    } else if (userVote !== "upvote") {
      // If user hasn't voted yet or voted neutrally, upvote
      setUpvotes(upvotes + 1);
      setUserVote("upvote");
    }
  };

  // Function to handle downvote
  const handleDownvote = () => {
    if (userVote === "upvote") {
      // If user was previously upvoted, switch to downvote
      setUpvotes(upvotes - 1);
      setDownvotes(downvotes + 1);
      setUserVote("downvote");
    } else if (userVote !== "downvote") {
      // If user hasn't voted yet or voted neutrally, downvote
      setDownvotes(downvotes + 1);
      setUserVote("downvote");
    }
  };
  return (
    <section className="post-detail">
      <div className="contaienr post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm secondary">
              Delete
            </Link>
          </div>
        </div>
        <div className="post-voting">
          {/* Upvote button */}
          <button
            className={`vote-btn upvote ${
              userVote === "upvote" ? "active" : ""
            }`}
            onClick={handleUpvote}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          {/* Display upvotes count */}
          <span className="vote-count">{upvotes}</span>
          {/* Downvote button */}
          <button
            className={`vote-btn downvote ${
              userVote === "downvote" ? "active" : ""
            }`}
            onClick={handleDownvote}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          {/* Display downvotes count */}
          <span className="vote-count">{downvotes}</span>
        </div>
        <h1>This is a post title!</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
          exercitationem eum aut, quasi nobis earum aliquam repellendus
          perspiciatis, nisi atque voluptatibus numquam molestias, enim qui
          eaque odio impedit corporis iure corrupti! Praesentium temporibus quia
          ullam enim beatae distinctio officia voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error
          quasi consequatur molestias iure vero expedita eligendi doloribus
          minima, nostrum amet laborum odio corrupti facilis, itaque eius nemo!
          Nam eligendi distinctio dolores corrupti magnam non quibusdam deserunt
          tempora velit, voluptatem, numquam totam veniam iure! Consequatur
          aspernatur harum in nesciunt, architecto dolorem praesentium aliquid
          quia assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit
          repellat deserunt placeat odio quidem recusandae dolores, autem qui.
          Quia earum voluptatibus eum, ad ducimus, quam adipisci deserunt totam
          quis id repellendus nihil, laborum blanditiis? Placeat nostrum eos
          consequatur dolores tempore obcaecati, illum ad. Molestiae eveniet
          error, nihil optio est minima aliquam, possimus nesciunt commodi
          magnam omnis tempora aperiam labore animi, dolorum expedita esse?
          Repellat eius saepe eveniet iste labore consectetur quam at libero
          odit debitis earum natus ex pariatur incidunt mollitia illo nisi,
          nobis tempora repudiandae perferendis ab alias, ipsum rem laborum!
          Itaque, eveniet non, ad nulla est laboriosam blanditiis perferendis
          architecto dicta pariatur impedit ratione enim officia voluptatibus!
          Commodi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          quibusdam velit sapiente mollitia, eum quae eos impedit, minus, sed
          dolore laudantium possimus reiciendis dolor quia ab recusandae
          expedita rerum itaque ipsum tempore eius nobis atque quam. Aspernatur
          sapiente fugit ea eos eum, nemo iure excepturi non illo saepe odit,
          deserunt aliquam libero ipsum itaque at velit similique laboriosam
          error. Minima earum tenetur aliquam perspiciatis magni. Architecto
          ullam id reprehenderit fugiat dolorum optio ea hic explicabo facilis.
          Minima aliquam quod dicta quis sequi alias officiis, in nemo tenetur?
          Nostrum, magni quis facilis porro cum deserunt voluptatibus vitae
          itaque non enim quisquam, quas aut voluptatem illum cupiditate
          veritatis saepe vero corrupti! Error, asperiores id eum,
          exercitationem temporibus odit dolor, molestiae recusandae rem culpa
          voluptatum modi. Quasi fuga sunt repellendus dolorum nobis
          consequuntur, magnam blanditiis dicta enim aliquid. Mollitia
          consectetur labore velit necessitatibus ratione, maiores, ducimus
          delectus nisi voluptas recusandae dolorem ea quo vel totam ad fuga
          distinctio laudantium soluta, laboriosam quasi laborum ipsa sunt dicta
          voluptates. Nemo atque nobis eum alias animi tempora labore commodi
          dicta repellat nesciunt aliquam cumque repudiandae quisquam adipisci
          omnis accusantium enim necessitatibus debitis molestiae magnam,
          praesentium fuga nisi facilis vel. A aliquam quia officia rerum omnis
          sapiente, dicta cumque magnam repudiandae minima accusantium beatae
          veritatis qui recusandae aut laudantium illum nulla alias ut? Deserunt
          totam voluptates accusantium! Neque enim, voluptate inventore placeat
          voluptatibus minima accusantium velit iusto temporibus quibusdam sed
          consequatur assumenda, quam provident corrupti suscipit porro
          voluptatum dolorum explicabo voluptates quidem! Illum, quod. At
          deleniti harum debitis aliquam perspiciatis fuga explicabo et
          excepturi dolores voluptatum non quod cumque veritatis quos iste nam
          optio similique commodi impedit ut sequi, architecto, expedita porro.
          Excepturi provident inventore sed minima cumque error tempore.
          Provident doloribus quam molestiae iure numquam aut amet. Ut dicta
          accusamus nostrum corporis, vero exercitationem mollitia? Eos.
        </p>
      </div>
      <CommentForm />
    </section>
  );
};

export default PostDetail;
