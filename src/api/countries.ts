import axios from 'axios';

export const  getAsianCountries = async (): Promise<any> => {
    return axios.get('https://restcountries.com/v3.1/region/asia')
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        // .finally(() => {
        //     console.log('done');
        // })
}