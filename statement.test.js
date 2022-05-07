import statement from "./statement.js";
import invoices from "./invoices.js";
import plays from "./plays.js";

test("works", () => {
  let call = statement(invoices[0], plays);

  const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $490.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,640.00
You earned 47 credits\n`;
  expect(call).toBe(expected);
});
