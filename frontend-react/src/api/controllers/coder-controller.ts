import { $api, config } from "../index";

export const createStrCoder = (body: string) => {
    return $api.post(`/api/coder`, body, { headers: config() });
}