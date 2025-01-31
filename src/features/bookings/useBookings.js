import { useQuery } from "@tanstack/react-query";
import { getBookingAll } from "../../services/apiBookings";

export function useBookings(){
    const {isLoading,data:bookings, error} = useQuery({
        queryKey:['bookings'],
        queryFn:getBookingAll
    });
    
    return {isLoading,bookings,error}
}