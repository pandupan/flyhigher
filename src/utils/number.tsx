export const _renderCurrency = (value = 0) => {
  let number = Number(value)
  return number?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })
}

export const _renderNumeric = (value = 0, maxFragtionDigits = 0) => {
  let number = Number(value)
  return number?.toLocaleString("id-ID", {
    maximumFractionDigits: maxFragtionDigits,
    minimumFractionDigits: 0,
  })
}

export const convertNumberToIDR = (number: string | number) => {
  number = +number
  const currency = new Intl.NumberFormat("us-EN", {
    style: "currency",
    currency: "IDR",
    // separator: ".",
  })

  return currency.format(number).replace(/.00$/g, "").replace(/,/g, ".")
}
