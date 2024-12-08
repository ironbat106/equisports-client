import { useEffect, useState } from "react";
import Loading from "./Loading";
import NavBar from "./NavBar";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetails = () => {

    const { id } = useParams();
    const [equipment, setEquipment] = useState();

    useEffect(() => {
        const fetchEquipmentDetails = async () => {
            try {
                const response = await fetch(`https://equisports-server-olive.vercel.app/equipment/${id}`);
                const data = await response.json();
                setEquipment(data);
            } catch (error) {
                console.error("Error fetching equipment details:", error)
            }
        };

        fetchEquipmentDetails();
    }, [id]);

    if (!equipment) {
        return <Loading></Loading>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar></NavBar>
            <div className="container mx-auto py-12 px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="h-full flex items-center justify-center bg-gray-100 ">
                        <img
                            src={equipment.Image || "https://via.placeholder.com/300"}
                            alt={equipment.ItemName}
                            className="rounded-lg w-4/5 max-h-96 object-cover shadow-md"
                        />
                    </div>

                    <div className="p-6 lg:p-12">

                        <h1 className="text-3xl lg:text-4xl font-bold font-charm text-blue-700 mb-4">
                            {equipment.ItemName}
                        </h1>

                        <p className="text-lg text-gray-600 mb-6">
                            {equipment.Description}
                        </p>
                        <div className="space-y-4">
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Category:</span>{" "}
                                {equipment.CategoryName}
                            </p>
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Price:</span> ${equipment.Price}
                            </p>
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Rating:</span> {equipment.Rating} / 5
                            </p>
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Customization:</span>{" "}
                                {equipment.Customization}
                            </p>
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Processing Time:</span>{" "}
                                {equipment.ProcessingTime} days
                            </p>
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Stock Status:</span>{" "}
                                {equipment.StockStatus} items available
                            </p>
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-bold">Added by:</span>{" "}
                                {equipment.UserName} ({equipment.UserEmail})
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start space-x-2">
                            <Link
                                to="/"
                                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                            >
                                <FaArrowLeft className="mr-2 text-lg" />
                                <span className="text-lg font-semibold">Back to Home Page</span>
                            </Link>

                            <Link
                                to="/allSportsEquip"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                            >
                               <span className="text-lg font-semibold">More Sports Equipment</span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;