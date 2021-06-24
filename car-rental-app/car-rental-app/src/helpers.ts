import { orderBy } from 'lodash-es';

interface CarList {
    id: String,
    image: String,
    name: String,
    price: Number,
}


export const sortAccordingToKeys = (carList: Array<CarList>, sortKey: string, sortByOrder: any): Array<CarList> => {
    return orderBy(carList, sortKey, sortByOrder)
}