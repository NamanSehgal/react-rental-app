import { orderBy } from 'lodash-es';

interface CarList {
    id: string,
    image: string,
    name: string,
    speed: string,
    price: number,
    efficiancy: string
}


export const sortAccordingToKeys = (carList: Array<CarList>, sortKey: string, sortByOrder: any): Array<CarList> => {
    return orderBy(carList, sortKey, sortByOrder)
}

// export const <dummyHelperFunctionToFormatCarDetails>