
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";



const useDonarAllData = () => {

    const axiosData = useAxios()

    const { isPending, error, data: alldonardata, refetch } = useQuery({
        queryKey: ['useDonarAllData',],
        queryFn: () =>
            axiosData.get('/donardata')
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, alldonardata, refetch }
};

export default useDonarAllData;