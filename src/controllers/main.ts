import axios from 'axios';

export class mainController {

    public static async getAPI(): Promise<any> {
        try {
            return axios.get("https://nominatim.openstreetmap.org/search?format=json&q=Roermond");
        } catch (error) {
            console.error(error);

        }
    }
}