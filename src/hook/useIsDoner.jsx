
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";



const useIsDoner = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosData = useAxios()
    const { isPending, error, data: isDoner } = useQuery({
        queryKey: ['isdoner', user?.email],
        enabled: !loading,
        queryFn: () =>
            axiosData.get(`/isDoner/${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, isDoner }
};

export default useIsDoner;