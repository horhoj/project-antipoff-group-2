import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUser, fetchUserList } from '~/api/users';
import { FetchUserListResponse, FetchUserResponse } from '~/api/users.types';

const SLICE_NAME = 'usersSlice';

const makeRequest = () => ({
  data: null,
  error: null,
  isLoading: false,
});

interface IS {
  fetchUserListRequest: {
    isLoading: boolean;
    data: null | FetchUserListResponse;
    error: null | unknown;
  };
  fetchUserRequest: {
    isLoading: boolean;
    data: null | FetchUserResponse;
    error: null | unknown;
  };
}

const initialState: IS = {
  fetchUserListRequest: makeRequest(),
  fetchUserRequest: makeRequest(),
};

const { actions, reducer } = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    fetchUserRequestClear: (state) => {
      state.fetchUserRequest = makeRequest();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserListThunk.pending, (state) => {
        state.fetchUserListRequest.isLoading = true;
        state.fetchUserListRequest.error = null;
      })
      .addCase(fetchUserListThunk.fulfilled, (state, action) => {
        state.fetchUserListRequest.isLoading = false;
        state.fetchUserListRequest.data = action.payload;
      })
      .addCase(fetchUserListThunk.rejected, (state, action) => {
        state.fetchUserListRequest.isLoading = false;
        state.fetchUserListRequest.data = null;
        state.fetchUserListRequest.error = action.payload || action.error;
      });

    builder
      .addCase(fetchUserThunk.pending, (state) => {
        state.fetchUserRequest.isLoading = true;
        state.fetchUserRequest.error = null;
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.fetchUserRequest.isLoading = false;
        state.fetchUserRequest.data = action.payload;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.fetchUserRequest.isLoading = false;
        state.fetchUserRequest.data = null;
        state.fetchUserRequest.error = action.payload || action.error;
      });
  },
});

interface FetchUserListThunkPayload {
  page: number;
}

const fetchUserListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserListThunk`,
  async ({ page }: FetchUserListThunkPayload, store) => {
    try {
      const res = await fetchUserList(page);
      return store.fulfillWithValue(res);
    } catch (e: unknown) {
      return store.rejectWithValue((e as Error).message);
    }
  },
);

interface FetchUserThunkPayload {
  userId: number;
}

const fetchUserThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserThunk`,
  async ({ userId }: FetchUserThunkPayload, store) => {
    try {
      const res = await fetchUser(userId);
      return store.fulfillWithValue(res);
    } catch (e: unknown) {
      return store.rejectWithValue((e as Error).message);
    }
  },
);

export const usersSlice = {
  actions,
  reducer,
  thunks: { fetchUserListThunk, fetchUserThunk },
} as const;
