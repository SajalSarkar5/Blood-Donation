import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";



const useContentManagement = () => {

    const axiosData = useAxios()
    const { isPending, error, data: allcontent } = useQuery({
        queryKey: ['isAdmin', ],
        queryFn: () =>
            axiosData.get('/allContent')
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allcontent }
};

export default useContentManagement;