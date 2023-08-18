let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

const names = studentRecords.map((data) => data.name);
console.log(names);

const ids = studentRecords.filter((data) => data.id > 120);
console.log(ids);

const finalData = studentRecords.reduce(
  (processed, individualdata) => processed + individualdata.marks,
  0
);
console.log(finalData);
