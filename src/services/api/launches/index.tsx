import axios from "axios";
import { FetchLaunchParams } from "../types";
      
export const getLauches = async (params:FetchLaunchParams) =>     {
    const {sort, page} = params;
const response = await axios.post(
  "https://api.spacexdata.com/v4/launches/query",
  {
    query: {},
    options: {
      page: page,
      limit: 4,
      sort,
    },
  }
);

return response?.data || null;
}