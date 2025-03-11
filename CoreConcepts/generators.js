function* storyTeller() {
  yield "Once upon a time...";
  yield "The journey continued...";
  yield "And they lived happily ever after.";
}
const story = storyTeller();
console.log(story.next().value);
console.log(story.next().value);
console.log(story.next().value);
