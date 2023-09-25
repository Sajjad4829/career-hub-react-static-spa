const Category = ({category}) => {
    const {logo,category_name,availability}=category
        console.log(category)
    return (
        <div className="  bg-sky-50  py-10  px-8 rounded-md space-y-2">
            <div>
                <img src={logo} alt="" />
            </div>
            <div  className=" space-y-4">
                <h1 className=" text-md  font-bold">{category_name}</h1>
                <p className=" text-sm text-zinc-400">{availability}</p>
            </div>
        </div>
    );
};

export default Category;