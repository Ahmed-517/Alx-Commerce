import supabase from "./supabase";

export const sellerLogin = async (values) => {
  try {
    const { email, password } = values;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error sining in the seller: ", error);
      return { error };
    }

    console.log("logged in successfully");
    return { data };
  } catch (error) {
    console.error("Error in sining in the seller: ", error);

    return { error };
  }
};
