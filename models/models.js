module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: String,
    positif: String,
    sembuh: String,
    meninggal: String,
    dirawat: String,
  });

  const Fetch = mongoose.model("fetch", schema);
  return Fetch;
};
