import supabase from "./supabase";

// Function to handle request creation
export const makeRequest = async (values, cart) => {
  try {
    const {
      firstName,
      lastName,
      country,
      street1,
      street2,
      city,
      state,
      zipCode,
    } = values.billingAddress;

    // Construct requestBody
    const requestBody = {
      userName: [firstName, lastName].join(" "),
      country: country,
      street1: street1,
      street2: street2,
      city: city,
      state: state,
      zipCode: zipCode,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
      email: values.email,
      phoneNumber: values.phoneNumber,
    };

    // Step 1: Insert into the 'requests' table
    const { data: requestData, error: requestError } = await supabase
      .from("alx_commerce_requests")
      .insert([
        {
          user_name: requestBody.userName,
          country: requestBody.country,
          street1: requestBody.street1,
          street2: requestBody.street2,
          city: requestBody.city,
          state: requestBody.state,
          zipCode: requestBody.zipCode,
          email: requestBody.email,
          phoneNumber: requestBody.phoneNumber,
          created_at: new Date(),
        },
      ])
      .select(); // Use 'select()' to get the inserted request ID

    if (requestError) {
      console.error("Error inserting request:", requestError);
      return;
    }

    const requestId = requestData[0].id; // Assuming the first result is the inserted row

    // Step 2: Insert products into the 'request_items' table
    const requestItemsData = requestBody.products.map((product) => ({
      request_id: requestId,
      product_id: product.id,
      count: product.count,
    }));

    const { error: requestItemsError } = await supabase
      .from("alx_commerce_request_items")
      .insert(requestItemsData);

    if (requestItemsError) {
      console.error("Error inserting request items:", requestItemsError);
      return;
    }

    console.log("Request and products inserted successfully!");
  } catch (error) {
    console.error("Error in makeRequest:", error);
  }
};
