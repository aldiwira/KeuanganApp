const greatings = () => {
  let mDate = new Date();
  let hrs = mDate.getHours();

  if (hrs < 9) return "Selamat Pagi";
  else if (hrs >= 9 && hrs <= 15) return "Selamat Siang";
  else if (hrs >= 15 && hrs <= 18) return "Selamat Sore";
  else if (hrs >= 18 && hrs <= 24) return "Selamat Malam";
};

module.exports = greatings;
