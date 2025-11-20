export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

export const getInitials = (name) => {
    if (!name) return "";
  
    const words = name.split(" ");
    let initials = "";
  
    // Take the first letter of the first two words
    for (let i = 0; i < Math.min(2, words.length); i++) {
      if (words[i].length > 0) {
        initials += words[i][0].toUpperCase();
      }
    }
  
    return initials;
  };

export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    // Convert number to string and split into integer and fractional parts
    const [integerPart, fractionalPart] = num.toString().split(".");

    // Add commas to the integer part using regex
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine integer and fractional parts (if any)
    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
  };

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));

  return chartData;
};