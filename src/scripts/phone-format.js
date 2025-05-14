/**
 * Formats a phone number into the format (123) 456-7890.
 * @param {string} phoneNumber - The phone number to format.
 * @returns {string} - The formatted phone number.
 */
function formatPhoneNumber(phoneNumber) {
    // Remove all non-numeric characters
    const cleaned = phoneNumber.replace(/\D/g, "");
  
    // Format the cleaned number
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `+1 (${match[1]}) ${match[2]}-${match[3]}`;
    }
  
    // Return the original input if it cannot be formatted
    return phoneNumber;
  }
  
  // Example usage:
  // console.log(formatPhoneNumber("1234567890")); // Output: (123) 456-7890
  // console.log(formatPhoneNumber("123-456-7890")); // Output: (123) 456-7890
  export default formatPhoneNumber;
  