console.log("d3 :>> ", d3);
const DUMMY_DATA = [1, 2, 3];
d3.select("#root")
  .selectAll("h2")
  .data(DUMMY_DATA)
  .enter()
  .append("h2")
  .text((data) => data);
