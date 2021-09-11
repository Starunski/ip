class ApiService {
  async getUserLocation(ip) {
    const baseUrl = "http://api.ipstack.com";
    const accessToken = "326a9a3b86144aec56ecba70b189a32f";
    const baseIp = "134.201.250.155";
    //   var accessToken = sessionStorage.getItem('access_token');

    const res = await fetch(
      `${baseUrl}/${ip}?access_key=${accessToken}`
    );
    // if (!res.ok) {
    //   throw new Error("Fetch request is failed", {
    //     url: `${baseUrl}/134.201.250.155`,
    //     status: res.status,
    //     statusText: res.statusText,
    //   });
    // }
    const response = await res.json();
    return response;
  }
}
const apiService = new ApiService();

export { apiService };
