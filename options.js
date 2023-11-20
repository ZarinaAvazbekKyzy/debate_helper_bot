const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "источники с статьями", callback_data: "articles" }],
      [{ text: "источники с тренингами", callback_data: "lectures" }],
      [{ text: "как стоит развиваться", callback_data: "development" }],
      [{ text: "крутые раунды", callback_data: "finals" }],
      [
        {
          text: "источники для развития информативки",
          callback_data: "knowledgeData",
        },
      ],
      [
        {
          text: "Подборка статей по аргументации из хэндбука",
          callback_data: "articlesTDH",
        },
      ],
    ],
  }),
};

module.exports = options;
