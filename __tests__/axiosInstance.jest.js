import axiosInstance from '../src/api/apiConfig';

describe('Axios Instance', () => {
  it('should create an axios instance with the correct base URL', () => {
    expect(axiosInstance.defaults.baseURL).toEqual(
      'https://api.punkapi.com/v2/'
    );
  });
});
