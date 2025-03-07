/*{
    "id": 171443,
    "type": {
      "id": 2,
      "name": "DEPARTURE"
    },
    "flightKey": "202503071415IDJU  1320JU  132",
    "flightNumber": "JU  132",
    "destination": "Moscow Sheremetyevo",
    "scheduledAt": "2025-03-07T14:15:00",
    "estimatedAt": null,
    "connectedType": "0",
    "connectedFlight": null,
    "plane": "320",
    "gate": null,
    "terminal": "1"
  }*/

export interface FlightModel {
    id: number
    type: {
        id: number
        name: string
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduledAt: string
    estimatedAt: null | string
    connectedType: string
    connectedFlight: string
    plane: string
    gate: null | string
    terminal: string
}