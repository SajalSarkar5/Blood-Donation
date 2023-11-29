import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";



const useIsAdmin = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosData = useAxios()
    const { isPending, error, data: isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: () =>
            axiosData.get(`/isadmin/${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, isAdmin }
};

export default useIsAdmin;