import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/home/home"
import TVFilm from './components/typeFilm/tvFilm';
import MovieFilm from './components/typeFilm/movieFilm';
import KeywordFilm from './components/typeFilm/KeywordFilm';
import GenreMovieFilm from './components/typeFilm/genreMovieFilm';
import GenreTvFilm from './components/typeFilm/genreTvFilm';
import DetailFilm from "./components/detailFilm/detailFilm"
import ErrorPage from './components/errorPage/errorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
    createHashRouter
  } from "react-router-dom";

const router = createHashRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/movie",
                element: <MovieFilm itemsPerPage={12}/>
            },
            {
                path: "/movie/:id",
                element: <GenreMovieFilm itemsPerPage={25}/>
            },
            {
                path: "/tv",
                element: <TVFilm itemsPerPage={12}/>
            },
            {
                path: "/tv/:id",
                element: <GenreTvFilm itemsPerPage={25}/>
            },
            {
                path: "/search/:keyword",
                element: <KeywordFilm itemsPerPage={12}/>
            },
            {
                path: "/tv/detail/:id",
                element: <DetailFilm type="tv" />
            },
            {
                path: "/movie/detail/:id",
                element: <DetailFilm type="movie" />
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
