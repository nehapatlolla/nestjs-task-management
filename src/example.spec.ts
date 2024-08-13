// describe('example testcase', () => {
//   it('equals true', () => {
//     expect(true).toEqual(true);
//   });
// });
// describe('Math operations', () => {
//   it('should return true for a correct addition', () => {
//     expect(2 + 2).toEqual(4);
//   });
// });
function addNumbers(n1, n2) {
  return n1 - n2;
}
describe('addition', () => {
  it('adds two numbers', () => {
    expect(addNumbers(8, 2)).toEqual(10);
  });
});
