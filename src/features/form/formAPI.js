// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) => {
    const valid = amount.name.length > 3 && amount.name && amount.email;
    if (valid) {
      setTimeout(
        () => resolve({ data: { ...amount, ...{ valid: true } } }),
        3000
      );
    } else {
      setTimeout(
        () => resolve({ data: { ...amount, ...{ valid: false } } }),
        3000
      );
    }
  });
}
