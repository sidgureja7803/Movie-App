import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmUxYmEwZGVjNGI1N2QzZmY5ZGM5ZDU5MTEyYjVmZCIsInN1YiI6IjY2Mzg4MzAwYjc2Y2JiMDEyOTYyNmZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FCO1_MXV0XEbc3sNUUJ63WXADhqs8s4hKcnGNrVF0bs",
  },
});


export default instance;
