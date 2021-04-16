import { CircularProgress } from '@material-ui/core';
import React, { useEffect,useState,createContext } from 'react';
import { Table } from 'react-bootstrap';
import SharingSidebar from '../../Shared/Sidebar/SharingSidebar/SharingSidebar';
import ManageSingleOrderItem from './ManageSingleOrderItem/ManageSingleOrderItem';
export const AllPlacedOrderContext = createContext();


const ManageOrders = () => {
    const [loading, setLoading] = useState(true);
    const [placedOrders, setPlacedOrders] = useState([]);
    const [changeOrderStatus, setChangeOrderStatus] = useState(false);
    useEffect(() => {
      fetch(`http://localhost:5000/allPlacedOrders`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          setPlacedOrders(data);
          setLoading(false);
        });
    }, [changeOrderStatus]);
    return (
        <SharingSidebar>
             {loading ? (
            <div className="text-center">
              <CircularProgress />
            </div>
          ) : (
            ""
          )}

          <AllPlacedOrderContext.Provider
            value={[changeOrderStatus, setChangeOrderStatus]}
          >
            {placedOrders.length > 0 && (
              <div className="p-4">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Booking Place</th>
                      <th>Booking Date</th>
                      <th>Guest Name</th>
                      <th>Guest Email</th>
                      <th>Guest Phone</th>
                      <th>Payment Status & TransactionId</th>
                      <th>Booking Status</th>
                    </tr>
                  </thead>
                  <tbody>
                      
                    {placedOrders.map((order) => (
                      <ManageSingleOrderItem key={order._id} order={order}/>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </AllPlacedOrderContext.Provider>
        </SharingSidebar>
    );
};

export default ManageOrders;