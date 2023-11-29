import React from 'react';
import useAllUser from '../../hook/useAllUser';
import useAxios from '../../hook/useAxios';
import { Helmet } from 'react-helmet';

const AllUsersPage = () => {
    const { isPending, error, alluser, refetch } = useAllUser()
    const axiosData = useAxios()

    const changeStatus = (id, status) => {
        axiosData.patch(`/changerole?id=${id}&status=${status}`)
        .then(res => {
            console.log(res.data)
            refetch();
        })
    }



    return (


        <div>
             <Helmet>
                <title>Blood Donation | All Users</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            {
                alluser?.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Photo</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alluser?.map((item, i) => {

                                        return <tr>

                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.photo} alt="" />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{item.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-ghost badge-sm">{item.email}</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-ghost badge-sm">{item.role}</span>
                                            </td>

                                            {
                                                item?.role !== 'admin' && <th className='flex justify-end items-center gap-4'>
                                                    <button onClick={() => changeStatus(item._id, 'donor')} className="btn btn-primary">Donor</button>
                                                    <button onClick={() => changeStatus(item._id, 'admin')} className="btn btn-primary">Admin</button>
                                                </th>
                                            }


                                        </tr>
                                    })
                                }


                            </tbody>



                        </table>
                    </div>
                    : <h1>No Data Here</h1>
            }
        </div>
    );
};

export default AllUsersPage;