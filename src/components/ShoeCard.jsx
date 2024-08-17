const ShoeCard = ({ imgUrl, ChangeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      ChangeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
