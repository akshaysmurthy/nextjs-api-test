export default (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59");
  res.status(200).json({ time: new Date() });
};
