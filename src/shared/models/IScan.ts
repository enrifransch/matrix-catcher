
export interface IScan {
    dateTime: Date,
    latitude: string,
    longitude: string,
    mission: string,
    scanFilters: Array<any>,
    notes: string
}