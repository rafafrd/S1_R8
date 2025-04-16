let x = 31
while (x >= 1) {
  x--
  if (x % 4 == 0) {
    console.log(`[${x}]`)
  } else {
    console.log(x)
  }
}