const Sale = (Card) => {

    // we have return hoc from sale so where ever sale wil be used and props will be passd it will be passed to HOC 
    const HOC= (props) => {
        return (
            <div className="relative ">
              
                <div className="absolute bottom-38 left-7 right-0 text-white font-extrabold text-lg px-2 w-[80%] text-center py-1 bg-gradient-to-t from-black/60 to-transparent">
                    {props.info.aggregatedDiscountInfoV3.header + " " + props.info.aggregatedDiscountInfoV3.subHeader}
                </div>

                {/* Original Card */}
                <Card {...props} />
            </div>
        );
    };
    return HOC;
};

export default Sale;
