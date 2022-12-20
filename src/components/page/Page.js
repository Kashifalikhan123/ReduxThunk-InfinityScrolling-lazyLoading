import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { search } from "../../redux/User";
import moment from 'moment';
import { Link, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Page.css";
export default function Page() {
  const [data, setData] = useState({
    date: moment(new Date()).format("DD/MM/YYYY"),
    country: "",
    pageSize:10
  });
  const dispatch = useDispatch();
  const select = useSelector((state) => state.user.value.data);
  const navigate = useNavigate();
  const fetchMoreData = () => {
    
    setTimeout(() => {
      setData({
        date:data.date,
        country:data.country,
        pageSize:data.pageSize+5
      })
    }, 1500);
  };
  useEffect(() => {
    if (data.date !== "" || data.country !== "") {
      dispatch(search(data));
    }
  }, [data]);
  return (
    <div className="container">
      <div className="input-container">
        <div>
          <label>Select Date :</label>
          <input
            type="date"
             id={"#date"}
            placeholder={data.date}

            onChange={(e) => {
              setData({ date: e.target.value, country: data.country });

            }}
          />
          {data.date}
        </div>
        <div>
          <label>Country code :</label>
          <input
            type="text"
            placeholder="text"
            onChange={(e) => {
              setData({ date: data.date, country: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="show-data">
     
        <div className="table-container">
          <div className="table-horizontal-container">
          <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={select[0]!==undefined?select[0].length:<></>}
            next={fetchMoreData}
            hasMore={true}
            scrollableTarget="scrollableDiv"
          >
             <table className="unfixed-table">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>country</th>
                  <th>language</th>
                  <th>topic</th>
                </tr>
              </thead>
              <tbody>
                {select[0] !== "" && select[0] !== null&& select[0] !== undefined ? (
                  <>
                    {select[0].map((item, index) => (
                      <tr onClick={()=>{
                        navigate("/detail-page",
                        {state: {data:item}})
                      }}>
                        <td>{item?.author}</td>
                        <td>{item?.country}</td>
                        <td>{item?.language}</td>
                        <td>{item?.topic}</td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
