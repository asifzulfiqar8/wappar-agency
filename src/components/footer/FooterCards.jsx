const FooterCards = ({ card, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-[#212121] hover:bg-[#e9e9e9] transition-all duration-200 w-full h-[80px] md:h-[102px] grid place-items-center rounded-3xl group"
    >
      <div className="flex items-center gap-4">
        {card.icon}
        <p className="text-[#FBFBFB] group-hover:text-black text-left text-lg font-bold font-dmsans  lg:text-left  min-w-[180px] lg:w-[0] transition-all duration-200">
          {card.title}
        </p>
      </div>
    </button>
  );
};

export default FooterCards;
