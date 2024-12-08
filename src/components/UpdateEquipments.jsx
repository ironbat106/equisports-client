import { Link, useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Slide } from "react-awesome-reveal";

const UpdateEquipments = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const equipmentData = useLoaderData(); // Data fetched using loader
    const [equipment, setEquipment] = useState(equipmentData || {});

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({ duration: 1000 });
    }, []);

    const handleUpdateEquipment = (e) => {
        e.preventDefault();

        const updatedEquipment = {};
        // Iterate through the fields and update only those which are filled
        Array.from(e.target.elements).forEach((element) => {
            if (element.name && element.value && element.name !== "UserEmail" && element.name !== "UserName") {
                updatedEquipment[element.name] = element.value;
            }
        });

        updatedEquipment.UserEmail = user?.email || "Anonymous";
        updatedEquipment.UserName = user?.displayName || "Anonymous User";

        fetch(`https://equisports-server-olive.vercel.app/equipment/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEquipment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Equipment updated successfully!");
                    setTimeout(() => {
                        window.location.href = "/myEquipList";
                    }, 1000);
                } else {
                    toast.info("No changes were made.");
                }
            })
            .catch((error) => {
                console.error("Error updating equipment:", error);
                toast.error("Failed to update the equipment.");
            });
    };

    return (
        <div>
            <NavBar />
            <div className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <Slide>
                        <h1 className="text-3xl md:text-7xl font-bold text-blue-600 font-charm">
                            Update <span className="text-black">Equipment</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Update the equipment details below. Make necessary changes and submit.
                        </p>
                    </Slide>
                </div>
                <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200" data-aos="fade-up">
                    <form onSubmit={handleUpdateEquipment} className="space-y-6">
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
                                    defaultValue={equipment.Image}
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
                                    defaultValue={equipment.ItemName}
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
                                    defaultValue={equipment.CategoryName}
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
                                    defaultValue={equipment.Description}
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
                                    defaultValue={equipment.Price}
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
                                    defaultValue={equipment.Rating}
                                    min="1"
                                    max="5"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-600">Customization</span>
                                </label>
                                <input
                                    type="text"
                                    name="Customization"
                                    placeholder="Customization (e.g., bat with extra grip)"
                                    className="input input-bordered"
                                    defaultValue={equipment.Customization}
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
                                    defaultValue={equipment.ProcessingTime}
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-600">Stock Status</span>
                            </label>
                            <input
                                type="number"
                                name="StockStatus"
                                placeholder="Available product quantity"
                                className="input input-bordered"
                                defaultValue={equipment.StockStatus}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="UserName"
                                    className="input input-bordered bg-gray-100 cursor-not-allowed"
                                    defaultValue={user?.displayName || "Anonymous User"}
                                    readOnly
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="UserEmail"
                                    className="input input-bordered bg-gray-100 cursor-not-allowed"
                                    defaultValue={user?.email || "Anonymous"}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 hover:bg-blue-500 text-white transition-all">
                                Update Equipment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default UpdateEquipments;
