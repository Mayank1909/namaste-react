const Contact = () => {
    return (
        <div>
            <h1 className=" font-serif font-bold text-3xl p-4 m-4">Welcome to Meal Master, where culinary passion meets convenience! 🍽️✨</h1>
            <div className="m-4 p-4">


                <h3 className="font-bold">Our Story:</h3>
                <p>At Meal Master, we believe that good food has the power to bring people together and elevate everyday moments. Our journey began with a simple yet profound idea: to make delicious and wholesome meals accessible to everyone, regardless of their culinary expertise or busy schedules.</p>

                <h3 className="font-bold">Commitment to Quality:</h3>
                <p> We take pride in sourcing the finest, freshest ingredients to craft mouthwatering recipes that satisfy both the palate and the soul. Our chefs, fueled by creativity and a love for cooking, meticulously curate a diverse menu that caters to various tastes and dietary preferences.</p>

                <h3 className="font-bold">
                    Culinary Innovation:</h3>
                <p>Meal Master is not just a food service; it's a culinary adventure. Our team of culinary maestros is dedicated to pushing the boundaries of flavor, constantly experimenting with new ingredients and cooking techniques to bring you exciting, chef-inspired dishes.</p>

                <h3 className="font-bold">Your Culinary Partner:</h3>
                <p>Whether you're a busy professional, a home chef looking for inspiration, or someone who simply enjoys the convenience of ready-to-enjoy meals, Meal Master is your culinary partner. We strive to make every dining experience memorable, from the first bite to the last.</p>

                <h3 className="font-bold">Community and Sustainability:</h3>
                <p>Meal Master is not just about food; it's about building a community. We are committed to sustainable practices, minimizing our environmental footprint, and supporting local farmers and producers. Join us on this journey towards a more sustainable and delicious future.</p>

                <h3 className="font-bold">Customer-Centric Approach:</h3>
                <p>Your satisfaction is at the heart of everything we do. From the moment you explore our menu to the delightful experience of savoring our dishes, we are dedicated to ensuring that Meal Master exceeds your expectations.</p>

                <h3 className="font-bold">Connect with Us:</h3>
                <p>Thank you for choosing Meal Master as your culinary destination. Follow us on social media, share your culinary adventures with our creations, and be part of our vibrant community. Your feedback is invaluable as we continue to evolve and serve you better.</p>

                <h2 className="p-2 m-2 italic font-bold"><p>Indulge in the artistry of flavor, convenience, and community with Meal Master. Your culinary journey starts here! 🌮🍜🍰</p></h2>

            </div>
            <p className="m-6 font-bold">For any customer supprt feel free to contact us :</p>
            <form action="" className="m-4 p-4">
                <lable className="font-serif font-bold text-3xl underline">Name:</lable>
                <input className="border border-black p-2 m-2 shadow-lg rounded-lg" placeholder="name"></input>

                <lable className="font-serif font-bold text-3xl underline">Contact No:</lable>
                <input className="border border-black p-2 m-2 shadow-lg rounded-lg"></input>
                <button className="m-2 p-2 bg-black text-white shadow-lg rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact
