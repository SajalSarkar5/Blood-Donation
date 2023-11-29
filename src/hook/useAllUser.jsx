
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";



const useAllUser = () => {

    const axiosData = useAxios()
    const { isPending, error, data: alluser, refetch } = useQuery({
        queryKey: ['alluser',],
        queryFn: () =>
            axiosData.get('/alluser')
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, alluser, refetch }
};

export default useAllUser;