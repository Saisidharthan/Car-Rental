import { gql, request } from "graphql-request";

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clysgvxfi02r507walx6ab0ys/master';

export const getCarsList = async () => {
  const query = gql`
    query MyQuery {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
            url
        }
        carType
        carBrand
      }
    }`;

  const result = await request(MASTER_URL, query);
  return result;
}

export const getStoreLocation = async () => {
  const query = gql`
    query MyQuery {
      storesLocations {
        address
      }
    }`;

  const result = await request(MASTER_URL, query);
  return result;
}

export const createBooking=async(formValue:any)=>{
    const mutationQuery=gql`
        mutation MyMutation {
            createBooking(
                data: {
                userName: "`+formValue.userName+`",
                pickUpDate: "`+formValue.pickUpDate+`",
                dropOffDate: "`+formValue.dropOffDate+`",
                pickUpTime: "`+formValue.pickUpTime+`",
                dropOffTime: "`+formValue.dropOffTime+`",
                contactNumber: "`+formValue.contactNumber+`",
                carId: {connect: {id: "`+formValue.carId+`"}}}
            ) 
        {
            id
        }
}
    `
    const result = await request(MASTER_URL, mutationQuery);
    return result;
}