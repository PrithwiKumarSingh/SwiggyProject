import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true";
    const response = await fetch(proxy + api);
    const data = await response.json();

    return {
      famousFood: data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [],

      topRest: data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],

      restData: data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
    };
  }
);

export const fetchMenu = createAsyncThunk(
  "restaurant/fetchMenu",
  async (id) => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

    const response = await fetch(proxy + api);
    const data = await response.json();

    const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const filtered = tempData?.filter((item) => "title" in item?.card?.card) || [];

    return { id, menu: filtered };
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    famousFood: [],
    topRest: [],
    restData: [],
    menuById: {},
    menuStatus: {},
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.famousFood = action.payload.famousFood;
        state.topRest = action.payload.topRest;
        state.restData = action.payload.restData;
      })
      .addCase(fetchRestaurants.rejected, (state) => {
        state.status = "failed";
      })

        .addCase(fetchMenu.pending, (state, action) => {
        const id = action.meta.arg;
        state.menuStatus[id] = "loading";
        })
        .addCase(fetchMenu.fulfilled, (state, action) => {
        const { id, menu } = action.payload;

        state.menuStatus[id] = "succeeded";
        state.menuById[id] = menu;
        })
        .addCase(fetchMenu.rejected, (state, action) => {
        const id = action.meta.arg;
        state.menuStatus[id] = "failed";
        })
  },
});

export default restaurantSlice.reducer;