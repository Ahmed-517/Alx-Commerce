import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../../utils/supabase";

const SellerProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsAuthenticated(true);
      }

      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) return <div>loading...</div>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default SellerProtectedRoute;
