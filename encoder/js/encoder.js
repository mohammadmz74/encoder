export function encoder(inputString, repeatCount) {
  // Define the string
  //   inputString = "SGVsbG8gV29ybGQh";

  // Decode the String
  repeatCount = atob(inputString);

  console.log(repeatCount);
}
encoder("abc", "cdf");
