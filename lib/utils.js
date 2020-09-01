export function formatCurrency(num, includeDecimals = true) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return includeDecimals
    ? currencyFormatter.format(num)
    : currencyFormatter.format(num).replace('.00', '')
}
