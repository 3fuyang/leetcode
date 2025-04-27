export function addStrings(num1: string, num2: string): string {
  let ptr1 = num1.length - 1
  let ptr2 = num2.length - 1

  let result = ''

  let advanced = 0
  while (ptr1 >= 0 || ptr2 >= 0) {
    const val1 = ptr1 >= 0 ? Number(num1[ptr1]) : 0
    const val2 = ptr2 >= 0 ? Number(num2[ptr2]) : 0

    const sum = val1 + val2 + advanced
    const val = sum % 10
    advanced = sum >= 10 ? 1 : 0

    result = val + result

    ptr1--
    ptr2--
  }

  if (advanced) {
    result = 1 + result
  }

  return result
}
