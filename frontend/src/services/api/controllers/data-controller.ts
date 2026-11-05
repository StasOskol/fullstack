import { dataDto } from "@/types/data/data.type";
import { api } from "..";

export const dataController = {
    getData: () => {
        return api.get<dataDto[]>('/array')
    },

    createData: (data: dataDto) => {
        return api.post<dataDto>('/array', data);
    }
}