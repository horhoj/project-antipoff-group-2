import axios from 'axios';
import { BASE_URL, DEFAULT_HEADERS } from './const';
import { FetchUserListResponse, FetchUserResponse } from './users.types';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { ...DEFAULT_HEADERS },
});

export const fetchUserList = async (page: number) => {
  const res = await axiosInstance.request<FetchUserListResponse>({
    url: '/users',
    params: { page },
  });

  return res.data;
};

export const fetchUser = async (userId: number) => {
  const res = await axiosInstance.request<FetchUserResponse>({
    url: `/users/${userId}`,
  });

  return res.data;
};
