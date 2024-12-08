import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import Aos from "aos";
import Loading from "../Loading";
import { Fade } from "react-awesome-reveal";


const AddEquipment = () => {

    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Add Equipment | EquiSports";
        Aos.init({ duration: 1000 });
    }, []);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    const handleAddEquipment = (e) => {
        e.preventDefault();

        const Image = e.target.Image.value;
        const ItemName = e.target.ItemName.value;
        const CategoryName = e.target.CategoryName.value;
        const Description = e.target.Description.value;
        const Price = e.target.Price.value;
        const Rating = e.target.Rating.value;
        const Customization = e.target.Customization.value;
        const ProcessingTime = e.target.ProcessingTime.value;
        const StockStatus = e.target.StockStatus.value;
        const UserEmail = user.email;
        const UserName = user.displayName;

        const newEquipment = {
            Image,
            ItemName,
            CategoryName,
            Description,
            Price,
            Rating,
            Customization,
            ProcessingTime,
            StockStatus,
            UserEmail,
            UserName,
        };

        console.log(newEquipment);

        fetch("https://equisports-server-olive.vercel.app/equipment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newEquipment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Equipment added successfully!");
                    e.target.reset();
                }
                else {
                    toast.error("Equipment added successfully!");
                }
            })
            .catch(() => {
                toast.error("Something went wrong!");
            });
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <NavBar />

            <div className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="text-center mb-10">

                    <Fade>
                        <h1 className="text-3xl md:text-7xl font-bold text-blue-600 font-charm">Add <span className="text-black">Equipment!</span></h1>

                        <p className="mt-4 text-lg text-gray-600">
                            Provide details for the new equipment you want to add to our inventory. Ensure all required fields are filled out correctly.
                        </p>
                    </Fade>

                </div>

                <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200" data-aos="fade-up">
                    <form onSubmit={handleAddEquipment} className="space-y-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-blue-600">Image URL</span>
                                </label>

                                <input
                                    type="text"
                                    name="Image"
                                    placeholder="Image URL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-blue-600">Item Name</span>
                                </label>

                                <input
                                    type="text"
                                    name="ItemName"
                                    placeholder="Item Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-600">Category Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="CategoryName"
                                    placeholder="Category Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-blue-600">Description</span>
                                </label>

                                <textarea
                                    name="Description"
                                    placeholder="Description"
                                    className="textarea textarea-bordered"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-600">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="Price"
                                    placeholder="Price in USD"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-blue-600">Rating</span>
                                </label>

                                <input
                                    type="number"
                                    name="Rating"
                                    placeholder="Rating (1-5)"
                                    className="input input-bordered"
                                    required
                                    min="1"
                                    max="5"
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control flex-1">

                                <label className="label">
                                    <span className="label-text text-blue-600">Customization</span>
                                </label>

                                <input
                                    type="text"
                                    name="Customization"
                                    placeholder="Customization (e.g., bat with extra grip)"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-blue-600">Processing Time</span>
                                </label>

                                <input
                                    type="text"
                                    name="ProcessingTime"
                                    placeholder="Processing Time (e.g., 2-3 days)"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Stock Status</span>
                            </label>
                            <input
                                type="number"
                                name="StockStatus"
                                placeholder="Available product quantity"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-600">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="UserEmail"
                                    value={user?.email || ""}
                                    readOnly
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-600">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="UserName"
                                    value={user?.displayName || ""}
                                    readOnly
                                    className="input input-bordered"
                                />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 hover:bg-blue-500 text-white transition-all">Add Equipment</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default AddEquipment;
