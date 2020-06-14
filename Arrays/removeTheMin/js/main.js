function removeSmallest(numbers) {
  const smallest = Math.min.apply(null, numbers);
    const pos = numbers.indexOf(smallest);
    return numbers.slice(0, pos).concat(numbers.slice(pos + 1));

}

console.log(removeSmallest([2, 2, 1, 2, 1]))