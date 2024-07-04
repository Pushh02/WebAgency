const AboutUs = () => {
  return (
    <>
      <h1 className="text-4xl text-center my-12">About us</h1>
      <p className="text-lg text-center mx-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti
        quis ratione at aperiam vero reiciendis voluptatibus iste nesciunt,
        blanditiis exercitationem tempore hic iure aliquam modi harum, error
        unde alias perspiciatis impedit itaque laborum molestiae! Sit, officia.
        Commodi esse est totam veritatis, assumenda eius in delectus eveniet
        vero aperiam. Ad excepturi aut laboriosam. Eius tempora deleniti nemo,
        vitae quos tempore reiciendis. Architecto excepturi quisquam saepe
        dolores ullam eos vero. Saepe?
      </p>

      <h2 className="text-4xl text-center mt-10">Our Mission</h2>
      <div className="flex justify-around items-center mx-20 my-10">
        <div className="h-56 w-56 relative flex-none">
          <div className="h-48 w-48 absolute left-0 top-0 bg-slate-300" />
          <div className="h-48 w-48 absolute right-0 bottom-0 bg-white " />
        </div>
        <p className="text-center mx-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, eum
          autem! Explicabo magnam, temporibus numquam qui illum amet placeat
          autem, debitis fugiat odio mollitia enim unde dignissimos ab! Maxime
          ab laborum eveniet quam sint sed inventore, harum accusamus corrupti
          expedita corporis possimus nemo aspernatur minus? Pariatur tempora
          quia neque? Ducimus!
        </p>
      </div>
      <h2 className="text-4xl text-center mt-10">Our Vission</h2>
      <div className="flex justify-around items-center mx-20 my-10">
        <p className="text-center mx-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, eum
          autem! Explicabo magnam, temporibus numquam qui illum amet placeat
          autem, debitis fugiat odio mollitia enim unde dignissimos ab! Maxime
          ab laborum eveniet quam sint sed inventore, harum accusamus corrupti
          expedita corporis possimus nemo aspernatur minus? Pariatur tempora
          quia neque? Ducimus!
        </p>{" "}
        <div className="h-56 w-56 relative flex-none">
          <div className="h-48 w-48 absolute left-0 top-0 bg-slate-300" />
          <div className="h-48 w-48 absolute right-0 bottom-0 bg-white " />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
