let add = (a, b) => a + b;

function expect(res) {
  return {
    toBe: actual => {
      if (res !== actual) {
        throw new Error("add 结果不符合预期");
      }
    }
  };
}

expect(add(1, 2)).toBe(3);

module.exports = { add };
