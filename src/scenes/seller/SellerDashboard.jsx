import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setLoading(false);
        navigate("/login");
      }
    };
    checkLogin();
  }, []);

  if (loading) return <p>loading</p>;
  if (user)
    return (
      <div>
        <div className=" text-5xl">Welcome {user.email}</div>
      </div>
    );
};

export default SellerDashboard;
