import React from "react";
import { Link } from "react-router-dom";
interface Comment {
  id: number;
  userImg: string;
  userName: string;
  comment: string;
  date: string; // Assuming date format is string for simplicity
}

const comments: Comment[] = [
  {
    id: 1,
    userImg: "../../../public/images/walid.jpeg",
    userName: "walid Elbench",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-04-30",
  },
  {
    id: 1,
    userImg: "../../../public/images/walid.jpeg",
    userName: "walid Elbench",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-04-30",
  },
  {
    id: 1,
    userImg: "../../../public/images/walid.jpeg",
    userName: "walid Elbench",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-04-30",
  },
  {
    id: 1,
    userImg: "../../../public/images/walid.jpeg",
    userName: "walid Elbench",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-04-30",
  },
  {
    id: 1,
    userImg: "../../../public/images/walid.jpeg",
    userName: "walid Elbench",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-04-30",
  },

  // Add more comments as needed
];

const CommentsPage: React.FC = () => {
  return (
    <div>
      <div className="comments-container">
        {comments.map((comment) => (
          <div key={comment.id} className="comment mb-14 flex items-center ">
            <Link
              to={"/Profile"}
              state={{ img: comment.userImg, name: comment.userName }}
            >
              
              <img
                src={comment.userImg}
                alt={comment.userName}
                width={30}
                className="user-img mr-5 rounded-[100%]"
              />
            </Link>
            <div className="comment-content">
              <div className="comment-header mb-2">
                <span className="user-name font-semibold mr-5 ">
                  {comment.userName}
                </span>
                <span className="comment-date text-[12px]  text-secondary-gray">
                  {comment.date}
                </span>
              </div>
              <p className="comment-text text-[#444]">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CommentsPage;
