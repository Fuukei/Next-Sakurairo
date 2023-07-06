import { FC } from "react";
import * as CommentComponents from "@/components/comment/dynamic";

type CommentOptionKeys = keyof typeof CommentComponents;

const commentOption: CommentOptionKeys = require("@/config").blogConfig.comments.option;
const SelectedComment = CommentComponents[commentOption];

const Comment: FC = () => {
    return <SelectedComment />;
};

export default Comment;
