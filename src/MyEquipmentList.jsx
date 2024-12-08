import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Loading from './Loading';
import { toast } from 'react-toastify';
import Aos from 'aos';
import Swal from 'sweetalert2';
import { AuthContext } from './provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const MyEquipmentList = () => {
  const equipmentData = useLoaderData();
  const [equipments, setEquipments] = useState(equipmentData || []);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const userEquipments = equipments.filter(
    (equipment) => equipment.UserEmail === user?.email
  );


  useEffect(() => {
    document.title = "My Equipments | EquiSports";
    Aos.init({ duration: 1000 });

    const timer = setTimeout(() => {
      fetch(`https://equisports-server-olive.vercel.app/equipment`)
        .then((res) => res.json())
        .then((data) => setEquipments(data))
        .catch((error) => console.error("Error fetching equipment:", error))
        .finally(() => setIsLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  const handleDeleteConfirmation = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEquipment(id);
      }
    });
  };

  const deleteEquipment = (id) => {
    setIsDeleting(true);
    fetch(`https://equisports-server-olive.vercel.app/equipment/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Equipment deleted successfully.");
          setEquipments((prev) => prev.filter((equipment) => equipment._id !== id));
        } else {
          toast.error("Failed to delete the equipment.");
        }
      })
      .catch((error) => {
        console.error("Error deleting equipment:", error);
        toast.error("An error occurred while deleting the equipment.");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar />

      <div className='max-w-screen-xl mx-auto p-10 text-center'>

        <Fade>
          <h1 className='text-3xl md:text-7xl font-bold text-blue-600 mb-8 font-charm'>
            My <span className="text-black">Equipments</span>
          </h1>

          <div className="mt-4 text-lg text-gray-600">
            <p className='text-black font-charm'><span className='text-blue-600 font-semibold'>Username:</span> {user?.displayName || "Anonymous"}</p>
            <p className='text-black font-charm'><span className='text-blue-600 font-semibold'>Email:</span> {user?.email || "Not logged in"}</p>
          </div>
        </Fade>

        <div className="divider text-gray-500"></div>

        {userEquipments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {userEquipments.map((equipment) => (
              <div
                key={equipment._id}
                className="group bg-blue-400 p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                data-aos="fade-up"
              >

                <figure>
                  <img
                    className="h-60 w-full object-cover group-hover:scale-105 transform transition-transform duration-300"
                    src={equipment.Image || 'https://via.placeholder.com/150'}
                    alt={equipment.ItemName || 'Equipment'}
                  />
                </figure>

                <div className="p-4">
                  <h2 className="text-3xl font-semibold text-gray-800 font-charm">
                    {equipment.ItemName}
                  </h2>
                  <p className="text-xl text-gray-600 mt-2">Category: {equipment.CategoryName}</p>
                  <p className="text-xl text-gray-600 mt-2">Price: ${equipment.Price}</p>
                  <div className="flex justify-center mt-4 gap-6">
                    <button
                      onClick={() => navigate(`/updateEquip/${equipment._id}`)}
                      className="btn btn-primary px-4 py-2 text-white rounded hover:bg-blue-500 transition-all font-mono"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteConfirmation(equipment._id)}
                      className="btn btn-primary px-4 py-2  text-white rounded hover:bg-red-500 transition-all font-mono"
                      disabled={isDeleting}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 col-span-3">No equipment found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyEquipmentList;
