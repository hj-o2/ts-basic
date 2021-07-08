export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', maybeNumber, maybeNumber)

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
