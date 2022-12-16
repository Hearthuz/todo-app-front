import { API_URL } from "../config";
import { ListInput } from "types";

const jsonHeaders = {
  "Content-Type": "application/json",
};

const handleStatus = async (res: Response) => {
  const resJson = await res.json();
  if (res.status >= 200 && res.status < 300) {
    return resJson;
  }
  throw new Error(JSON.stringify(resJson));
};

export const getList = () =>
  fetch(`${API_URL}/list`, {
    method: "GET",
    headers: jsonHeaders,
  }).then(handleStatus);

export const postList = (body: ListInput) =>
  fetch(`${API_URL}/list`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(body),
  }).then(handleStatus);

export const deleteList = (id: number) =>
  fetch(`${API_URL}/list/${id}`, {
    method: "DELETE",
    headers: jsonHeaders,
  }).then(handleStatus);

export const updateList = (id: number, body: Partial<ListInput>) =>
  fetch(`${API_URL}/list/${id}`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify(body),
  }).then(handleStatus);
