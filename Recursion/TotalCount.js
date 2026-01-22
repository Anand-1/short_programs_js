/*Count Total Comments (Including Replies)
One coding question involved writing a function that takes a comment object
 and returns the total number of comments, including replies. The input object
  had a nested structure, where each comment could have multiple replies:
*/
const comment = {
  text: "some comment",
  replies: [
    { text: "some comment 1", replies: [] },
    { text: "some comment 2", replies: [] },
    {
      text: "some comment 3",
      replies: [{ text: "some comment 5", replies: [] }],
    },
  ],
};

function commentCount(comments) {
  let count = 0;
  function executeCount(comments) {
    for (let key in comments) {
      if (key === 'text') {
        count++
      } else if (key === 'replies') {
        for (let item of comments[key]) {
          executeCount(item)
        }
      }
    }
  }
  executeCount(comments)
  return count;
}

console.log(commentCount(comment))


/*
The function needed to traverse this object 
and count all comments. The expected output for the above example would be 5.
*/
