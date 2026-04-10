function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  while (result.length < n) {
    const last = result[result.length - 1];
    const previous = result[result.length - 2];
    result.push(previous + last);
  }

  return result;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = fibsRec(n - 1);
  const nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNumber);

  return sequence;
}

module.exports = { fibs, fibsRec };
