import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

const RequestsTable = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      const { data, error } = await supabase.from("alx_commerce_requests")
        .select(`
            created_at,
            user_name,
            country,
            street1,
            street2,
            city,
            zipCode,
            email,
            phoneNumber,
            state,
            alx_commerce_request_items (
              count,
              alx_commerce_items (
                item_name,
                item_price
              )
            )
          `);

      if (error) {
        console.error("Error fetching requests:", error);
      } else {
        setRequests(data);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <div>loading...</div>;
  if (requests) console.log(requests);
  return (
    <>
      <div className="container">
        <h2 className="text-2xl">Alx Commerce Requests</h2>
        <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
          <thead className="text-2xl font-semibold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Date
              </th>
              <th scope="col" className="px-4 py-3">
                User
              </th>
              <th scope="col" className="px-4 py-3">
                Address
              </th>
              <th scope="col" className="px-4 py-3">
                Email
              </th>
              <th scope="col" className="px-4 py-3">
                Phone
              </th>
              <th scope="col" className="px-4 py-3">
                Items
              </th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {requests.map((request, index) => (
              <tr className="border-b dark:border-gray-700" key={index}>
                <td className="px-4 py-3">{request.created_at}</td>
                <td className="px-4 py-3">{request.user_name}</td>
                <td className="px-4 py-3">{`${request.street1}, ${request.city}, ${request.state}, ${request.zipCode}`}</td>
                <td className="px-4 py-3">{request.email}</td>
                <td className="px-4 py-3">{request.phoneNumber}</td>
                <td className="px-4 py-3">
                  {request.alx_commerce_request_items.map((item, i) => (
                    <div key={i}>
                      <p>Product: {item.alx_commerce_items.item_name}</p>
                      <p>Price: ${item.alx_commerce_items.item_price}</p>
                      <p>Quantity: {item.count}</p>
                      <hr />
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestsTable;
