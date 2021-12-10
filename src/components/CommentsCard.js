function CommentsCard({ comments }) {
  return (
    <div>
      <h2> {comments.length} Comments </h2>
      <div>
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsCard;
