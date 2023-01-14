const randomColorGenerator = (theme) => {
  const colorList = [
    theme.palette.red.main,
    theme.palette.pink.main,
    theme.palette.purple.main,
    theme.palette.indigo.main,
    theme.palette.cyan.main,
    theme.palette.teal.main,
    theme.palette.green.main,
    theme.palette.yellow.main,
    theme.palette.amber.main,
    theme.palette.orange.main,
  ];

  const randomIndex = Math.floor(Math.random() * colorList.length);

  return colorList[randomIndex];
};

export default randomColorGenerator;
