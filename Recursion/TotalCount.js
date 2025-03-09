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
/*
The function needed to traverse this object 
and count all comments. The expected output for the above example would be 5.
*/
