import React, {useState} from 'react';
import PostCard from "../components/PostCard";
import {useGetPostsQuery} from "../features/apiSlice";

const MainPage = () => {
        const [page, setPage] = useState(1)
        const {
            data,
            isError,
            isLoading,
            refetch
        } = useGetPostsQuery(page);
        const handlePageChange = (one) =>{
            setPage(prev=>(prev+one))
            refetch()
        }
        if (isLoading) {
            return (
                <div className="App">
                    <h1>Loading, Please wait</h1>
                    <div className="loader"></div>
                </div>
            );
        }
        if (isError) {
            return (
                <div className="App">
                    <h1>Error</h1>
                    <h2>Something went wrong</h2>
                </div>
            )
        }
        if (data.length !== 0) {
            return (
                <div className="App">

                    {data.map(item => (
                        <PostCard key={item.id} item={item}/>
                    ))}
                    <h1>{page}</h1>
                    <div >
                        <button  className={"button"} disabled={page<=1}
                                 onClick={()=>handlePageChange(-1)} >Previous Page</button>
                        <button  className={"button"}
                                 onClick={()=>handlePageChange(1)} >Next Page</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <h1>NO DATA</h1>
                    <h2>Please go back to previous page</h2>
                    <button  className={"button"}
                             onClick={()=>handlePageChange(-1)} >Previous Page</button>
                </div>
            )
        }
    }
export default MainPage;