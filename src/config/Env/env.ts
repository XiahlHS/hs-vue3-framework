const PDFVersion = '3.2.146';

export default {
  request: {
    baseUrl: {
      dev: "/api",
      pro: "/api",
      uat: "/api",
    },
    timeout: 10000,
    headers: "multipart/form-data",
  },
  cdn: {
    url: `http://sangongli.top:8082/pdfjs/${PDFVersion}`
  }
};
