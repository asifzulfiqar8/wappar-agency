const FooterCards = ({ card, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-[#212121] w-full h-[80px] md:h-[102px] grid place-items-center rounded-3xl"
    >
      <div className="flex items-center gap-4">
        {card.icon}
        <p className="text-[#FBFBFB] text-lg font-bold font-dmsans">
          {card.title}
        </p>
      </div>
    </button>
  );
};

export default FooterCards;
